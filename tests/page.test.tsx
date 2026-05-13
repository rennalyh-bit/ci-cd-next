import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renderiza o texto corretamente", () => {
    render(<Home />);

    expect(
      screen.getByText("Projeto CI/CD Next.js")
    ).toBeInTheDocument();
  });
});