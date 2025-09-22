import React from "react";
import Image from "next/image";
import AboutUsCard from "../components/AboutUsCard";
import aboutUsInfo from "../data/aboutUsData";

const About: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div
      className={`md:flex md:items-center md:justify-center ${className ?? ""}`}
    >
      <div
        className={`md:border-dh-border relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:max-w-4xl md:rounded-lg md:border-4`}
      >
        <span className="bg-dh-border h-1 w-full md:mt-4"></span>
        <span className="md:bg-dh-border absolute top-[270px] left-0 -z-10 h-1 w-full"></span>
        <h1 className="font-funky text-dh-blue py-3 text-5xl md:text-8xl">
          DINO-MART
        </h1>
        <div className="text-dh-blue flex flex-row gap-24 text-2xl font-semibold md:gap-32 md:text-4xl">
          <h2>About</h2>
          <h2>DH12!</h2>
        </div>
        <div className="-mt-10 flex items-center justify-center gap-4 md:gap-8">
          <svg
            width="234"
            height="34"
            viewBox="0 0 234 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-12 md:w-80"
          >
            <path
              d="M2.43213 23.9602L27.8118 12.6761L36.1509 9.3805C42.2789 6.95866 48.6973 5.34837 55.2428 4.59057L67.1232 3.21513C74.3578 2.37754 81.6756 2.58975 88.8496 3.8452L108.272 7.24415L137.756 15.0981L171.02 24.6321L189.164 29.1681L200.327 30.9102C204.184 31.5119 208.081 31.8142 211.984 31.8142H231.5"
              stroke="#FFE9C7"
              strokeWidth="3.78"
              strokeLinecap="round"
            />
          </svg>

          <Image
            src="/assets/yellow-dino.png"
            alt="DH12"
            width={160}
            height={160}
            sizes="(max-width: 768px) 100px, 160px"
          />

          <svg
            width="238"
            height="24"
            viewBox="0 0 238 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-8 md:w-80"
          >
            <path
              d="m235.753 20.412-11.681.687a75.6 75.6 0 0 1-15.13-.63l-2.645-.377a75.6 75.6 0 0 1-16.222-4.193l-7.999-3.047-13.747-4.75a75.6 75.6 0 0 0-14.425-3.443l-10.676-1.463a75.6 75.6 0 0 0-19.094-.181L101.562 5.67l-36.288 9.45-14.212 3.827a75.6 75.6 0 0 1-19.654 2.599H24.45L2.526 18.9"
              stroke="#FFE9C7"
              strokeWidth="3.78"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-dh-gold grid grid-cols-1 gap-2 p-4 md:grid-cols-2">
          {aboutUsInfo.map((info, index) => (
            <AboutUsCard
              key={index}
              title={info.title}
              description={info.description}
              icon={info.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
