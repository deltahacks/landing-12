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
        className={clsx("group py-1.5 md:py-1.5 lg:py-2", isOpen && "open")}
      >
        <summary className="focus-visible:ring-opacity-75 text-brown flex w-full cursor-pointer list-none items-center gap-1.5 rounded-lg px-2.5 py-1 text-left text-xs leading-tight font-medium transition-all duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring focus-visible:ring-white/50 md:py-1 md:text-xs md:leading-tight lg:py-1.5 lg:text-sm lg:leading-normal">
          <span className="relative h-3 w-3 flex-shrink-0">
            <PlusIcon
              className={clsx(
                "text-brown absolute h-3 w-3 transition-opacity duration-200",
                isOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <MinusIcon
              className={clsx(
                "text-brown absolute h-3 w-3 transition-opacity duration-200",
                isOpen ? "opacity-100" : "opacity-0",
              )}
            />
          </span>
          {question}
        </summary>
        <div className="content text-brown w-full rounded-b-lg py-0.5 pl-7.5 text-xs leading-tight md:py-0.5 md:leading-tight lg:py-1 lg:leading-snug">
          {answer}
        </div>
      </details>
    </div>
  );
};

export default Question;
