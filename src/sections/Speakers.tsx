import SpeakerBackgroundTopBorder from "~/components/svgs/SpeakerBackgroundTopBorder";
import SpeakerBackgroundBottomBorder from "~/components/svgs/SpeakerBackgroundBottomBorder";
import SpeakerCard from "~/components/SpeakerCard";
import speakersInfo from "~/data/speakersData";

const Speakers: React.FC = () => {
  return (
    <div className="relative">
      <SpeakerBackgroundTopBorder className="h-auto w-full translate-y-3 transform" />
      <div className="flex h-[800px] flex-col gap-4 bg-gradient-to-t from-[#6DB0CE] to-[#50769F] px-8 py-24 md:p-32">
        <h1 className="font-darumdrop text-2xl font-bold text-white md:text-4xl">
          Engage with{" "}
          <span className="bg-linear-to-tr from-[#FFB942] to-[#FCFCFC] bg-clip-text text-transparent">
            industry
          </span>{" "}
          leaders
        </h1>
        <p className="text-sm font-medium text-balance text-white md:text-2xl">
          DeltaHacks is your chance to learn directly from leading figures in
          tech.Here are just a few of the past keynote speakers we&apos;ve
          invited to speak:
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {speakersInfo.map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
      </div>
      <SpeakerBackgroundBottomBorder className="h-auto w-full -translate-y-8 transform" />
    </div>
  );
};

export default Speakers;
