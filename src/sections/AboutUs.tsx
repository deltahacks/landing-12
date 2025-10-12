import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import AboutUsCard from "~/components/AboutUsCard";
import aboutUsInfo from "~/data/aboutUsData";
import LeftWave from "~/components/svgs/LeftWave";
import RightWave from "~/components/svgs/RightWave";

import statsImg from "~/components/assets/stats.png";
import statsMobileImg from "~/components/assets/stats-mobile.png";

const About: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div id="about" className="w-screen md:relative md:-mb-64">
      <div
        className={clsx(
          "w-screen md:absolute md:top-0 md:flex md:items-center md:justify-center xl:top-48",
          className,
        )}
      >
        <div
          className={`md:border-dh-border bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:max-w-4xl md:scale-75 md:rounded-lg md:border-4 xl:scale-100`}
        >
          <div className="border-dh-border mt-4 flex w-full flex-col items-center border-t-4 md:border-y-4">
            <div className="translate-y-8 transform">
              <div className="-mt-16 flex translate-y-9 transform flex-col items-center md:-mt-24 md:translate-y-16">
                <h1 className="font-darumdrop text-dh-blue py-3 text-5xl md:text-8xl">
                  DINO-MART
                </h1>
                <div className="text-dh-blue flex -translate-x-1 transform flex-row items-center justify-center gap-24 text-2xl font-semibold opacity-65 md:gap-40 md:text-4xl">
                  <h2>About</h2>
                  <h2>DH12!</h2>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 md:gap-8">
                <LeftWave className="md:h-12 md:w-80" />
                <Image
                  src="/assets/yellow-dino.png"
                  alt="DH12"
                  width={160}
                  height={160}
                  sizes="(max-width: 768px) 100px, 160px"
                />
                <RightWave className="md:h-8 md:w-80" />
              </div>
            </div>
          </div>
          <div className="text-dh-gold grid grid-cols-1 gap-2 p-4 md:grid-cols-2">
            {aboutUsInfo.map((info, index) => (
              <AboutUsCard key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
      <div id="statistics" className="absolute bottom-1/2"></div>
      <div className="hidden md:block">
        <Image
          src={statsImg}
          placeholder="blur"
          height={4086}
          width={2880}
          blurDataURL={statsImg.blurDataURL}
          alt="About Background"
          className="w-full object-contain"
        />
      </div>
      <div id="statistics" className="-mb-20 md:m-0 md:hidden">
        <Image
          src={statsMobileImg}
          placeholder="blur"
          height={1106}
          width={644}
          blurDataURL={statsMobileImg.blurDataURL}
          alt="About Background"
          className="w-full object-contain"
        />
      </div>
      
    </div>
    
  );
};

export default About;
