import { render, screen } from "@testing-library/react";
import StepThree from "./stepThree";

test("does the step three contain all it's content?", () => {
  render(<StepThree />);
  expect(screen.getByText("Student Info")).toBeInTheDocument();
  expect(screen.getByText("Parent Info")).toBeInTheDocument();
  expect(screen.getByText("DoB:")).toBeInTheDocument();
  expect(screen.getByText("Admission Number:")).toBeInTheDocument();
  expect(screen.getByText("Phone:")).toBeInTheDocument();
  expect(screen.getByText("Email:")).toBeInTheDocument();
  expect(screen.getByText("Prev")).toBeInTheDocument();
  expect(screen.getByText("confirm")).toBeInTheDocument();
});
