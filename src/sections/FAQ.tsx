"use client";
import { useState } from "react";
import Image from "next/image";
import Question from "~/components/Question";
import { faq_questions } from "~/data/questionData";

const FAQ: React.FC = () => {
  const [openLeftColumnIndex, setOpenLeftColumnIndex] = useState<number | null>(
    null,
  );
  const [openRightColumnIndex, setOpenRightColumnIndex] = useState<
    number | null
  >(null);

  const limitedQuestions = faq_questions.slice(0, 8);
  const midpoint = Math.ceil(faq_questions.length / 2);
  const leftColumnQuestions = faq_questions.slice(0, midpoint);
  const rightColumnQuestions = faq_questions.slice(midpoint);

  const handleLeftColumnToggle = (questionIndex: number) => {
    setOpenLeftColumnIndex((prev) =>
      prev === questionIndex ? null : questionIndex,
    );
  };

  const handleRightColumnToggle = (questionIndex: number) => {
    setOpenRightColumnIndex((prev) =>
      prev === questionIndex ? null : questionIndex,
    );
  };

  return (
    <div className="relative my-8 w-full py-16 md:my-12 md:py-20">
      <div className="flex items-center justify-center px-6 md:px-16 lg:px-24">
        <div className="relative">
          <div className="block md:hidden">
            <Image
              src="/FAQ-mobile.svg"
              alt="FAQ Background Mobile"
              width={350}
              height={700}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/FAQ.svg"
              alt="FAQ Background"
              width={1000}
              height={700}
              className="h-auto w-[60vw] max-w-[1200px] min-w-[800px] object-contain lg:w-[70vw] xl:w-[80vw]"
              priority
            />
          </div>

          <div className="absolute inset-0 mt-15 flex items-center justify-center md:mt-20">
            <div className="mx-auto w-70 overflow-hidden rounded-2xl border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md md:w-[60vw] md:max-w-[900px] md:min-w-[600px] lg:w-[50vw] xl:w-[60vw]">
              <div className="h-auto max-h-[730px] overflow-y-auto p-4 md:max-h-[350px] md:p-6 xl:max-h-[500px]">
                <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                  <div className="flex flex-1 flex-col gap-3">
                    {leftColumnQuestions.map(({ question, answer }, index) => (
                      <Question
                        question={question}
                        answer={answer}
                        key={question}
                        isOpen={openLeftColumnIndex === index}
                        onToggle={() => handleLeftColumnToggle(index)}
                      />
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    {rightColumnQuestions.map(({ question, answer }, index) => {
                      return (
                        <Question
                          question={question}
                          answer={answer}
                          key={question}
                          isOpen={openRightColumnIndex === index}
                          onToggle={() => handleRightColumnToggle(index)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
