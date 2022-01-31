import { render, screen } from "@testing-library/react";
import StepThree from "./stepThree";
import "testsSetup";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("does the step three contain all it's content?", () => {
  render(
    <BrowserRouter>
      <StepThree />
    </BrowserRouter>
  );
  expect(screen.getByText("Student Info")).toBeInTheDocument();
  expect(screen.getByText("Parent Info")).toBeInTheDocument();
  expect(screen.getByText("DoB:")).toBeInTheDocument();
  expect(screen.getByText("Admission Number:")).toBeInTheDocument();
  expect(screen.getByText("Phone:")).toBeInTheDocument();
  expect(screen.getByText("Email:")).toBeInTheDocument();
  expect(screen.getByText("Prev")).toBeInTheDocument();
  expect(screen.getByText("Confirm")).toBeInTheDocument();
});
