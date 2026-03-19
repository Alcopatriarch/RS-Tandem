export type QuestionType = "trueFalse";

export interface Question {
  id: string;
  question: string;
  type: QuestionType;
  answers: string[];
  correctAnswer: number | number[];
}
