import React from "react";
import { cn } from "~/lib/utils";

interface DoorProps extends React.HTMLAttributes<HTMLDivElement> {
  translateX: number;
}

const Door: React.FC<DoorProps> = ({ translateX, ...props }) => {
  return (
    <div
      {...props}
      style={{
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        className={cn("backdrop-blur-xs")}
        style={{
          transform: "translate(2px,2px)",
          width: 138,
          height: 216,
        }}
      ></div>
      <svg
        width={140}
        height={219}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <path fill="#315ACD" d="M7.205 121.901H139.95v12.963H7.205z" />
        <path fill="#6D6FAB" d="M7.205 142.642H139.95v5.704H7.205z" />
        <path
          d="M139.95.564v217.784H.982V.564H139.95ZM7.205 212.126h126.522V6.786H7.205v205.34Z"
          fill="#656268"
        />
      </svg>
    </div>
  );
};
export default Door;
