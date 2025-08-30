"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import CarouselItem from "~/components/CarouselItem";
import AutoScroll from "embla-carousel-auto-scroll";
import rawMembers from "~/assets/footer/members.json";
type Members = typeof rawMembers;

export default function Carousel() {
  const members: Members = rawMembers;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoScroll({ stopOnMouseEnter: true, startDelay: 0, speed: 0.8 })],
  );

  const handleCarouselStop = useCallback(() => {
    emblaApi?.plugins().autoScroll.stop();
  }, [emblaApi]);

  const handleCarouselResume = useCallback(() => {
    emblaApi?.plugins().autoScroll.play();
  }, [emblaApi]);

  const handleImageActive = useCallback(
    (idx: number) => {
      setHoveredIdx(idx);
      const member = members[idx];
      console.log("hovering on", member);
    },
    [members],
  );

  const handleImageInactive = useCallback(() => {
    setHoveredIdx(null);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden py-12">
        {hoveredIdx !== null && members[hoveredIdx] && (
          <div className="absolute top-8/12 left-2/5 text-center text-xs font-semibold">
            {members[hoveredIdx].full_name}, {members[hoveredIdx].team}{" "}
            {members[hoveredIdx].emoji}
          </div>
        )}
        <div
          ref={emblaRef}
          className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_93%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_93%,transparent)]"
          onPointerDown={handleCarouselStop}
          onPointerUp={handleCarouselResume}
          onPointerCancel={handleCarouselResume}
          onPointerLeave={handleCarouselResume}
        >
          <div className="flex items-center gap-6 p-6">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="shrink-0"
                onMouseEnter={() => handleImageActive(idx)}
                onMouseLeave={handleImageInactive}
              >
                <CarouselItem
                  src={
                    member.filename
                      ? `/memberPictures/${member.filename}`
                      : "/memberPictures/placeholder.png"
                  }
                  fullName={member.full_name}
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
