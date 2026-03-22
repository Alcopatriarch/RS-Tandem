import { useState } from "react";
import Card from "./card";
import questionsData from "./data/questions.json";
import type { Question } from "../../../types/types.tsx";
const questions = questionsData as Question[];

const typeTitles: Record<string, string> = {
  trueFalse: "True or False",
  ABC: "Choose the correct answer",
  oneOut: "Find the error",
};

function Quiz() {
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);
    setCurrent((prev) => prev + 1);
  };

  if (current >= questions.length) {
    return (
      <div
        className="
        w-screen
        h-screen
        flex
        items-center
        justify-center
      bg-milk
      text-black
      dark:bg-dark-gunmetal
      dark:text-white
      "
      >
        <div
          className="
        bg-gainsboro
        dark:bg-japanese-indigo
          p-12
          rounded-2xl
          shadow-2xl
          max-w-3xl
          w-[90%]
          text-center
        "
        >
          <h2 className="text-4xl font-semibold mb-4">Quiz finished</h2>

          <p className="text-3xl ">
            Score {score} / {questions.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
      w-screen
      h-screen
      flex
      items-center
      justify-center
    bg-milk
    dark:bg-dark-gunmetal
    text-white
    dark:text-black
    "
    >
      <div
        className="
      bg-gainsboro
      dark:bg-japanese-indigo
        w-[90%]
        max-w-4xl
        p-12
        rounded-2xl
        shadow-2xl
      "
      >
        <div className="flex justify-between mb-8">
          <h1
            className="text-3xl
            text-black
            dark:text-white
              font-semibold"
          >
            {typeTitles[questions[current].type]}
          </h1>

          <span
            className="text-xl
            text-black
            dark:text-white
              opacity-80"
          >
            {current + 1}/{questions.length}
          </span>
        </div>

        <Card question={questions[current]} callback={handleAnswer} />
      </div>
    </div>
  );
}

export default Quiz;
