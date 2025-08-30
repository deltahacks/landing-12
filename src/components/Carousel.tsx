"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useCallback, useState } from "react";
import CarouselItem from "~/components/CarouselItem";
import rawMembers from "~/assets/footer/members.json";
type Members = typeof rawMembers;

export default function Carousel() {
  const members: Members = rawMembers;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
    <div className="relative w-full overflow-hidden py-12">
      {hoveredIdx !== null && members[hoveredIdx] && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center">
          <div className="text-center text-xs font-semibold">
            {members[hoveredIdx].full_name}, {members[hoveredIdx].team}{" "}
            {members[hoveredIdx].emoji}
          </div>
        </div>
      )}
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop
        freeMode={{ enabled: true, momentum: false }}
        slidesPerView={"auto"}
        spaceBetween={24}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        allowTouchMove
        className="px-6"
      >
        {members.map((member, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <div
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
