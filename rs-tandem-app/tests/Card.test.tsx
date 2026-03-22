import Card from "../src/components/features/game/card";
import type { Question } from "../src/types/types";

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

const mockQuestion: Question = {
  question: "What is 2 + 2?",
  answers: ["1", "2", "4", "5"],
  correctAnswer: 2,
  id: "",
  type: "trueFalse",
};

describe("Card component", () => {
  it("renders the question text", () => {
    render(<Card question={mockQuestion} callback={() => {}} />);

    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
  });

  it("renders all answer buttons", () => {
    render(<Card question={mockQuestion} callback={() => {}} />);

    mockQuestion.answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });
  });

  it("Check button is disabled initially", () => {
    render(<Card question={mockQuestion} callback={() => {}} />);

    const button = screen.getByText("Check");
    expect(button).toBeDisabled();
  });

  it("Check button becomes enabled after selecting an answer", () => {
    render(<Card question={mockQuestion} callback={() => {}} />);

    fireEvent.click(screen.getByText("1"));

    const button = screen.getByText("Check");
    expect(button).not.toBeDisabled();
  });

  it("calls callback with true when correct answer is selected", () => {
    const callback = vi.fn();

    render(<Card question={mockQuestion} callback={callback} />);

    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("Check"));

    expect(callback).toHaveBeenCalledWith(true);
  });

  it("calls callback with false when wrong answer is selected", () => {
    const callback = vi.fn();

    render(<Card question={mockQuestion} callback={callback} />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("Check"));

    expect(callback).toHaveBeenCalledWith(false);
  });
});
