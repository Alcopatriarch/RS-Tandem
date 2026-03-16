// tests/Welcome.test.tsx   (или WelcomePage.test.tsx — как принято в проекте)

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Welcome } from "../src/pages/Welcome";

// Hoisted мок, чтобы переменная была доступна внутри vi.mock (hoisting Vitest)
const { mockedNavigate } = vi.hoisted(() => ({
  mockedNavigate: vi.fn(),
}));

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe("Welcome Page", () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });
  it('When you click the "Sign In" button, navigate("/login") is called', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Welcome />
      </MemoryRouter>,
    );

    const signInButton = screen.getByRole("button", { name: /sign in/i });
    expect(signInButton).toBeDefined();

    fireEvent.click(signInButton);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith("/login");
  });

  it('When you click the "Register" button, navigate("/signUp") is called', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Welcome />
      </MemoryRouter>,
    );

    const registerButton = screen.getByRole("button", { name: /register/i });
    expect(registerButton).toBeDefined();

    fireEvent.click(registerButton);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith("/signUp");
  });

  it("Displays the Sign In and Register buttons", () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>,
    );

    expect(screen.getByRole("button", { name: /sign in/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /register/i })).toBeDefined();
  });
});
