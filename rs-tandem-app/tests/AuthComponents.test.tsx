import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Registration from "../src/pages/Registration";
import BackButton from "../src/components/ui/BackButton";
const renderAuthPage = (route = "/login") => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Registration />} />
      </Routes>
    </MemoryRouter>,
  );
};
describe("Client side validation", () => {
  describe("Login page validation", () => {
    it("should show validation errors when sumbitting empty form", async () => {
      renderAuthPage("/login");
      const submitButton = screen.getByRole("button", { name: /Sign In/i });
      fireEvent.click(submitButton);
      await waitFor(() => {
        const emailError = screen.getByText("Email is required", {
          selector: "p",
        });
        const passError = screen.getByText("Password is required", {
          selector: "p",
        });
        expect(emailError).toBeInTheDocument();
        expect(passError).toBeInTheDocument();
      });
    });
    it("should show validation errors when sumbitting uncorrect password format", async () => {
      renderAuthPage("/login");
      const emailInput = screen.getByPlaceholderText("Enter your email");
      const passwordInput = screen.getByPlaceholderText("Enter a password");
      const submitButton = screen.getByRole("button", { name: /Sign In/i });
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "123" } });
      fireEvent.click(submitButton);
      await waitFor(() => {
        const emailError = screen.queryByText("Email is required", {
          selector: "p",
        });
        expect(emailError).not.toBeInTheDocument();
        const passError = screen.getByText(
          "The password must contain at least 7 characters",
          { selector: "p" },
        );
        expect(passError).toBeInTheDocument();
      });
    });
  });

  describe("Registration page validation", () => {
    it("should show validation errors when submitting empty form", async () => {
      renderAuthPage("/signUp");
      const submitButton = screen.getByRole("button", { name: /Sign Up/i });
      fireEvent.click(submitButton);
      await waitFor(() => {
        const nameError = screen.getByText("Name is required", {
          selector: "p",
        });
        const emailError = screen.getByText("Email is required", {
          selector: "p",
        });
        const passError = screen.getByText("Password is required", {
          selector: "p",
        });
        expect(nameError).toBeInTheDocument();
        expect(emailError).toBeInTheDocument();
        expect(passError).toBeInTheDocument();
      });
    });
    it("shouldn't show validation errors when sumbitting correct name format", async () => {
      renderAuthPage("/signUp");
      const nameInput = screen.getByPlaceholderText("Enter your name");
      const submitButton = screen.getByRole("button", { name: /Sign Up/i });
      fireEvent.change(nameInput, { target: { value: "Ann" } });
      fireEvent.click(submitButton);
      await waitFor(() => {
        const nameError = screen.queryByText("Name is required", {
          selector: "p",
        });
        expect(nameError).not.toBeInTheDocument();
      });
    });
  });
  describe("Check whether the Back button works properly", async () => {
    it("should redirect to the welcome page when clicked", () => {
      render(
        <MemoryRouter initialEntries={["/curr-page"]}>
          <Routes>
            <Route path="/curr-page" element={<BackButton />} />
            <Route path="/" element={<h1>Welcome to the Tandem App</h1>} />
          </Routes>
        </MemoryRouter>,
      );
      const btn = screen.getByText("Back");
      expect(
        screen.queryByText("Welcome to the Tandem App"),
      ).not.toBeInTheDocument();
      fireEvent.click(btn);
      const welcomePage = screen.getByText("Welcome to the Tandem App");
      expect(welcomePage).toBeInTheDocument();
    });
  });
});
