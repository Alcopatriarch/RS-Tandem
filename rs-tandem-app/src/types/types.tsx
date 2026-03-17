export type QuestionType = "trueFalse" | "ABC";

export interface Question {
  id: string;
  question: string;
  type: QuestionType;
  answers: string[];
  correctAnswer: number | number[];
}
