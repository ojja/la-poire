import Image from "next/image";
import React from "react";
import StoryLoader from "./StoryLoader";
import { arfont, pt_serif } from "@/app/fonts";
import { useLocale } from "next-intl";

export default function Story({ data }: any) {
  const locale = useLocale();
  if (!data) {
    // You can render a placeholder or handle this case as needed
    return <StoryLoader />;
  }
  const paragraphs = data.StoryDescription.split("\n\n").map(
    (paragraph: string, index: number) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    )
  );
  return (
    <div className="relative lg:before:content-none before:content-normal before:absolute before:inset-0 before:w-full before:h-[10%]">
      <div className="container mx-auto max-w-[1000px] px-3">
        <div className="relative lg:aspect-[2/1] aspect-[792/788] md:aspect-[1188/788] top-5" >
          {data.HeroImage.data?.attributes.url && (
            <Image
              alt=""
              fill
              className="object-cover lg:h-full lg:p-0 "
              src={
                process.env.NEXT_PUBLIC_API_URL +
                data.HeroImage.data?.attributes.url
              }
            />
          )}
        </div>
        <div className="py-[45px] ">
          <div className="flex  lg:items-start lg:flex-row lg:text:left flex-col items-center ">
            <div className="w-[300px] shrink-0 flex-grow-0 pr-5 flex-col lg:flex-row ">
              <div className="relative flex flex-col lg:h-full aspect-[198/234] w-[92px] lg:w-full m-auto items-center mb-[40px]" >
                <Image  
                  alt="Brand Logo"
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    data.Logo.data?.attributes.url
                  }
                  fill
                  sizes="(max-width: 640px), (max-width: 1024px)"
                  className=" w-[90px] lg:max-w-[160px] object-contain object-center lg:object-top 4 m-auto"
                  // width={data.Logo.data.attributes.width}
                  // height={data.Logo.data.attributes.height}
                  // width={data.Logo.data.attributes.width > 150 ? data.Logo.data.attributes.width / 2 : data.Logo.data.attributes.width}
                  // height={data.Logo.data.attributes.width > 150 ? data.Logo.data.attributes.height / 2 : data.Logo.data.attributes.height}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{data.StoryTitle}</h3>
              <h4 className="text-xl font-light">{data.StorySubTitle}</h4>
              <div
                className={`space-y-34 mt-34 ${
                  locale === "ar" ? arfont.className : pt_serif.className
                } text-greenBlack leading-[28px]`}
              >
                {paragraphs}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
