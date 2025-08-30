// Update the import path to the correct location of Card, for example:
import { Card } from "../../components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen border-8 bg-[#FFF7E3] p-4">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="relative mb-8 text-center">
          <h1 className="mb-2 font-sans text-6xl font-bold text-blue-500 md:text-8xl">
            DINO-MART
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-400">
            <span className="text-2xl font-medium">About</span>
            <span className="text-2xl font-bold">DH12!</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Build for Change Card */}
          <Card className="relative min-h-[350px] overflow-hidden rounded-2xl bg-[#FFF7E3]/80 p-10 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#CA823A]">
              Build for Change
            </h2>
            <p className="leading-relaxed text-[#CA823A]">
              DeltaHacks is an annual <strong>24-hour hackathon</strong>{" "}
              empowering <strong>500+ students</strong> across North America to
              build impactful projects that spark positive change.
            </p>
          </Card>

          {/* We've Got You Card */}
          <Card className="relative min-h-[350px] overflow-hidden rounded-2xl bg-[#FFF7E3]/80 p-10 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#CA823A]">
              We&apos;ve Got You
            </h2>
            <p className="leading-relaxed text-[#CA823A]">
              We provide food, venue, and workshops—so whether you&apos;re solo
              or on a team, you&apos;ll have the tools and support to bring your
              ideas to life.
            </p>
          </Card>

          {/* Open to All Skill Levels Card */}
          <Card className="relative min-h-[350px] overflow-hidden rounded-2xl bg-[#FFF7E3]/80 p-10 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#CA823A]">
              Open to All Skill Levels
            </h2>
            <p className="leading-relaxed text-[#CA823A]">
              With McMaster University, we welcome hackers from{" "}
              <strong>beginners to experts</strong>. Our team works year-round
              to create an inclusive, supportive space.
            </p>
          </Card>

          {/* DeltaHacks 12 Card */}
          <Card className="relative min-h-[350px] min-w-[350px] overflow-hidden rounded-2xl bg-[#FFF7E3]/80 p-10 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#CA823A]">
              DeltaHacks 12
            </h2>
            <p className="leading-relaxed text-[#CA823A]">
              Now in its <strong>12th year</strong>, DeltaHacks 12 is our most
              ambitious event yet. Come build, explore, and innovate—we&apos;ll
              take care of the rest!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
