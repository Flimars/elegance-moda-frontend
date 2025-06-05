'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = 'Olá! Gostaria de mais informações sobre os produtos da Elegance Moda.' }: WhatsAppButtonProps) => {
  // Remove caracteres não numéricos do número de telefone
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Cria a URL do WhatsApp com o número e a mensagem
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return ( 
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
