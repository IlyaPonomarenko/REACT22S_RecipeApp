import { render, screen } from "@testing-library/react";
import "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";
import { BrowserRouter } from "react-router-dom";

it("should check if Link component renders inside of Card", () => {
  render(
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
});
