import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button, { ButtonProps } from "../component/elements/Home/Button";
import "@testing-library/jest-dom"; // Import for additional matchers

// Helper function to render the Button component with required providers
const renderButton = (props: ButtonProps) => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Button {...props} />
    </BrowserRouter>
  );
};

describe("Button Component", () => {
  it("renders the button with the correct text", () => {
    renderButton({ text: "Click me" });

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
  });

  it("renders Link when `to` prop is provided", () => {
    renderButton({ to: "/test-url", text: "Go to Test" });

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("renders anchor with `href` when `href` prop is provided", () => {
    renderButton({ href: "https://example.com", text: "Visit Example" });

    const anchor = screen.getByRole("link");
    expect(anchor).toHaveAttribute("href", "https://example.com");
  });

  it("does not render Link when `href` prop is provided", () => {
    renderButton({ href: "https://example.com", text: "Visit Example" });

    const link = screen.queryByRole("link", { name: "Go to Test" });
    expect(link).not.toBeInTheDocument();
  });
});
