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
      <div className="aspect-square overflow-hidden rounded-2xl bg-gray-300 shadow-lg transition-transform duration-300 hover:scale-110">
        <Image
          src={imagePath}
          alt={name}
          className="h-full w-full object-cover"
          width={200}
          height={200}
        />
      </div>
      <h2 className="text-center text-sm text-white md:text-2xl">{name}</h2>
      <p className="text-dh-grey px-5 text-center text-xs md:text-2xl">
        {description}
      </p>
    </div>
  );
};

export default SpeakerCard;
