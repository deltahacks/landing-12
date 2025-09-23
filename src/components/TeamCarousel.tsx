"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import CarouselItem from "~/components/CarouselItem";
import AutoScroll from "embla-carousel-auto-scroll";
import members from "~/assets/footer/members.json";

export default function Carousel() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoScroll({ stopOnMouseEnter: true, startDelay: 0, speed: 0.8 })],
  );

  const handleCarouselStop = useCallback(() => {
    emblaApi?.plugins().autoScroll?.stop();
  }, [emblaApi]);

  const handleCarouselResume = useCallback(() => {
    emblaApi?.plugins().autoScroll?.play();
  }, [emblaApi]);

  const handleImageActive = useCallback((idx: number) => {
    setHoveredIdx(idx);
  }, []);

  const handleImageInactive = useCallback(() => {
    setHoveredIdx(null);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden pb-12">
        {hoveredIdx !== null && members[hoveredIdx] && (
          <div className="absolute bottom-2/12 left-1/2 z-10 -translate-x-1/2 text-center text-xs font-semibold">
            {members[hoveredIdx].fullName}, {members[hoveredIdx].team}{" "}
            {members[hoveredIdx].emoji}
          </div>
        )}
        <div
          ref={emblaRef}
          className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_93%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_93%,transparent)]"
          onPointerDown={handleCarouselStop}
          onPointerLeave={handleCarouselResume}
        >
          <div className="flex items-center gap-11 p-10">
            {members.map((member, idx) => (
              <div
                key={idx}
                onMouseEnter={() => handleImageActive(idx)}
                onMouseLeave={handleImageInactive}
              >
                <CarouselItem
                  src={
                    member.fileName
                      ? `/memberPictures/${member.fileName}`
                      : "/memberPictures/placeholder.png"
                  }
                  fullName={(member.fullName ?? "") as string}
                  index={idx}
                  isActive={hoveredIdx === idx}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
