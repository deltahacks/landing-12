import Sponsor from "~/components/Sponsor";
import Trolley from "~/components/svgs/Trolley";
import sponsorsInfo, { type SponsorInfoType } from "~/data/sponsorsData";

const Sponsors: React.FC = () => {
  const sponsorsInfoLarge = sponsorsInfo.filter(
    (sponsor) => sponsor.size === "large",
  );
  const sponsorsInfoMedium = sponsorsInfo.filter(
    (sponsor) => sponsor.size === "medium",
  );
  const sponsorsInfoSmall = sponsorsInfo.filter(
    (sponsor) => sponsor.size === "small",
  );

  const generateSponsorBoxes = (sponsors: SponsorInfoType[]) => {
    if (sponsors.length === 0) {
      return;
    }

    const boxes = sponsors.map((sponsor, idx) => {
      const calculateCustomMargin = () => {
        // so convoluted but this was my best attempt at dynamically setting the offset positions

        let margin = "";

        if (sponsor.size === "large") {
          if (idx === 0) {
            if (sponsors.length % 2 === 1) {
              margin = "lg:ml-40 lg:mr-60";
            } else {
              margin = "lg:ml-5 lg:-mr-10";
            }
          } else if (idx % 2 === 0) {
            margin = "mr-5 lg:mr-0";
          } else {
            margin = "mr-20 lg:mr-0";
          }
        }

        if (sponsor.size === "medium") {
          if (idx % 2 === 1) {
            if (Math.floor(idx / 2) % 2 === 0) {
              margin = "lg:mr-10";
            }
          }
          if (idx === sponsors.length - 1 && sponsors.length % 2 === 0) {
            margin += " lg:ml-20";
          }
        }

        return margin;
      };

      return (
        <Sponsor
          key={`sponsor_${idx}`}
          src={sponsor.imagePath}
          alt={sponsor.name}
          link={sponsor.link}
          size={sponsor.size}
          className={calculateCustomMargin()}
        />
      );
    });

    // add empty filler box for medium boxes
    if (sponsors[0]?.size === "medium" && sponsors.length % 2 === 1) {
      boxes.push(
        <Sponsor
          size="medium"
          key={"sponsor_medium_empty"}
          className="lg:mr-10 lg:ml-20"
        />,
      );
    }

    // add empty filler box for small boxes (assuming max 12 small boxes for now)
    if (sponsors[0]?.size === "small" && sponsors.length % 12 !== 0) {
      const max =
        sponsors.length > 12 ? sponsors.length % 12 : 12 - sponsors.length;
      for (let i = 0; i < max; i++) {
        boxes.push(<Sponsor size="small" key={`sponsor_small_empty_${i}`} />);
      }
    }

    return boxes;
  };

  return (
    <div className="mx-auto w-fit">
      <div className="mx-auto mb-8 max-w-95 px-5 lg:max-w-200">
        <h1 className="font-darumdrop mb-2.5 text-center text-6xl text-[#836666] lg:mb-2.5 lg:text-3xl">
          Our Sponsors
        </h1>
        <p className="text-center text-sm font-medium text-[#836666] lg:text-xl">
          These incredible companies help bring DeltaHacks to life, uniting to
          support hundreds of students during this weekend...
        </p>
      </div>
      <div className="mx-auto flex max-w-95 flex-col lg:max-w-200">
        <div className="flex flex-wrap justify-center lg:gap-x-15">
          {generateSponsorBoxes(sponsorsInfoLarge)}
        </div>
        <div className="flex flex-wrap justify-center lg:gap-x-1 lg:px-10">
          {generateSponsorBoxes(sponsorsInfoMedium)}
        </div>
        <div className="align-center flex flex-wrap justify-end">
          {generateSponsorBoxes(sponsorsInfoSmall)}
        </div>
      </div>
      <Trolley className="top-0 mx-auto -mt-52.5 -ml-2 h-fit w-85 lg:-mt-149 lg:-ml-16 lg:w-240" />
    </div>
  );
};

export default Sponsors;
