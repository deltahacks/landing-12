"use client";

import React from "react";
import Image from "next/image";

import hero from "~/components/svgs/Hero.png";
import { useScroll } from "~/lib/useScroll";
import Door from "./svgs/Door";

const HeroScrollBackground = () => {
  const { scrollY } = useScroll();

  // scrolling should be exponential
  const scale = Math.min(100, (1 + scrollY * 0.002) ** 10);

  const doorTransform = Math.max(0, scrollY - 20);

  return (
    <div
      className="origin-[44.5%_70%]"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <Image
        src={hero}
        height={886}
        width={1440}
        priority
        alt="DeltaHacks Landing - A shopping store"
        className="h-3/4 w-full object-cover md:h-full"
        placeholder="blur"
      />
      <Door
        className="absolute top-[55.5%] left-[35%] scale-[1.02]"
        style={{ transform: `translateX(${-doorTransform}px)` }}
      />
      <Door
        className="absolute top-[55.5%] left-[44.5%] scale-[1.02]"
        style={{ transform: `translateX(${doorTransform}px)` }}
      />
    </div>
  );
};

export default HeroScrollBackground;
