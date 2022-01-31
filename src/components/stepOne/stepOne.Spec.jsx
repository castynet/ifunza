import { render, screen } from "@testing-library/react";
import StepOne from "./stepOne";

test("does the step one contain all it's content?", () => {
  render(<StepOne />);
  expect(screen.getByText("First Name")).toBeInTheDocument();
  expect(screen.getByText("Second Name")).toBeInTheDocument();
  expect(screen.getByText("Date of Birth")).toBeInTheDocument();
  expect(screen.getByText("Admission Number")).toBeInTheDocument();
  expect(screen.getByText("Upload Image")).toBeInTheDocument();
  expect(screen.getByText("Gender")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();
});
