"use client";
import { useState } from "react";
import Question from "~/components/Question";
import { faq_questions } from "~/data/questionData";
import { FAQShelfDesktop, FAQShelfMobile } from "~/components/svgs/FAQShelf";

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
    setOpenRightColumnIndex(null);
    setOpenLeftColumnIndex((prev) =>
      prev === questionIndex ? null : questionIndex,
    );
  };

  const handleRightColumnToggle = (questionIndex: number) => {
    const globalIndex = midpoint + questionIndex;
    setOpenMobileIndex((prev) => (prev === globalIndex ? null : globalIndex));
    setOpenLeftColumnIndex(null);
    setOpenRightColumnIndex((prev) =>
      prev === questionIndex ? null : questionIndex,
    );
  };

  return (
    <div id="faq" className="relative my-8 w-full py-16 md:my-12 md:py-20">
      <div className="flex items-center justify-center px-6 md:px-16">
        <div className="relative w-full max-w-[52rem]">
          <div className="block md:hidden">
            <FAQShelfMobile />
          </div>
          <div className="hidden md:block">
            <FAQShelfDesktop />
          </div>
          <div className="absolute inset-0 mt-16 flex items-center justify-center md:mt-20">
            <div className="h-215 w-87 overflow-hidden rounded-2xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-md md:h-130 md:w-250 md:-translate-y-13 md:transform">
              <div className="p-1 lg:p-3">
                <div className="flex flex-col md:flex-row md:gap-0 lg:gap-4">
                  <div className="flex flex-1 flex-col gap-4 md:gap-0.5 lg:gap-1">
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

                  <div className="flex flex-1 flex-col gap-4 md:gap-0.5 lg:gap-1">
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
