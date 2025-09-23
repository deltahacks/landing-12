import React from "react";
import Tomato from "~/components/svgs/Tomato";
import Lemon from "~/components/svgs/Lemon";
import Apple from "~/components/svgs/Apple";
import Discount from "~/components/svgs/Discount";

export type AboutUsInfoType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const aboutUsInfo: AboutUsInfoType[] = [
  {
    title: "We've Got You",
    description:
      "We provide food, venue, and workshops—so whether you're solo or on a team, you'll have the tools and support to bring your ideas to life.",
    icon: <Tomato className="-mr-8 h-auto w-40 md:-mr-0 md:w-32" />,
  },
  {
    title: "Build for Change",
    description:
      "DeltaHacks is an annual 24-hour hackathon empowering 500+ students across North America to build impactful projects that spark positive change.",
    icon: <Lemon className="-mr-10 h-auto w-40 md:-mr-0 md:w-32" />,
  },
  {
    title: "Open to All Skill Levels",
    description:
      "With McMaster University, we welcome hackers from beginners to experts. Our team works year-round to create an inclusive, supportive space.",
    icon: <Apple className="-mr-10 h-auto w-40 md:-mr-0 md:w-32" />,
  },
  {
    title: "DeltaHacks 12",
    description:
      "Now in its 12th year, DeltaHacks 12 is our most ambitious event yet. Come build, explore, and innovate—we'll take care of the rest!",
    icon: <Discount className="-mr-10 h-auto w-40 md:-mr-0 md:w-32" />,
  },
];

export default aboutUsInfo;
