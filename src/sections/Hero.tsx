import Link from "next/link";
import Image from "next/image";

import hero from "~/components/assets/Hero.png";
import { posthogServerClient } from "~/lib/posthog";
import Navbar from "~/components/Navbar";

const Hero: React.FC = async () => {
  const applicationsOpen = await posthogServerClient.isFeatureEnabled(
    "applications-open",
    "user distinct id",
  );

  return (
    <main className="grid h-[80vh] grid-cols-1 grid-rows-1 bg-gradient-to-b from-[#182B8C] to-[#B2ACEA] md:h-screen">
      <Navbar />
      <div className="col-start-1 col-end-1 row-start-1 row-end-1 flex items-end">
        <Image
          src={hero}
          height={886}
          width={1440}
          priority
          alt="DeltaHacks Landing - A shopping store"
          className="h-3/4 w-full object-cover md:h-full"
          placeholder="blur"
        />
      </div>

      <div className="col-start-1 col-end-1 row-start-1 row-end-1 px-4 py-32 md:py-24 text-center text-white md:px-24 md:text-left">
        <div className="flex w-full items-center justify-center gap-2 text-xs md:justify-start md:text-2xl">
          <p>Jan 10 - 11, 2026</p>•<p>Official Event @ McMaster University</p>
        </div>
        <h1 className="font-darumdrop text-5xl leading-8 md:text-6xl md:leading-16">
          DeltaHacks 12
        </h1>
        <p className="font-fredoka py-4 text-xs md:text-2xl">
          {"McMaster University's annual hackathon for change."}
        </p>

        {applicationsOpen && (
          <Link
            href="https://portal.deltahacks.com"
            className="inline-block rounded-full border-2 bg-[#2B2052] px-8 py-3 text-2xl shadow-lg"
          >
            Apply Now
          </Link>
        )}
      </div>
    </main>
  );
};

export default Hero;
