import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen border-8 bg-[#FFF7E3] p-2 sm:p-4">
      <div className="mx-auto max-w-full sm:max-w-6xl">
        <div className="relative mx-auto my-4 min-h-[400px] w-full max-w-full rounded-2xl border-4 border-[#FFE7C1] bg-[#FFF7E3] shadow-lg sm:my-8 sm:min-h-[700px] sm:max-w-5xl">
          <Image
            src="/assets/images/blueDino.png"
            alt="Blue Dino"
            width={180}
            height={180}
            className="absolute top-4 left-[-40px] z-10 w-[100px] sm:top-10 sm:left-[-190px] sm:w-[180px] md:w-[240px] lg:w-[300px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Image
            src="/assets/images/redDino.png"
            alt="Red Dino"
            width={180}
            height={180}
            className="absolute top-10 z-10 w-[100px] sm:top-95 sm:right-[-255px] sm:w-[180px] md:w-[240px] lg:w-[300px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          {/* Header Section */}
          <div className="pt-10 pb-2 text-center sm:pt-16">
            <Image
              src="/assets/images/deltaTitle.png"
              alt="deltaTitle"
              width={400}
              height={400}
              className="mx-auto"
            />

            <div className="mt-2 flex flex-col items-center justify-center gap-2 text-lg font-semibold sm:flex-row sm:gap-4 sm:text-2xl">
              <span
                className="font-fredoka font-semibold tracking-widest text-[#99C7FF]"
                style={{ fontSize: "24.192px", lineHeight: "29px" }}
              >
                About
              </span>
              <span className="w-0 sm:w-24" />
              <span
                className="font-fredoka font-semibold tracking-widest text-[#99C7FF]"
                style={{ fontSize: "24.192px", lineHeight: "29px" }}
              >
                DH12!
              </span>
            </div>

            {/* Accent lines with mango dino in between */}
            <div className="flex w-full flex-col items-center justify-between gap-2 px-2 sm:flex-row sm:gap-0">
              {/* Left curved line image */}
              <Image
                src="/assets/images/curvedLine.png"
                alt="Curved Line Left"
                width={1000}
                height={1360}
                className="mx-0 hidden sm:block"
                style={{ objectFit: "contain" }}
              />
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/images/yellowDino.png"
                  alt="Yellow Dino"
                  width={300}
                  height={300}
                  className="mx-0 w-[500px] sm:w-[600px]"
                />
              </div>
              {/* Right curved line image (flipped horizontally) */}
              <Image
                src="/assets/images/curvedLine.png"
                alt="Curved Line Right"
                width={1000}
                height={1360}
                className="mx-0 hidden sm:block"
                style={{ objectFit: "contain", transform: "scaleX(-1)" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Build for Change Card */}
            <div className="relative flex rounded-xl border-2 border-[#F5E3C3] bg-[#FFF7E3] p-4 sm:p-6">
              <div>
                <h2 className="mb-2 text-lg font-bold text-[#CA823A] sm:text-xl">
                  Build for Change
                </h2>
                <p className="text-sm text-[#CA823A] sm:text-base">
                  DeltaHacks is an annual 24-hour hackathon empowering 500+
                  students across North America to build impactful projects that
                  spark positive change.
                </p>
              </div>
              <Image
                src="/assets/images/tomato.png"
                alt="tomato"
                width={150}
                height={100}
                className="ml-4 w-[150px] flex-shrink-0"
              />
            </div>

            <div className="relative flex rounded-xl border-2 border-[#F5E3C3] bg-[#FFF7E3] p-4 sm:p-6">
              <div>
                <h2 className="mb-2 text-lg font-bold text-[#CA823A] sm:text-xl">
                  We've Got You
                </h2>
                <p className="text-sm text-[#CA823A] sm:text-base">
                  <strong>We provide</strong> food, venue, and workshops—so
                  whether you're solo or on a team, you'll have the tools and
                  support to bring your ideas to life.
                </p>
              </div>
              <div className="relative ml-4 flex-shrink-0">
                <Image
                  src="/assets/images/Star.png"
                  alt="Star"
                  width={150}
                  height={100}
                  className="w-[150px]"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center text-center leading-tight font-bold text-[#FF9407] sm:text-base">
                  <span className="text-[30px]">100%</span>
                  <span className="text-[30px]">OFF</span>
                </span>
              </div>
            </div>

            {/* Open to All Skill Levels Card */}
            <div className="relative flex rounded-xl border-2 border-[#F5E3C3] bg-[#FFF7E3] p-4 sm:p-6">
              <div>
                <h2 className="mb-2 text-lg font-bold text-[#CA823A] sm:text-xl">
                  Open to All Skill Levels
                </h2>
                <p className="text-sm text-[#CA823A] sm:text-base">
                  With McMaster University, we welcome hackers from{" "}
                  <strong>beginners to experts</strong>. Our team works
                  year-round to create an inclusive, supportive space.
                </p>
              </div>
              <Image
                src="/assets/images/mango.png"
                alt="Mango"
                width={150}
                height={100}
                className="ml-4 w-[150px] flex-shrink-0"
              />
            </div>

            {/* DeltaHacks 12 Card */}
            <div className="relative flex rounded-xl border-2 border-[#F5E3C3] bg-[#FFF7E3] p-4 sm:p-6">
              <div>
                <h2 className="mb-2 text-lg font-bold text-[#CA823A] sm:text-xl">
                  DeltaHacks 12
                </h2>
                <p className="text-sm text-[#CA823A] sm:text-base">
                  Now in its <strong>12th year</strong>, DeltaHacks 12 is our
                  most ambitious event yet. Come build, explore, and
                  innovate—we'll take care of the rest!
                </p>
              </div>
              <Image
                src="/assets/images/apple.png"
                alt="apple"
                width={150}
                height={100}
                className="ml-4 w-[150px] flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
