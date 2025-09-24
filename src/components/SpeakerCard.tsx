import React from "react";
import Image from "next/image";
import type { SpeakerInfoType } from "~/data/speakersData";

const SpeakerCard: React.FC<SpeakerInfoType> = ({
  name,
  description,
  imagePath,
  id,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-square bg-gray-300 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110">
        <Image
          src={imagePath}
          alt={name}
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />
      </div>
      <h2 className="text-white text-sm md:text-2xl text-center">{name}</h2>
      <p className="text-[#DADADA] text-xs md:text-2xl text-center px-5">{description}</p>
    </div>
  );
};

export default SpeakerCard;
