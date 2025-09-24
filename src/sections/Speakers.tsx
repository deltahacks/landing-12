import SpeakerTop from "~/components/svgs/SpeakerTop";
import SpeakerDown from "~/components/svgs/SpeakerDown";
import SpeakerCard from "~/components/SpeakerCard";
import speakersInfo from "~/data/speakersData";

const Speakers: React.FC = () => {
  return (
    <div className="relative">
      <SpeakerTop className="w-full h-auto transform translate-y-3" />
      <div className="bg-gradient-to-t from-[#6DB0CE] to-[#50769F] h-[800px] px-8 md:p-32 flex flex-col gap-4 py-24">
        <h1 className="text-white text-2xl md:text-4xl font-bold font-darumdrop">Engage with <span className="bg-linear-to-tr from-[#FFB942] to-[#FCFCFC] bg-clip-text text-transparent">industry</span> leaders</h1>
        <p className="text-white text-sm font-medium md:text-2xl">DeltaHacks is your chance to learn directly from leading figures in tech.<br className="hidden md:block" />Here are just a few of the past keynote speakers we&apos;ve invited to speak:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 px-4">
          {speakersInfo.map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
      </div>
      <SpeakerDown className="w-full h-auto transform -translate-y-8" />
    </div>
  );
};

export default Speakers;