import React from "react";

interface WhatsAppCTAProps {
  children?: React.ReactNode;
  className?: string;
}

export default function WhatsAppCTA({ children, className }: WhatsAppCTAProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_RENGONI_WHATSAPP_NUMBER || "0000000000";
  const message = "Hi, I want to contribute or donate something to Rengoni NGO. Please guide me on how I can contribute.";
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
