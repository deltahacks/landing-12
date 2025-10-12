"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import CarouselItem from "~/components/CarouselItem";
import AutoScroll from "embla-carousel-auto-scroll";
import members from "~/data/teamMembersData";

export default function Carousel() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  console.log(members.length);

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
      <div className="w-full overflow-hidden">
        <div
          ref={emblaRef}
          className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_93%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_93%,transparent)]"
          onPointerDown={handleCarouselStop}
          onPointerLeave={handleCarouselResume}
        >
          <div className="flex items-center gap-5 py-10">
            {members.map((member, idx) => (
              <div
                key={idx}
                onMouseEnter={() => handleImageActive(idx)}
                onMouseLeave={handleImageInactive}
              >
                <CarouselItem
                  src={`/memberPictures/${member.fileName}`}
                  fullName={member.fullName ?? ""}
                  index={idx}
                  isActive={hoveredIdx === idx}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <div className="flex h-6 items-center">
            {hoveredIdx !== null && members[hoveredIdx] && (
              <div className="text-center text-xs font-semibold">
                {members[hoveredIdx].fullName}, {members[hoveredIdx].team}{" "}
                {members[hoveredIdx].emoji}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
