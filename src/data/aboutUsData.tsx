import React from "react";

export type AboutUsInfoType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const aboutUsInfo: AboutUsInfoType[] = [
  {
    title: "We've Got You",
    description:
      "We provide food, venue, and workshops—so whether you're solo or on a team, you'll have the tools and support to bring your ideas to life.",
    icon: (
      <svg
        width="156"
        height="166"
        viewBox="0 0 156 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="79.533"
          cy="101.223"
          rx="72.28"
          ry="59.734"
          transform="rotate(-3.933 79.533 101.223)"
          fill="#FF6352"
        />
        <path
          d="M62.334 29.875c3.81-9.798 17.31-10.726 22.425-1.542l.83 1.493a9.73 9.73 0 0 0 9.167 4.972l6.302-.433c8.657-.595 12.223 10.88 4.754 15.296a8.23 8.23 0 0 0-3.002 11.089l.305.547c4.1 7.362-3.409 15.757-11.18 12.5l-9.936-4.161a12.6 12.6 0 0 0-11.28.775l-9.272 5.483c-7.253 4.289-15.84-3-12.786-10.854l.227-.583a8.23 8.23 0 0 0-4.49-10.574c-8.004-3.353-6.042-15.208 2.615-15.803l6.302-.433a9.73 9.73 0 0 0 8.4-6.18z"
          fill="#7DCE81"
        />
        <ellipse
          cx="50.472"
          cy="95.303"
          rx="6.24"
          ry="8.392"
          transform="rotate(-3.933 50.472 95.303)"
          fill="#313131"
        />
        <ellipse
          cx="105.462"
          cy="91.523"
          rx="6.24"
          ry="8.392"
          transform="rotate(-3.933 105.462 91.523)"
          fill="#313131"
        />
        <ellipse
          cx="39.691"
          cy="112.869"
          rx="8.84"
          ry="8.392"
          transform="rotate(-3.933 39.691 112.869)"
          fill="#FFDC67"
        />
        <ellipse
          cx="118.474"
          cy="106.41"
          rx="8.84"
          ry="8.392"
          transform="rotate(-3.933 118.474 106.41)"
          fill="#FFDC67"
        />
        <path
          d="M64.807 106.689v0c7.88 7.981 20.9 7.52 28.196-.999l.855-.998"
          stroke="#313131"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Join the Fun",
    description:
      "Connect with fellow hackers, share ideas, and build something amazing together. DH12 is all about collaboration and creativity.",
    icon: (
      <svg
        width="167"
        height="172"
        viewBox="0 0 167 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="81.766"
          cy="100.447"
          rx="72.516"
          ry="59.929"
          transform="rotate(9.933 81.766 100.447)"
          fill="#FFD13B"
        />
        <ellipse
          cx="80.288"
          cy="105.947"
          rx="56.343"
          ry="45.91"
          transform="rotate(9.933 80.288 105.947)"
          fill="#FFD13B"
        />
        <ellipse
          cx="54.884"
          cy="87.694"
          rx="6.26"
          ry="8.42"
          transform="rotate(9.933 54.884 87.694)"
          fill="#313131"
        />
        <ellipse
          cx="42.703"
          cy="105.835"
          rx="8.869"
          ry="8.42"
          transform="rotate(9.933 42.703 105.835)"
          fill="#FF9407"
        />
        <ellipse
          cx="117.729"
          cy="118.973"
          rx="8.869"
          ry="8.42"
          transform="rotate(9.933 117.729 118.973)"
          fill="#FF9407"
        />
        <path
          d="M66.109 102.23v0c5.757 9.669 18.549 12.35 27.704 5.807l1.073-.767"
          stroke="#313131"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="m135.322 39.044-2.759-1.617c-15.239-8.933-34.83-4.919-45.444 9.201a1.603 1.603 0 0 0 .217 2.163c14.102 12.44 35.844 10.073 46.94-5.11l1.564-2.14a1.72 1.72 0 0 0-.518-2.497"
          fill="#66C42F"
        />
        <path
          d="m97.781 46.175-1.58-2.78C87.47 28.04 68.497 21.722 52.245 28.643a1.603 1.603 0 0 0-.894 1.982c5.993 17.824 26.005 26.646 43.206 19.044l2.425-1.071a1.72 1.72 0 0 0 .8-2.422"
          fill="#66C42F"
        />
        <path
          d="m116.042 95.26-10.475 1.794c-.911.156-1.141 1.358-.352 1.84l9.207 5.615"
          stroke="#313131"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default aboutUsInfo;
