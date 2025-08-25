"use client";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";
import clsx from "clsx";

export interface QuestionType {
  question: string;
  answer: string;
}

type QuestionProps = React.HTMLAttributes<HTMLDivElement> & QuestionType;

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  return (
    <div className="w-full">
      <details className="group border-b border-gray-400 py-2">
        <summary className="hover:bg-opacity-5 focus-visible:ring-opacity-75 text-secondary hover:bg-background-hover flex w-full cursor-pointer list-none justify-between rounded-lg px-4 py-2 text-left text-lg font-medium focus:outline-none focus-visible:ring focus-visible:ring-white lg:py-5 lg:text-2xl">
          {question}
          <span>
            <ChevronUpIcon
              className={clsx("w-6 transition-transform group-open:rotate-180")}
            />
          </span>
        </summary>
        <div className="text-secondary w-full px-4 pt-2">{answer}</div>
      </details>
    </div>
  );
};

export default Question;
