import { render, screen } from "@testing-library/react";
import "testsSetup";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import WhereAmI from "./whereAmI";

test("does whereAmI all it's content?", () => {
  render(
    <BrowserRouter>
      <WhereAmI />
    </BrowserRouter>
  );
  expect(screen.getByText("Student Info")).toBeInTheDocument();
  expect(screen.getByText("Parent Info")).toBeInTheDocument();
  expect(screen.getByText("Overview")).toBeInTheDocument();
});
