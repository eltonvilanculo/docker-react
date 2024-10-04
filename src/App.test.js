import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Elton/i);
  expect(linkElement).toBeInTheDocument();
});
test("test 2 for react", () => {
  render(<App />);
  const linkElement = screen.getByText(/Elton/i);
  expect(linkElement).toBeInTheDocument();
});
test("test 2 for react", () => {
  render(<App />);
  const linkElement = screen.getByText(/Elton/i);
  expect(linkElement).toBeInTheDocument();
});
