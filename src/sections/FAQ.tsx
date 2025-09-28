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
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);

  const midpoint = Math.ceil(faq_questions.length / 2);
  const leftColumnQuestions = faq_questions.slice(0, midpoint);
  const rightColumnQuestions = faq_questions.slice(midpoint);

  const handleLeftColumnToggle = (questionIndex: number) => {
    const globalIndex = questionIndex;
    setOpenMobileIndex((prev) => (prev === globalIndex ? null : globalIndex));
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setOpenRightColumnIndex(null);
    }

    setOpenLeftColumnIndex((prev) =>
      prev === questionIndex ? null : questionIndex,
    );
  };

  const handleRightColumnToggle = (questionIndex: number) => {
    const globalIndex = midpoint + questionIndex;
    setOpenMobileIndex((prev) => (prev === globalIndex ? null : globalIndex));
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setOpenLeftColumnIndex(null);
    }

    setOpenRightColumnIndex((prev) =>
      prev === questionIndex ? null : questionIndex,
    );
  };

  return (
    <div className="relative my-8 w-full py-16 md:my-12 md:py-20">
      <div className="flex items-center justify-center px-6 md:px-16">
        <div className="relative">
          <div className="block md:hidden">
            <Image
              src="/FAQ-mobile.svg"
              alt="FAQ Background Mobile"
              width={390}
              height={780}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/FAQ.svg"
              alt="FAQ Background"
              width={1200}
              height={800}
              className="h-auto w-[75vw] max-w-5xl min-w-2xl object-contain"
              priority
            />
          </div>

          <div className="absolute inset-0 mt-16 flex items-center justify-center md:mt-20">
            <div
              className="mx-auto w-72 overflow-hidden rounded-2xl border border-white/30 shadow-2xl backdrop-blur-md md:w-[65vw] md:max-w-4xl md:min-w-2xl"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5))",
              }}
            >
              <div className="p-2 md:p-3">
                <div className="flex flex-col gap-1 md:flex-row md:gap-4">
                  <div className="flex flex-1 flex-col gap-1 md:gap-1.5">
                    {leftColumnQuestions.map(({ question, answer }, index) => (
                      <Question
                        question={question}
                        answer={answer}
                        key={question}
                        isOpen={
                          openMobileIndex === index ||
                          openLeftColumnIndex === index
                        }
                        onToggle={() => handleLeftColumnToggle(index)}
                      />
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col gap-1 md:gap-1.5">
                    {rightColumnQuestions.map(({ question, answer }, index) => {
                      const globalIndex = midpoint + index;
                      return (
                        <Question
                          question={question}
                          answer={answer}
                          key={question}
                          isOpen={
                            openMobileIndex === globalIndex ||
                            openRightColumnIndex === index
                          }
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
