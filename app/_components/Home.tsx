import Link from "next/link";
import AboutSection from "./AboutSection";
import LandingHero from "./LandingHero";
import MoreAbout from "./MoreAbout";
import Newsletter from "./Newsletter";
import OurBrands from "./OurBrands";
// import Testimonials from "./Testimonials";
// import { fetchLanding } from "../api/general";
// import { fetchingAllBrands } from "../api/fetcher";
// import { useLocale } from "next-intl";
import SectionTextImage from "./UI/SectionTextImage";
import { useTranslations } from "next-intl";
// import BlogWidget from "./UI/BlogWidget";
// import SectionTitles from "./UI/SectionTitles";

export default function Home({ data }: any) {
  const t = useTranslations("common");

  if (!data) {
    return null;
  }

  return (
    <div>
      <LandingHero
        brandsList={data.attributes?.OurBrands.data}
        title={data.attributes?.Title}
        brandsNum={data.attributes?.BrandsNum}
        brandBrief={data.attributes?.brandBrief}
        employeesNum={data.attributes?.EmployeesNum}
        locationsNum={data.attributes?.LocationsNum}
        numbersTitle={data.attributes?.numbersTitle}
        numbersDescription={data.attributes?.numbersDescription}
      />
      <OurBrands brandsList={data?.attributes?.OurBrands.data} />
      <AboutSection />
      <MoreAbout data={data.attributes} />
      <div className='container mx-auto mb-30 mt-30 md:mb-95'>
        <span className='hidden lg:block h-[5px] w-full bg-gray3' />
      </div>
      {/* <Testimonials /> */}

      {data.attributes.FranchiseBox.map((item: any, index: number) => (
        <SectionTextImage
          key={index}
          image_position={item.image_position}
          image_src={
            item.Image.data?.attributes.url
              ? process.env.NEXT_PUBLIC_API_URL +
                item.Image.data?.attributes.url
              : "/images/placeholder.webp"
          }
          color={item.Color}>
          <div className='flex max-w-[580px] pl-2 md:pl-0 flex-col text-black'>
            <h2 className='text-xl w-[348px] md:w-full md:text-3xl lg:text-[5xl] font-semibold'>
              {item.Title}
            </h2>
            <h4 className='mt-10 text-gray5'>{item.Subtitle}</h4>
            <p className='mt-30 text-[12px] md:text-base pb-3'>
              {item.Description}
            </p>
            <h4 className='mt-10 text-gray5 mr-2 md:mr-0 hover:text-greenBlack'>
              <div className='flex flex-col lg:flex-row-reverse gap-10 lg:w-[332px]'>
                <Link href={`/franchise`}>
                  <button className='focus:outline-none w-full  transition ease-in-out duration-300 font-medium whitespace-nowrap px-34 py-2 md:text-sm  mt-10 md:leading-[21px] tracking-[0.02em] text-sm bg-gold hover:bg-goldHover focus:ring-2 focus:ring-gold focus:ring-opacity-50 text-white rounded-full uppercase false'>
                    {"apply now"}
                  </button>
                </Link>

                <Link href={`/franchise`}>
                  <button className=' hover:bg-gold whitespace-nowrap w-full lg:w-[160px]  hover:text-white transition border-gold flex-nowrap border-[2px] rounded-full font-semibold uppercase text-gold text-[12px] md:text-xs lg:text-sm py-2 px-3 mt-10'>
                    {t("LearnMore")}
                  </button>
                </Link>
              </div>
            </h4>
          </div>
        </SectionTextImage>
      ))}

      {/* <div className="container mx-auto flex flex-col gap-40 py-72">
      <section>
        <SectionTitles
          title={data.attributes.blogTitle}
          tagline={data.attributes.blogSubTitle}
          taglineAlt
          taglineLight
        />
      </section>
      <div className="grid gap-x-[25px] gap-y-[50px] md:grid-cols-4">
        {data.attributes.blogs.data.map((item: any, index: number) => (
          <BlogWidget key={index} data={item.attributes} />
        ))}
      </div>
    </div> */}
      <Newsletter />
    </div>
  );
}
