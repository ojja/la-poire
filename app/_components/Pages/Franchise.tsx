"use client";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import { motion } from "@/app/lib/motion";
import MoreAboutItem from "../MoreAboutItem";
import SectionTitles from "../UI/SectionTitles";
import ReactPlayer from "react-player";
import PlayBtn from "../Icons/PlayBtn";
import OurBrands from "../OurBrands";
// import Testimonials from "../Testimonials";
import RequestSection from "../UI/RequestSection";
import FAQsSection from "../UI/FAQsSection";
import Newsletter from "../Newsletter";
import { useTranslations } from "next-intl";

export default function Franchise({ data }: any) {
  const t = useTranslations("common");
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.Title}
        subtitle={data.Subtitle}
        description={data.Description}
        max_width
        height_auto={true}
      />

      <div className="bg-greenBlack px-4 pb-72 pt-72 lg:py-72">
        <div className="container mx-auto">
          <div className="flex flex-col gap-50">
            <section className="text-center text-white">
              <SectionTitles
                tagline={data.SectionTitles.TagLine}
                title={data.SectionTitles.Title}
                sub_title={data.SectionTitles.Subtitle}
              />
            </section>
            <div className="flex grid-cols-2 flex-wrap justify-between gap-5 gap-y-[80px] md:grid-cols-3 md:gap-x-56">
              {data.MoreAboutData.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  className="w-[calc(50%-10px)] md:w-320"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <MoreAboutItem
                    img={
                      process.env.NEXT_PUBLIC_API_URL +
                      item.Image.data?.attributes.url
                    }
                    title={item.Title}
                    desc={item.Description}
                    colorAlt
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[152px] bg-goldLight px-4 pb-[170px] pt-[72px] md:mb-[278px] md:py-64">
        <div className="container mx-auto">
          <div className="mb-7 flex flex-col items-center justify-center gap-20">
            <section className="text-center text-black">
              <SectionTitles
                tagline={data.FranchiseSectionTitle.TagLine}
                taglineAlt
                title={data.FranchiseSectionTitle.Title}
                sub_title={data.FranchiseSectionTitle.Subtitle}
              />
            </section>
            <p className="mx-auto max-w-3xl text-center text-[12px] text-gray5 md:text-sm">
              {data.FranchiseSectionTitle.Description}
            </p>
          </div>
          {hasWindow && (
            <div className="-mb-[278px] aspect-video w-full">
              <ReactPlayer
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${data.YoutubeID}`}
                playing
                light={
                  process.env.NEXT_PUBLIC_API_URL +
                  data.YoutubeCover.data?.attributes.url
                }
                playIcon={
                  <span className="z-10 h-[100px] w-[100px] md:h-[141px] md:w-[140px]">
                    <PlayBtn />
                  </span>
                }
              />
            </div>
          )}
        </div>
      </div>

      <OurBrands title={data.BrandsTitle} brandsList={data.brands.data} />

      <div className="container mx-auto mb-30 mt-30 hidden md:mb-95 lg:block">
        <span className="hidden h-[5px] w-full bg-gray3 lg:block" />
      </div>
      {/* <Testimonials /> */}

      <RequestSection
        subTitle={data.RequestSubTitle}
        title={data.RequestTitle}
        paragraph={data.RequestParagraph}
      />

      <FAQsSection subTitle={data.FAQSubtitle} title={data.FAQTitle} />

      <Newsletter />
    </div>
  );
}
