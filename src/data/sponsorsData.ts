import type { SponsorVariantSizes } from "~/components/Sponsor";

export type SponsorInfoType = {
  name: string;
  link?: string;
  imagePath: string;
  size: SponsorVariantSizes;
};

const sponsorsInfo: SponsorInfoType[] = [
  // Tier 1
  {
    imagePath: "/assets/sponsors/mcmaster.svg",
    name: "McMaster University",
    link: "https://www.mcmaster.ca/",
    size: "large",
  },
  {
    imagePath: "/assets/sponsors/mes.svg",
    name: "McMaster Engineering Society",
    link: "https://www.macengsociety.ca/",
    size: "large",
  },
  {
    imagePath: "/assets/sponsors/reservepower.svg",
    name: "Reserve Power",
    link: "https://www.reservepower.ca/",
    size: "large",
  },

  // Tier 2
  {
    imagePath: "/assets/sponsors/pg.svg",
    name: "Procter & Gamble",
    link: "https://us.pg.com/",
    size: "medium",
  },
  {
    imagePath: "/assets/sponsors/cohere.svg",
    name: "Cohere",
    link: "https://cohere.ai/",
    size: "medium",
  },
  {
    imagePath: "/assets/sponsors/manulife.svg",
    name: "Manulife",
    link: "https://www.manulife.ca/",
    size: "medium",
  },
  {
    imagePath: "/assets/sponsors/amd.svg",
    name: "AMD",
    link: "https://www.amd.com/en.html",
    size: "medium",
  },
  {
    imagePath: "/assets/sponsors/jamesdyson.svg",
    name: "James Dyson Foundation",
    link: "https://www.jamesdysonaward.org/",
    size: "medium",
  },
  {
    imagePath: "/assets/sponsors/accenture.svg",
    name: "Accenture",
    link: "https://www.accenture.com/",
    size: "medium",
  },
  {
    imagePath: "/assets/sponsors/cibc.svg",
    name: "CIBC",
    link: "https://www.cibc.com",
    size: "medium",
  },

  // Tier 3
  {
    imagePath: "/assets/sponsors/swift.svg",
    name: "Swift",
    link: "https://developer.apple.com/swift/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/voiceflow.svg",
    name: "Voiceflow",
    link: "https://voiceflow.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/verbwire.svg",
    name: "Verbwire",
    link: "https://verbwire.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/1password.svg",
    name: "1Password",
    link: "https://www.1password.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/nordvpn.svg",
    name: "NordVPN",
    link: "https://nordvpn.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/nordpass.svg",
    name: "Nordpass",
    link: "https://nordpass.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/incogni.svg",
    name: "Incogni",
    link: "https://incogni.com/",
    size: "small",
  },

  {
    imagePath: "/assets/sponsors/saily.svg",
    name: "Saily",
    link: "https://saily.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/taskade.svg",
    name: "Taskade",
    link: "https://taskade.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/logsnag.svg",
    name: "LogSnag",
    link: "https://www.logsnag.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/balsamiq.svg",
    name: "Balsamiq",
    link: "https://balsamiq.com/",
    size: "small",
  },

  {
    imagePath: "/assets/sponsors/wolfram.svg",
    name: "Wolfram",
    link: "https://wolfram.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/perplexity.svg",
    name: "Perplexity",
    link: "https://www.perplexity.ai/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/warp.svg",
    name: "Warp",
    link: "https://warp.dev/",
    size: "small",
  },
];

export default sponsorsInfo;
