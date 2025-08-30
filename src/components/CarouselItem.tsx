"use client";

import Image from "next/image";

export type CarouselItemProps = {
  src: string;
  fullName: string;
  isActive: boolean;
};

export default function CarouselItem({ src, isActive, fullName }: CarouselItemProps) {
  return (
    <div className="flex-shrink-0">
      <Image
        src={src}
        alt={fullName}
        width={71.776}
        height={66.877}
        className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
        priority={false}
      />
    </div>
  );
}
