import { useState } from "react";
import type { Question } from "../../../types/types.tsx";

interface Props {
  question: Question;
  callback: (isCorrect: boolean) => void;
}

function Card({ question, callback }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleCheck = () => {
    if (selected === null) return;

    const isCorrect =
      typeof question.correctAnswer === "number"
        ? selected === question.correctAnswer
        : question.correctAnswer.includes(selected);

    callback(isCorrect);

    setSelected(null);
  };

  return (
    <div className="flex flex-col gap-8">
      <div
        className="text-4xl text-black
      dark:text-white "
      >
        {question.question}
      </div>

      <div className="flex justify-center gap-6">
        {question.answers.map((answer, index) => {
          const selectedStyle =
            selected === index ? "bg-[#2c5d86] border-blue-400" : "";

          return (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`
                px-6
                py-2
                text-2xl
                min-w-40
                rounded-md text-black
              dark:text-white
                border
                transition
              bg-cadet-grey
              dark:bg-[#11212D99]
              border-[#0E1A24]
              hover:bg-blue-300 
              hover:border-green-800
              dark:hover:border-blue-400
              dark:hover:bg-blue-800
                ${selectedStyle}
              `}
            >
              {answer}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleCheck}
          disabled={selected === null}
          className="
          text-black
          dark:text-white
          px-12
          py-4
          rounded-xl
          dark:bg-dark-gunmetal
          bg-cadet-grey
          hover:bg-blue-300 
          text-2xl
          dark:hover:bg-blue-800
          disabled:opacity-40
          disabled:cursor-not-allowed
          transition
          "
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default Card;
