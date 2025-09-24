export type SpeakerInfoType = {
  name: string;
  description: string;
  imagePath: string;
  id: number;
};

const speakersInfo: SpeakerInfoType[] = [
  {
    id: 1,
    name: "Theo Browne",
    description: "Youtuber & CEO of t3.chat",
    imagePath: "/assets/speakers/theo.jpg",
  },
  {
    id: 2,
    name: "Ivan Zhang", 
    description: "Co-Founder of Cohere",
    imagePath: "/assets/speakers/ivan.jpg",
  },
  {
    id: 3,
    name: "Tanmay Bakshi",
    description: "Senior Engineer at IBM",
    imagePath: "/assets/speakers/tanmay.jpg",
  },
  {
    id: 4,
    name: "Chris Bautista (TrashDev)",
    description: "Streamer & Netflix Engineer",
    imagePath: "/assets/speakers/trash.jpg",
  },
];

export default speakersInfo;
