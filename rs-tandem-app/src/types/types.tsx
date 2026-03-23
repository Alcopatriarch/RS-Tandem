export type QuestionType = "trueFalse" | "ABC" | "oneOut";

export interface Question {
  id: string;
  question: string;
  type: QuestionType;
  answers: string[];
  correctAnswer: number | number[];
}
