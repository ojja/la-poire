"use client";
import React from "react";
import Joy from "./Icons/Joy";
import { arfont, pt_serif } from "../fonts";
import ArrowLeft from "./Icons/ArrowLeft";
import { motion } from "@/app/lib/motion";
import CurveBorder from "./Icons/CurveBorder";
import { useLocale } from "next-intl";

export default function AboutSection({ color, description }: any) {
  const locale = useLocale();
  let baseColor = "bg-greenBlack";
  let textColor = "text-goldLight";
  if (color === "pink") {
    baseColor = "bg-pinkLight";
    textColor = "text-pinkDark";
  }
  return (
    <div className={`py-[64px] lg:py-[100px] px-4 ${baseColor}`}>
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse items-center justify-center gap-40 md:gap-0 lg:flex-nowrap lg:justify-between">
          <div className="w-auto">
            {description ? (
              <div
                className={`md:text-2xl lg:text-[38px] lg:leading-relaxed text-[21px] md:pt-40 lg:pt-0 ${
                  locale === "ar" ? arfont.className : pt_serif.className
                } text-white md:w-[700px] w-full font-normal`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p
                className={`md:text-2xl lg:text-[38px] lg:leading-relaxed text-[21px] md:pt-40 lg:pt-0 ${
                  locale === "ar" ? arfont.className : pt_serif.className
                } text-white md:w-[700px] w-full font-normal`}
              >
                <>
                  {locale === "en" ? (
                    <>
                      La Poire a fusion of{" "}
                      <span className={`${textColor}`}>joy</span> and happiness
                      in every cherished{" "}
                      <span className={`${textColor}`}>moment</span>. Through
                      our unwavering commitment, we{" "}
                      <span className={`${textColor}`}>transform</span> fleeting
                      moments into memorable, delightful experiences.
                    </>
                  ) : (
                    <>
                      علامات
                      <span className={`${textColor} relative`}>
                        {" "}
                        لابوار الأربعة
                        <motion.span
                          className="absolute left-0 right-0 top-full"
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: 1 * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <CurveBorder />
                        </motion.span>
                      </span>{" "}
                      في <span className={`${textColor}`}>مصر</span> رمز لاندماج
                      الفرح والسعادة في كل{" "}
                      <span className={`${textColor}`}>لحظة</span>. من خلال
                      التزامنا تجاه عملاءنا،{" "}
                      <span className={`${textColor}`}>نحول </span>
                      اللحظات العابرة إلى تجارب مبهجة لا تُنسى.
                    </>
                  )}
                </>
              </p>
            )}
          </div>
          <motion.div
            className={`w-[300px] md:w-[502px] h-[202] md:p-0 ${textColor}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 1 * 0.2 }}
            viewport={{ once: true }}
          >
            <Joy />
          </motion.div>
        </div>
        <div className="pointer-events-none mt-56 hidden opacity-30">
          <button className="flex items-center justify-between gap-.5 text-sm font-semibold uppercase text-white">
            more about La Poire{" "}
            <span className="inline-block h-6 w-6">
              <ArrowLeft />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
