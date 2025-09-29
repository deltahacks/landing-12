"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Drawer } from "vaul";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //   const [blur, setBlur] = useState(false);

  const hideSidebar = () => {
    setOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Only apply scroll behavior on mobile screens (below md breakpoint)
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px - hide navbar
          setIsNavVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show navbar
          setIsNavVisible(true);
        }
      } else {
        // Always show navbar on desktop
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar, false);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={clsx(
        "font-display sticky top-0 z-30 flex w-full items-center justify-between gap-4 bg-[#19333A40] px-6 py-8 backdrop-blur-md transition-all duration-300 ease-in-out md:top-auto md:mt-6 md:w-11/12 md:rounded-4xl md:px-8 md:py-2",
        !isNavVisible && "-translate-y-[120%] md:translate-y-0",
      )}
    >
      <div className="flex h-full lg:gap-6 lg:px-4 xl:gap-14">
        <div className="z-0 flex md:flex md:items-center md:gap-4">
          <Link href="/">
            <Image
              width="36"
              height="36"
              className="z-0 flex"
              src="/navbar/nav_logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="font-display md:text-md hidden w-fit items-center justify-between gap-6 px-12 text-white md:flex lg:px-0 xl:gap-12">
          <Link href="#TBA">About</Link>
          <Link href="#TBA">Statistics</Link>
          <Link href="#TBA">Past Events</Link>
          <Link href="#TBA">Sponsors</Link>
          <Link href="#FAQ">FAQ</Link>
        </div>
      </div>
      <div className="hidden sm:pr-0 md:flex md:items-center md:gap-4 md:pr-20 lg:pr-40">
        <Link href="https://linkedin.com/company/deltahacks" target="_blank">
          <Image
            className=""
            width="36"
            height="36"
            src="/navbar/nav_linkedin.svg"
            alt="LinkedIn"
          />
        </Link>
        <Link href="https://www.instagram.com/deltahacks" target="_blank">
          <Image
            className=""
            width="36"
            height="36"
            src="/navbar/nav_insta.svg"
            alt="Instagram"
          />
        </Link>
        <Link href="https://deltahacks-xi.devpost.com/" target="_blank">
          <Image
            className=""
            width="36"
            height="36"
            src="/navbar/nav_devpost.svg"
            alt="Devpost"
          />
        </Link>
        <Link href="https://www.tiktok.com/@deltahacks" target="_blank">
          <Image
            className=""
            width="36"
            height="36"
            src="/navbar/nav_tiktak.svg"
            alt="TikTok"
          />
        </Link>
        <Link
          id="mlh-trust-badge"
          className="absolute right-0 z-50 mt-10 md:w-20"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
          target="_blank"
        >
          <Image
            src="/navbar/nav_mlh_trust_badge_2026_gray.svg"
            alt="Major League Hacking 2026 Hackathon Season"
            className="w-full"
            width="36"
            height="36"
          />
        </Link>
      </div>
      <div className="inset-0 z-40 md:invisible md:hidden">
        <Drawer.Root
          direction="right"
          open={open}
          onOpenChange={setOpen}
          noBodyStyles={true}
          handleOnly={true}
        >
          <Drawer.Trigger asChild>
            <button className="mr-20">
              {!open && (
                <Image
                  width="30"
                  height="30"
                  src="/navbar/nav_sizing.svg"
                  className="w-full"
                  alt="NAV"
                />
              )}
            </button>
          </Drawer.Trigger>
          <Link
            id="mlh-trust-badge"
            className="absolute top-0 right-5 z-50 block w-16 max-w-[100px] min-w-[60px]"
            // style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
            target="_blank"
          >
            <Image
              src="/navbar/nav_mlh_trust_badge_2026_gray.svg"
              alt="Major League Hacking 2026 Hackathon Season"
              // style="width:100%"
              width="36"
              height="36"
              className="w-full"
            />
          </Link>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="fixed right-0 bottom-0 z-50 mt-24 flex h-full w-full flex-col rounded-t-[10px]">
              <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>
              <div className="absolute top-0 right-0 z-50 px-8 pt-6">
                {open && (
                  <Image
                    width="20"
                    height="20"
                    src="/navbar/nav_close.svg"
                    alt="CLOSE"
                    className="z-50"
                    onClick={hideSidebar}
                  />
                )}
              </div>
              <div className="drawer-side font-display h-[calc(100dvh)] w-screen overscroll-none bg-gradient-to-b from-[#1B2E8E] to-[#5462B2]">
                <div className="z-50 flex h-full flex-col justify-between px-16">
                  <div className="z-50 flex w-fit flex-col gap-8 pt-28 text-xl text-white">
                    <Link href="#TBA" onClick={hideSidebar}>
                      About
                    </Link>
                    <Link href="#TBA" onClick={hideSidebar}>
                      Statistics
                    </Link>
                    <Link href="#TBA" onClick={hideSidebar}>
                      Past Events
                    </Link>
                    <Link href="#TBA" onClick={hideSidebar}>
                      Sponsors
                    </Link>
                    <Link href="#TBA" onClick={hideSidebar}>
                      FAQ
                    </Link>
                  </div>
                  <div className="align-center flex w-full gap-4 py-16 md:gap-4">
                    <Link href="https://www.linkedin.com/company/deltahacks/mycompany/">
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/navbar/nav_linkedin.svg"
                        alt="logo"
                      />
                    </Link>
                    <Link href="https://www.instagram.com/deltahacks">
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/navbar/nav_insta.svg"
                        alt="Instagram"
                      />
                    </Link>
                    <Link
                      href="https://deltahacks-xi.devpost.com/"
                      target="_blank"
                    >
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/navbar/nav_devpost.svg"
                        alt="Devpost"
                      />
                    </Link>
                    <Link href="https://www.tiktok.com/@deltahacks">
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/navbar/nav_tiktak.svg"
                        alt="TikTok"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
};

export default Navbar;
