import React from "react";
import { cn } from "~/lib/utils";

const Door: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => (
  <div {...props} className={cn("bg-blue-500/40", props.className)}>
    <svg
      width={"100%"}
      height={"100%"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"absolute top-0 left-0 scale-[0.98] backdrop-blur-sm"}
    >
      <path d="M7.2 6.794h126.666v205.373H7.2z" filter="url(#f1)" />
    </svg>
    <svg
      width={"100%"}
      height={"100%"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"absolute top-0 left-0"}
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

export default Door;
