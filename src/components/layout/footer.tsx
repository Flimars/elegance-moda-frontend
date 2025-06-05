'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';  //FaGlobe

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Em um ambiente real, isso enviaria o email para o backend
      console.log(`Email cadastrado na newsletter: ${email}`);
      alert('Email cadastrado com sucesso!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      {/* Seção principal do footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Assine nossa newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-rose-300"
                required
              />
              <button
                type="submit"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-r-md transition-colors"
              >
                →
              </button>
            </form>
            
            {/* Redes sociais */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Departamentos */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Departamentos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=blusas" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Blusas
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=saias" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Saias
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=conjuntos" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Conjuntos
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=vestidos" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Vestidos
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=blazer-casaco" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Blazer / Casaco
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Navegação */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/como-comprar" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Como Comprar
                </Link>
              </li>
              <li>
                <Link href="/politica-de-reembolso" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Política de Reembolso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-troca" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Política de Troca
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-rose-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Entre em contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="text-rose-400 mt-1 mr-2" />
                <span className="text-gray-600">(53) 9 9233-3083</span>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-rose-400 mt-1 mr-2" />
                <span className="text-gray-600">(53) 9 9255-2617</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-rose-400 mt-1 mr-2" />
                <span className="text-gray-600">elegancemoda@outlook.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-rose-400 mt-1 mr-2" />
                <span className="text-gray-600">
                  Rua Irmão Isício, 100 - Castelo Branco - Rio Grande/RS
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Botão WhatsApp flutuante */}
      <a
        href="https://wa.me/5553992552617"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      
      {/* Copyright */}
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image 
              src="/images/logo/logo.png" 
              alt="Elegance Moda" 
              width={120} 
              height={48} 
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Elegance Moda. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      {/* Cookie consent */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex flex-col md:flex-row justify-between items-center z-40">
        <p className="text-sm text-gray-600 mb-3 md:mb-0">
          Ao navegar por este site você aceita o uso de cookies para agilizar a sua experiência de compra.
        </p>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-1 text-sm rounded transition-colors">
          ENTENDI
        </button>
      </div> */}
    </footer>
  );
}









