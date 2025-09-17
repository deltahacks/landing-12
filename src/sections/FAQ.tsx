import Question from "~/components/Question";
import { faq_questions } from "~/data/questionData";

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto flex h-fit min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12 text-black">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {faq_questions.map(({ question, answer }) => (
          <Question question={question} answer={answer} key={question} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
