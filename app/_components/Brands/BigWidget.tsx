import Image from "next/image";
import Pattern from "../Pattern";
import { Link } from "@/navigation";

export default function BigWidget({ data, index }: any) {
  const isEven = index % 2 === 0;
  // console.log("data", data);
  const format_description = data.SmallWidgetShort.replace(/\n/g, "</p><p>");
  return (
    <div className="group relative py-20 sm:px-3 md:py-[80px]">
      <div className="container mx-auto">
        <div
          className={`flex items-center md:gap-40 gap-20 pb-50 md:py-0 px-20 md:px-0 flex-col ${
            isEven ? "md:flex-row" : "md:flex-row-reverse "
          }`}
        >
          <div className="relative mb-[30px] flex w-full md:block md:w-[calc(100%-400px)]">
            <div className="block w-[30%] pr-20 md:hidden">
              <div className="relative my-20 flex h-[280px] items-center justify-start pl-[30px] md:pl-[50px]">
                <span
                  className={`absolute top-0 bottom-0 left-0 w-[5px] rounded-xl bg-${data.BrandColor}`}
                ></span>
                <span>{data?.Logo?.data?.attributes?.formats?.url}</span>
                {data.Logo.data.attributes.formats ? (
                  data.Logo.data.attributes.formats.medium &&
                  data.Logo.data.attributes.formats.medium.width < 500 ? (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_URL +
                        data.Logo.data.attributes.formats.medium.url
                      }
                      alt="img alt"
                      className="pr-20"
                      width={data.Logo.data.attributes.formats.medium.width}
                      height={data.Logo.data.attributes.formats.medium.height}
                    />
                  ) : (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_URL +
                        data.Logo.data.attributes.formats.thumbnail.url
                      }
                      alt="img alt"
                      width={data.Logo.data.attributes.formats.thumbnail.width}
                      height={
                        data.Logo.data.attributes.formats.thumbnail.height
                      }
                    />
                  )
                ) : (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      data.Logo.data.attributes.url
                    }
                    alt="img alt"
                    width={data.Logo.data.attributes.width}
                    height={data.Logo.data.attributes.height}
                  />
                )}
              </div>
            </div>
            <div className="w-[calc(100%-30%)] md:w-auto">
              <Link
                href={`/brands/${data.slug}`}
                prefetch={false}
                className="relative block aspect-[928/619] h-full w-full overflow-hidden bg-white"
              >
                {data.HeroImage.data?.attributes.url && (
                  <Image
                    alt=""
                    fill
                    className="object-cover transition-all group-hover:scale-110"
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      data.HeroImage.data?.attributes.url
                    }
                  />
                )}
              </Link>
              <span
                className={`absolute md:bottom-[20px] hidden  md:block z-8 pointer-events-none ${
                  isEven
                    ? "right-[-34px]  rotate-90"
                    : "left-[-25px] -rotate-90"
                }`}
              >
                <Pattern spanWidth={3} color={data.BrandColor} />
              </span>
              <span
                className={`absolute  top-[274px]  block md:hidden z-8 pointer-events-none ${
                  isEven ? "right-[-8px]  rotate-90" : "left-[297px] -rotate-90"
                }`}
              >
                <Pattern spanWidth={3} color={data.BrandColor} />
              </span>
              <span
                className={`absolute md:top-[-60px] hidden md:block z-8 pointer-events-none ${
                  isEven ? "left-[50px]" : "right-[50px]"
                }`}
              >
                <Pattern spanWidth={6} color={data.BrandColor} />
              </span>
              <span
                className={`absolute top-[-17px]  block md:hidden z-8 pointer-events-none ${
                  isEven ? "left-[117px]" : "right-[184px]  "
                }`}
              >
                <Pattern spanWidth={3} color={data.BrandColor} />
              </span>
            </div>
          </div>
          <div className="flex w-auto flex-col gap-[10px] md:w-[400px]">
            <h2 className="text-[25px] font-medium md:text-[36px]">
              {data.SmallWidgetTitle}
              <Link href={`/brands/${data.slug}`} prefetch={false}>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-[11] my-3 md:my-0"
                ></span>
              </Link>
            </h2>
            <h5 className="text-l font-light md:text-xl">
              {data.SmallWidgetSubTitle}
            </h5>
            <div className="relative my-20 hidden h-[280px] items-center justify-start pl-[50px] md:flex">
              <span
                className={`absolute top-0 bottom-0 left-0 w-[5px] rounded-xl bg-${data.BrandColor}`}
              ></span>
              <span>{data?.Logo?.data?.attributes?.formats?.url}</span>
              {data.Logo.data.attributes.formats ? (
                data.Logo.data.attributes.formats.medium &&
                data.Logo.data.attributes.formats.medium.width < 500 ? (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      data.Logo.data.attributes.formats.medium.url
                    }
                    alt="img alt"
                    width={data.Logo.data.attributes.formats.medium.width}
                    height={data.Logo.data.attributes.formats.medium.height}
                  />
                ) : (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      data.Logo.data.attributes.formats.thumbnail.url
                    }
                    alt="img alt"
                    width={data.Logo.data.attributes.formats.thumbnail.width}
                    height={data.Logo.data.attributes.formats.thumbnail.height}
                  />
                )
              ) : (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    data.Logo.data.attributes.url
                  }
                  alt="img alt"
                  width={data.Logo.data.attributes.width}
                  height={data.Logo.data.attributes.height}
                />
              )}
            </div>
            <div
              className={`text-xs text-gray`}
              dangerouslySetInnerHTML={{ __html: format_description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
