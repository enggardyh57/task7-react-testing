import React from "react";
import Label from "../../elements/Contact/Label";
import Input from "../../elements/Contact/Input";
import TextArea from "../../elements/Contact/TextArea";
import Button from "../../elements/Contact/Button";

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  return (
    <form className="bg-seccondary p-8 rounded-xl shadow-md max-w-4xl mx-auto" onSubmit={onSubmit}>
      <div className="mb-4">
        <Label htmlFor="name" text="Full Name" className="text-white" />
        <Input id="name" type="text" placeholder="Your full name" required />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" text="Email" className="text-white" />
        <Input id="email" type="email" placeholder="Your email" required />
      </div>
      <div className="mb-4">
        <Label htmlFor="message" text="Message" className="text-white" />
        <TextArea id="message" placeholder="Write your message here" required />
      </div>
      <Button type="submit" text="Send Message" className="bg-black text-white hover:bg-opacity-80" />
    </form>
  );
};

export default ContactForm;
