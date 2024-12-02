import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button, { ButtonProps } from "../component/elements/Home/Button";
import "@testing-library/jest-dom"; // Impor untuk matcher tambahan

// Fungsi bantu untuk merender komponen Button dengan provider yang diperlukan
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

describe("Komponen Button", () => {
  it("merender tombol dengan teks yang benar", () => {
    renderButton({ text: "Klik saya" });

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Klik saya");
  });

  it("merender Link ketika prop `to` diberikan", () => {
    renderButton({ to: "/test-url", text: "Ke Test" });

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("merender anchor dengan `href` ketika prop `href` diberikan", () => {
    renderButton({ href: "https://example.com", text: "Kunjungi Example" });

    const anchor = screen.getByRole("link");
    expect(anchor).toHaveAttribute("href", "https://example.com");
  });

  it("tidak merender Link ketika prop `href` diberikan", () => {
    renderButton({ href: "https://example.com", text: "Kunjungi Example" });

    const link = screen.queryByRole("link", { name: "Ke Test" });
    expect(link).not.toBeInTheDocument();
  });
});
