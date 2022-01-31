import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import StepOne from "./stepOne";
import "testsSetup";

test("does the step one contain all it's content?", () => {
  render(
    <BrowserRouter>
      <StepOne />
    </BrowserRouter>
  );
  expect(screen.getByText("First Name :")).toBeInTheDocument();
  expect(screen.getByText("Second Name :")).toBeInTheDocument();
  expect(screen.getByText("Date of Birth :")).toBeInTheDocument();
  expect(screen.getByText("Admission Number :")).toBeInTheDocument();
  expect(screen.getByText("Gender :")).toBeInTheDocument();
  expect(screen.getByText("Next Step")).toBeInTheDocument();
});
