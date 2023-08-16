import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world text", () => {
  render(<App />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});

test("renders 7 cards", () => {
  render(<App />);
  expect(screen.getAllByText(/card title/i)).toHaveLength(7);
});

test("renders 7 card descriptions", () => {
  render(<App />);
  expect(screen.getAllByText(/card description/i)).toHaveLength(7);
});
