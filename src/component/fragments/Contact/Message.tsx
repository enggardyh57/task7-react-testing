import React from "react";

interface MessageProps {
  isVisible: boolean;
}

const Message: React.FC<MessageProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="text-center text-white bg-green-500 py-2 mb-4">
      <p className="font-bold">Thank you! Your message has been sent.</p>
    </div>
  );
};

export default Message;
