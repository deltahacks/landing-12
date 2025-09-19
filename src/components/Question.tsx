"use client";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";
import clsx from "clsx";
import { useAccordionAnimation } from "~/hooks/useAccordionAnimation";

export interface QuestionType {
  question: string;
  answer: string;
}

type QuestionProps = React.HTMLAttributes<HTMLDivElement> & QuestionType & {
  isOpen: boolean;
  onToggle: () => void;
};

const Question: React.FC<QuestionProps> = ({ question, answer, isOpen, onToggle }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  useAccordionAnimation(detailsRef, isOpen, onToggle);

  return (
    <div className="w-full">
      <details ref={detailsRef} className={clsx("group py-2", isOpen && "open")}>
        <summary className="hover:bg-opacity-5 focus-visible:ring-opacity-75 text-secondary hover:bg-background-hover flex w-full cursor-pointer list-none items-center gap-4 rounded-lg px-4 py-2 text-left text-lg font-medium focus:outline-none focus-visible:ring focus-visible:ring-white lg:py-5 lg:text-2xl">
          <span className="flex-shrink-0 relative w-6 h-6">
            <PlusIcon className={clsx("w-6 h-6 absolute transition-opacity duration-200", isOpen ? "opacity-0" : "opacity-100")} />
            <MinusIcon className={clsx("w-6 h-6 absolute transition-opacity duration-200", isOpen ? "opacity-100" : "opacity-0")} />
          </span>
          {question}
        </summary>
        <div className="content text-secondary w-full px-4 pt-2">{answer}</div>
      </details>
    </div>
  );
};

export default Question;
