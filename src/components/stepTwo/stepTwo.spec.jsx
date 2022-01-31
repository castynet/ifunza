import { render, screen } from "@testing-library/react";
import StepTwo from "./stepTwo";
import "testsSetup";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("does the step three contain all it's content?", () => {
  render(
    <BrowserRouter>
      <StepTwo />
    </BrowserRouter>
  );
  expect(screen.getByText("First Name :")).toBeInTheDocument();
  expect(screen.getByText("Second Name :")).toBeInTheDocument();
  expect(screen.getByText("Phone Number :")).toBeInTheDocument();
  expect(screen.getByText("Address (Residence) :")).toBeInTheDocument();
  expect(screen.getByText("Email :")).toBeInTheDocument();
  expect(screen.getByText("Next Step")).toBeInTheDocument();
});
