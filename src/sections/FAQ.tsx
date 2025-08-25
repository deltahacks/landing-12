import Question from "../components/Question";
import { faq_questions } from "../data/questionData";

const FAQ: React.FC = () => {
  return (
    <div
      id="FAQ"
      className="container mx-auto flex h-fit min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12 text-black"
    >
      <div className="text-secondary flex w-full flex-col lg:flex-row lg:gap-4">
        <div className="text-secondary flex w-full flex-col flex-wrap lg:w-1/2 lg:pr-4">
          {faq_questions
            .slice(0, faq_questions.length / 2)
            .map(({ question, answer }) => (
              <Question question={question} answer={answer} key={question} />
            ))}
        </div>
        <div className="flex w-full flex-col flex-wrap lg:w-1/2 lg:pl-4">
          {faq_questions
            .slice(faq_questions.length / 2, faq_questions.length)
            .map(({ question, answer }) => (
              <Question question={question} answer={answer} key={question} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
