"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "905536126959";
  const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="  flex items-center lg:p-3 p-1 fixed bottom-8 right-10 lg:bottom-16  z-50 rounded-full bg-green-500">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-xl hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-white" size={36} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
