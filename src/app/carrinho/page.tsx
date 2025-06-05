'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaShieldAlt, FaTag } from 'react-icons/fa';

// Tipo para os itens do carrinho
interface CartItem {
  id: number;
  nome: string;
  tamanho: string;
  preco: number;
  quantidade: number;
  imagem: string;
}

export default function Carrinho() {
  // Estado para os itens do carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      nome: 'Vestido Camila (GG)',
      tamanho: 'GG',
      preco: 219.90,
      quantidade: 1,
      imagem: '/images/produtos/vestido-festa.jpg'
    },
    {
      id: 2,
      nome: 'T-shirt Dayse - Café (Único 36/44)',
      tamanho: 'Único 36/44',
      preco: 69.90,
      quantidade: 1,
      imagem: '/images/produtos/blusa-cropped.jpg'
    }
  ]);
  
  // Estado para cupom de desconto
  const [cupom, setCupom] = useState('');
  const [cupomAplicado, setCupomAplicado] = useState(false);
  const [descontoAplicado, setDescontoAplicado] = useState(0);

  // Função para atualizar quantidade
  const atualizarQuantidade = (id: number, novaQuantidade: number) => {
    if (novaQuantidade < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      )
    );
  };

  // Função para remover item
  const removerItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Função para aplicar cupom
  const aplicarCupom = () => {
    if (cupom.toUpperCase() === 'ELEGANCE10') {
      setCupomAplicado(true);
      setDescontoAplicado(10);
    } else {
      alert('Cupom inválido ou expirado');
    }
  };

  // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  
  // Calcular desconto
  const desconto = cupomAplicado ? (subtotal * descontoAplicado / 100) : 0;
  
  // Calcular total
  const total = subtotal - desconto;

  // Animação para elementos que aparecem na tela
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-rose-400">
                  Início
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">Carrinho</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
            Seu <span className="text-rose-400 font-normal">Carrinho</span>
          </h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-gray-500 mb-4 text-5xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-medium text-gray-800 mb-4">Seu carrinho está vazio</h2>
              <p className="text-gray-600 mb-6">
                Parece que você ainda não adicionou nenhum produto ao seu carrinho.
              </p>
              <Link 
                href="/produtos" 
                className="inline-flex items-center bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-md transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Continuar Comprando
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Lista de produtos */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-gray-800 mb-4">Produtos no Carrinho</h2>
                    
                    <div className="divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <div key={item.id} className="py-6 flex flex-col sm:flex-row">
                          {/* Imagem do produto */}
                          <div className="sm:w-24 h-24 flex-shrink-0 overflow-hidden rounded-md mb-4 sm:mb-0">
                            <Image
                              src={item.imagem}
                              alt={item.nome}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          
                          {/* Detalhes do produto */}
                          <div className="sm:ml-6 flex-1 flex flex-col">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-base font-medium text-gray-800">
                                  {item.nome}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  Tamanho: {item.tamanho}
                                </p>
                              </div>
                              <p className="text-base font-medium text-gray-900">
                                {(item.preco * item.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                              </p>
                            </div>
                            
                            <div className="flex-1 flex items-end justify-between mt-4">
                              {/* Controle de quantidade */}
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button 
                                  onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                                  className="p-2 text-gray-600 hover:text-rose-500"
                                  disabled={item.quantidade <= 1}
                                >
                                  <FaMinus size={12} />
                                </button>
                                <span className="px-4 py-1 text-gray-900">{item.quantidade}</span>
                                <button 
                                  onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                                  className="p-2 text-gray-600 hover:text-rose-500"
                                >
                                  <FaPlus size={12} />
                                </button>
                              </div>
                              
                              {/* Botão remover */}
                              <button 
                                onClick={() => removerItem(item.id)}
                                className="text-rose-400 hover:text-rose-500 flex items-center"
                              >
                                <FaTrash className="mr-1" size={14} />
                                <span className="text-sm">Remover</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Botão continuar comprando */}
                <div className="mt-6">
                  <Link 
                    href="/produtos" 
                    className="inline-flex items-center text-rose-400 hover:text-rose-500"
                  >
                    <FaArrowLeft className="mr-2" />
                    Continuar Comprando
                  </Link>
                </div>
              </div>
              
              {/* Resumo do pedido */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-medium text-gray-800 mb-6">Resumo do Pedido</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    
                    {cupomAplicado && (
                      <div className="flex justify-between text-green-600">
                        <span className="flex items-center">
                          <FaTag className="mr-1" />
                          Desconto ({descontoAplicado}%)
                        </span>
                        <span>-{desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-medium">
                      <span className="text-gray-900">Total</span>
                      <span className="text-rose-600 text-xl">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                  </div>
                  
                  {/* Cupom de desconto */}
                  <div className="mt-6">
                    <label htmlFor="cupom" className="block text-sm font-medium text-gray-700 mb-1">
                      Cupom de Desconto
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="cupom"
                        value={cupom}
                        onChange={(e) => setCupom(e.target.value)}
                        placeholder="Digite seu cupom"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-rose-300"
                        disabled={cupomAplicado}
                      />
                      <button
                        onClick={aplicarCupom}
                        disabled={cupomAplicado || !cupom}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-r-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        Aplicar
                      </button>
                    </div>
                    {cupomAplicado && (
                      <p className="mt-1 text-sm text-green-600">Cupom aplicado com sucesso!</p>
                    )}
                  </div>
                  
                  {/* Botão finalizar compra */}
                  <div className="mt-6">
                    <Link 
                      href="/checkout" 
                      className="w-full bg-rose-100 hover:bg-rose-200 text-rose-500 font-medium py-3 rounded-md transition-colors uppercase flex justify-center items-center"
                    >
                      Continuar
                    </Link>
                  </div>
                  
                  {/* Compra segura */}
                  <div className="mt-6 flex items-center justify-center text-gray-500">
                    <FaShieldAlt className="mr-2" />
                    <span className="text-sm">Compra Segura 100% Protegido</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
