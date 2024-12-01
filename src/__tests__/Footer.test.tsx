import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../component/layouts/Footer";

describe("Footer Component", () => {
  it("renders the footer correctly", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("bg-seccondary");

    expect(screen.getByText("Created by Enggar Dyah | 2024")).toBeInTheDocument();
  });

  it("contains the correct text", () => {
    render(<Footer />);

    const footerText = screen.getByText("Created by Enggar Dyah | 2024");
    expect(footerText).toBeInTheDocument();
  });
});
