"use client";
import { useState } from "react";
import Question from "~/components/Question";
import { faq_questions } from "~/data/questionData";

const FAQ: React.FC = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null,
  );

  const midpoint = Math.ceil(faq_questions.length / 2);
  const leftColumnQuestions = faq_questions.slice(0, midpoint);
  const rightColumnQuestions = faq_questions.slice(midpoint);

  const handleToggle = (questionIndex: number) => {
    setOpenQuestionIndex((prev) =>
      prev === questionIndex ? null : questionIndex,
    );
  };

  return (
    <div className="container mx-auto flex h-fit min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12 text-black">
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-col gap-4">
          {leftColumnQuestions.map(({ question, answer }, index) => (
            <Question
              question={question}
              answer={answer}
              key={question}
              isOpen={openQuestionIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-4">
          {rightColumnQuestions.map(({ question, answer }, index) => {
            const adjustedIndex = index + leftColumnQuestions.length;
            return (
              <Question
                question={question}
                answer={answer}
                key={question}
                isOpen={openQuestionIndex === adjustedIndex}
                onToggle={() => handleToggle(adjustedIndex)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
