import { render, screen } from "@testing-library/react";
import App from "./App";

test("does the app contain all it's content?", () => {
  render(<App />);
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
