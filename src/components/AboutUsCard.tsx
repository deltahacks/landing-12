import React from "react";
import type { AboutUsInfoType } from "../data/aboutUsData.tsx";

const AboutUsCard: React.FC<AboutUsInfoType> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="border-dh-border flex flex-row items-center border-4 p-4 md:p-6">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
        <p className="md:text-lg">{description}</p>
      </div>
      <div className="-mr-6 flex-shrink-0 md:-mr-12">
        <div className="h-auto w-36 md:w-40">{icon}</div>
      </div>
    </div>
  );
};

export default AboutUsCard;
