"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
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
      <Disclosure as="div" className="border-b border-gray-400 py-2">
        {({ open }) => (
          <>
            <DisclosureButton className="hover:bg-opacity-5 focus-visible:ring-opacity-75 text-secondary hover:bg-background-hover flex w-full cursor-pointer justify-between rounded-lg px-4 py-2 text-left text-lg font-medium focus:outline-none focus-visible:ring focus-visible:ring-white lg:py-5 lg:text-2xl">
              {question}
              <span>
                <ChevronUpIcon
                  className={clsx("w-6", open && "rotate-180 transform")}
                />
              </span>
            </DisclosureButton>
            <Transition
              as="div"
              className="overflow-hidden transition-all duration-500"
              enterFrom="transform scale-95 opacity-0 max-h-0"
              enterTo="transform scale-100 opacity-100 max-h-96"
              leaveFrom="transform scale-100 opacity-100 max-h-96"
              leaveTo="transform scale-95 opacity-0 max-h-0"
            >
              <DisclosurePanel className="text-secondary w-full px-4">
                {answer}
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Question;
