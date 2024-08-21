import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders expected text", () => {
  render(<App />);
  const linkElement = screen.getByText(/how was your week overall/i);
  expect(linkElement).toBeInTheDocument();
});
