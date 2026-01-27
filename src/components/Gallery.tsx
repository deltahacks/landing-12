"use client";

import useEmblaCarousel from "embla-carousel-react";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  return (
    <div className="before:bg-dh-yellow flex h-screen w-full flex-col items-center justify-center overflow-y-hidden before:pointer-events-none before:absolute before:inset-x-0 before:z-0 before:h-48 before:shadow-[0_3.6px_9px_0_rgba(0,0,0,0.15)] before:content-['']">
      <div ref={emblaRef} className="relative z-10 -mx-0 w-full">
        <div className="flex touch-pan-x gap-7 lg:items-center lg:justify-center">
          {[0, 1, 2].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 grow-0 basis-full items-center justify-center lg:basis-1/4"
            >
              <GalleryItem index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
