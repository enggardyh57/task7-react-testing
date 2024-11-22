import React, { useState } from "react";
import ContactForm from "../fragments/Contact/ContactForm";
import Message from "../fragments/Contact/Message";

const Contact: React.FC = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    setIsMessageSent(true);
    form.reset();

    setTimeout(() => {
      setIsMessageSent(false);
    }, 5000);
  };

  return (
    <div className="contactsection bg-primary py-20" id="contact">
      <div className="contact text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact</h2>
        <h3 className="text-xl sm:text-xl md:text-2xl mb-4 opacity-70">Ready to start a great project together?</h3>
        <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-8">Let's collaborate and bring this extraordinary project to life, combining creative ideas and positive energy to achieve remarkable goals together!</p>
        <Message isVisible={isMessageSent} />
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Contact;
