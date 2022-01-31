import { render, screen } from "@testing-library/react";
import "./testsSetup";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("does the app contain all it's content?", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
