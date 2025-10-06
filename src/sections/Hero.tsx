import Link from "next/link";
import Image from "next/image";

import { posthogServerClient } from "~/lib/posthog";
import HeroScrollBackground from "~/components/HeroScrollBackground";

const Hero: React.FC = async () => {
  const applicationsOpen = await posthogServerClient.isFeatureEnabled(
    "applications-open",
    "user distinct id",
  );

  return (
    <div className="relative h-screen min-h-[900px]">
      <div className="absolute bottom-0 left-0 h-full w-screen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[1500px] -translate-x-1/2 -translate-y-1/2">
          <HeroScrollBackground />
          Excepteur sint laboris aute qui in minim sunt in veniam sint velit et.
          Do sint ut adipisicing ipsum qui sunt occaecat adipisicing anim sunt
          do aliquip dolor labore mollit. Et in ut deserunt velit. Magna est
          excepteur irure culpa consectetur est laboris cillum culpa irure
          aliqua dolore nostrud laborum.
        </div>
      </div>
      <main className="grid h-[80vh] grid-cols-1 grid-rows-1 bg-gradient-to-b from-[#182B8C] to-[#B2ACEA] md:h-screen">
        <div className="z-10 col-start-1 col-end-1 row-start-1 row-end-1 px-4 py-24 text-center text-white md:px-24 md:text-left">
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
    </div>
  );
};

export default Hero;
