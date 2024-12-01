import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "../component/fragments/Contact/ContactForm";

describe("ContactForm", () => {
  it("renders form with correct fields", () => {
    render(<ContactForm onSubmit={jest.fn()} />);

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted", () => {
    const onSubmit = jest.fn();
    render(<ContactForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Hello, this is a message!" } });

    const formElement = screen.getByTestId("contact-form");
    fireEvent.submit(formElement);

    expect(onSubmit).toHaveBeenCalled();
  });
});
