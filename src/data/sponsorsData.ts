import type { SponsorVariantSizes } from "~/components/Sponsor";

export type SponsorInfoType = {
  name: string;
  link?: string;
  imagePath: string;
  size: SponsorVariantSizes;
};

const sponsorsInfo: SponsorInfoType[] = [
  // Gold Tier - Large
  {
    imagePath: "/assets/sponsors/mes.svg",
    name: "McMaster Engineering Society",
    link: "https://www.macengsociety.ca/",
    size: "large",
  },
  {
    imagePath: "/assets/sponsors/mcmaster.svg",
    name: "McMaster Engineering",
    link: "https://www.eng.mcmaster.ca/",
    size: "large",
  },

  // Silver Tier - Medium
  {
    imagePath: "/assets/sponsors/tailscale.svg",
    name: "Tailscale",
    link: "https://tailscale.com/",
    size: "medium",
  },

  // Bronze Tier - Small
  {
    imagePath: "/assets/sponsors/accenture.svg",
    name: "Accenture",
    link: "https://www.accenture.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/jamesdyson.svg",
    name: "James Dyson Foundation",
    link: "https://www.jamesdysonaward.org/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/intuit.svg",
    name: "Intuit",
    link: "https://www.intuit.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/manulife.svg",
    name: "Manulife",
    link: "https://www.manulife.ca/",
    size: "small",
  },

  // In-kind & Other Sponsors - Small
  {
    imagePath: "/assets/sponsors/vercel.svg",
    name: "Vercel",
    link: "https://vercel.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/swift.svg",
    name: "Swift",
    link: "https://www.swift.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/moorcheh.png",
    name: "Moorcheh",
    link: "https://www.moorcheh.ai/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/figma-lockup.svg",
    name: "Figma",
    link: "https://www.figma.com/",
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
    imagePath: "/assets/sponsors/beeceptor.png",
    name: "Beeceptor",
    link: "https://beeceptor.com/",
    size: "small",
  },
  {
    imagePath: "/assets/sponsors/mongodb.png",
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    size: "small",
  },
];

export default sponsorsInfo;
