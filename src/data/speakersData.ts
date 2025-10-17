export type SpeakerInfoType = {
  name: string;
  description: string;
  imagePath: string;
  id: number;
  url: string;
};

const speakersInfo: SpeakerInfoType[] = [
  {
    id: 1,
    name: "Theo Browne",
    description: "Youtuber & CEO of t3.chat",
    imagePath: "/assets/speakers/theo.png",
    url: "https://www.youtube.com/@t3dotgg",
  },
  {
    id: 2,
    name: "Ivan Zhang",
    description: "Co-Founder of Cohere",
    imagePath: "/assets/speakers/ivan.png",
    url: "https://www.linkedin.com/in/1vnzh",
  },
  {
    id: 3,
    name: "Tanmay Bakshi",
    description: "Senior Engineer at IBM",
    imagePath: "/assets/speakers/tanmay.png",
    url: "https://www.linkedin.com/in/tanmayb123",
  },
  {
    id: 4,
    name: "Chris Bautista (TrashDev)",
    description: "Streamer & Senior Netflix Engineer",
    imagePath: "/assets/speakers/trash.png",
    url: "https://www.twitch.tv/trash_dev",
  },
];

export default speakersInfo;
