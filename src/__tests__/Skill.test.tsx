import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skill from "../component/layouts/Skill";

describe("Skill Component", () => {
  it("renders skill section correctly", () => {
    render(<Skill />);

    expect(screen.getByTestId("skill-section")).toBeInTheDocument();
    expect(screen.getByTestId("skill-heading")).toBeInTheDocument();
    expect(screen.getByTestId("skill-title")).toBeInTheDocument();
    expect(screen.getByTestId("skill-subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("skill-description")).toBeInTheDocument();
  });

  it("renders skill cards correctly", () => {
    render(<Skill />);

    expect(screen.getByTestId("skill-card-list")).toBeInTheDocument();
  });

  it("activates a skill card on click", async () => {
    render(<Skill />);

    const uiCard = await screen.findByTestId("skill-card-0");
    expect(uiCard).toBeInTheDocument();

    fireEvent.click(uiCard);
    expect(uiCard).toHaveClass("active");
    expect(uiCard).toHaveClass("bg-seccondary");
    expect(uiCard).toHaveClass("text-white");

    fireEvent.click(uiCard);
    expect(uiCard).not.toHaveClass("active");
    expect(uiCard).not.toHaveClass("bg-seccondary");
    expect(uiCard).not.toHaveClass("text-white");
  });
});
