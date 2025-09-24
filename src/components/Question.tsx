"use client";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";
import clsx from "clsx";
import { useAccordionAnimation } from "~/hooks/useAccordionAnimation";

export interface QuestionType {
  question: string;
  answer: string;
}

type QuestionProps = React.HTMLAttributes<HTMLDivElement> &
  QuestionType & {
    isOpen: boolean;
    onToggle: () => void;
  };

const Question: React.FC<QuestionProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  useAccordionAnimation(detailsRef, isOpen, onToggle);

  return (
    <div className="w-full">
      <details
        ref={detailsRef}
        className={clsx("group py-2", isOpen && "open")}
      >
        <summary className="focus-visible:ring-opacity-75 flex w-full cursor-pointer list-none items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm font-medium text-[#766060] transition-all duration-200 hover:bg-white/20 hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-white/50 lg:py-2 lg:text-base">
          <span className="relative h-4 w-4 flex-shrink-0">
            <PlusIcon
              className={clsx(
                "absolute h-4 w-4 text-[#766060] transition-opacity duration-200",
                isOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <MinusIcon
              className={clsx(
                "absolute h-4 w-4 text-[#766060] transition-opacity duration-200",
                isOpen ? "opacity-100" : "opacity-0",
              )}
            />
          </span>
          {question}
        </summary>
        <div className="content w-full rounded-b-lg bg-white/15 px-3 py-1.5 text-xs leading-relaxed text-[#766060] backdrop-blur-sm">
          {answer}
        </div>
      </details>
    </div>
  );
};

export default Question;
