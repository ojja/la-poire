"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../Button";
import Hamburger from "./Hamburger";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import LangSwitcher from "./LangSwitcher";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isBrandsPage = pathname.includes("brands/");
  // const brandSlug = isBrandsPage ? pathname.replace("/brands/", "") : null;

  const brandSlug = isBrandsPage
    ? pathname.substring(pathname.indexOf("brands/") + 7)
    : null;
  const isHome = pathname === "/" || pathname === "/en/" || pathname === "/ar/";
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenMob, setIsOpenMob] = useState(false);
  const isAboutPage = pathname.includes("/about");
  const isSingleBrand = pathname.includes("/brands");

  // console.log('pathname',pathname)
  // console.log('isBrandsPage',isBrandsPage)
  // console.log('brandSlug',brandSlug)

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      // check if screen width is less than 1024px
      setIsOpenMob(false);
      enableScroll();
    }
  };
  useEffect(() => {
    if (isOpenMob) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => {
      enableScroll();
    };
  }, [isOpenMob]);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpenMob) {
        setIsOpenMob(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpenMob]);

  return (
    <header
      className={`header-page md:py-34 py-14 px-4 ${
        isBrandsPage ? "absolute left-0 right-0 top-0 z-10" : ""
      }`}>
      <ProgressBar
        height='4px'
        color='#00754A'
        options={{ showSpinner: false }}
        shallowRouting
      />
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <Link prefetch={false} href='/'>
              <Image
                src={`/images/logo-${brandSlug ? "white" : "gold"}.webp`}
                alt='La Poire Logo'
                width='166'
                height='46'
                className='h-[32px] w-[112px] lg:h-[46px] lg:w-[166px]'
              />
            </Link>
          </div>
          <div className='hidden max-w-[1004px] items-center justify-between gap-x-[68px] md:max-w-[calc(100vw-200px)] lg:flex xl:max-w-[calc(100vw-388px)]'>
            <div className='1xl:gap-54 flex items-center gap-4 ltr:-translate-x-34 rtl:translate-x-34'>
              {isHome && <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />}
              <nav
                className={`${
                  !isHome
                    ? ""
                    : isOpen
                    ? "opacity-100 transition ease"
                    : " opacity-0 transition ease pointer-events-none"
                }`}>
                <ul
                  className={`ease 1xl:text-base ml-[20px] flex items-center gap-20 whitespace-nowrap text-sm uppercase transition xl:gap-[48px]`}>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isBrandsPage && brandSlug
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}>
                    {/* close menu handleLinkClick */}
                    <Link prefetch={false} href={"/"} onClick={handleLinkClick}>
                      {t("home")}
                    </Link>
                  </li>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isBrandsPage && brandSlug
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}>
                    {/* close menu handleLinkClick */}

                    <Link
                      prefetch={false}
                      href={"/about"}
                      onClick={handleLinkClick}>
                      {t("about")}
                    </Link>
                  </li>
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isBrandsPage && brandSlug
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}>
                    <Link
                      prefetch={false}
                      href={"/brands"}
                      onClick={handleLinkClick}>
                      {t("brands")}
                    </Link>
                  </li>
                  {/* <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isBrandsPage && brandSlug
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}>
                    <Link
                      prefetch={false}
                      href={"/franchise"}
                      onClick={handleLinkClick}>
                      {t("franchise")}
                    </Link>
                  </li> */}
                  {/* <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isBrandsPage && brandSlug
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}
                  >
                    <Link prefetch={false} href={"/blog"}>
                      {t("blog")}
                    </Link>
                  </li> */}
                  <li
                    className={`${
                      isHome
                        ? "text-white hover:text-gold"
                        : isBrandsPage && brandSlug
                        ? "text-white hover:underline"
                        : "text-gold hover:text-goldHover hover:underline"
                    }`}>
                    <Link
                      prefetch={false}
                      href={"/job"}
                      onClick={handleLinkClick}>
                      {t("job")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='flex items-center gap-2'>
              {/* <LangSwitcher
                headerTransparent={(isBrandsPage && brandSlug) || isHome}
              /> */}
              <Button variant='primary' size='normalSm' pill uppercase>
                <Link
                  prefetch={false}
                  href={"/contact-us"}
                  onClick={handleLinkClick}>
                  {t("contact")}
                </Link>
              </Button>
            </div>
          </div>
          <div className='flex lg:hidden'>
            <Hamburger isOpen={isOpenMob} setIsOpen={setIsOpenMob} />
            <div
              className={`fixed z-[100] inset-0 mt-[74px] transition-all ${
                isOpenMob
                  ? " pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}>
              <div className='relative h-full w-full'>
                <nav className='relative z-10 bg-white pb-[77px] pt-[45px]'>
                  <ul
                    className={`ease 1xl:text-base ml-[20px] flex flex-col items-center gap-[50px] whitespace-nowrap pb-34 text-sm uppercase`}>
                    <li className='hover:text-gold'>
                      <Link
                        prefetch={false}
                        href={"/"}
                        onClick={handleLinkClick}>
                        {t("home")}
                      </Link>
                    </li>
                    <li className='hover:text-gold'>
                      <Link
                        prefetch={false}
                        href={"/about"}
                        onClick={handleLinkClick}>
                        {t("about")}
                      </Link>
                    </li>
                    <li className='hover:text-gold'>
                      <Link
                        prefetch={false}
                        href={"/brands"}
                        onClick={handleLinkClick}>
                        {t("brands")}
                      </Link>
                    </li>
                    {/* <li className='hover:text-gold'>
                      <Link
                        prefetch={false}
                        href={"/franchise"}
                        onClick={handleLinkClick}>
                        {t("franchise")}
                      </Link>
                    </li> */}
                    <li className='hover:text-gold'>
                      <Link
                        prefetch={false}
                        href={"/job"}
                        onClick={handleLinkClick}>
                        {t("job")}
                      </Link>
                    </li>
                    <Button
                      variant='primary'
                      size='normalSm'
                      pill
                      uppercase
                      className='mx-auto block hover:text-gold'>
                      <Link
                        prefetch={false}
                        href={"/contact-us"}
                        onClick={handleLinkClick}>
                        {t("contact")}
                      </Link>
                    </Button>

                    {/* <LangSwitcher
                      className='fill-black'
                      headerTransparent={(isBrandsPage && brandSlug) || isHome}
                    /> */}
                  </ul>

                  <div className='mx-auto'></div>
                </nav>
                <div className='fixed inset-0 mt-[74px] bg-black bg-opacity-90'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
