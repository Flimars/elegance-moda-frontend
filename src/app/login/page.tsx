'use client';

import React, { useState } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';

// Schema de validação do formulário
const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres')
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  // Estado para mostrar/ocultar senha
  const [mostrarSenha, setMostrarSenha] = useState(false);
  
  // Configuração do formulário com validação
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  // Função para enviar o formulário
  const onSubmit = async (data: LoginFormData) => {
    try {
      // Em um ambiente real, isso seria uma chamada à API de autenticação
      // const resposta = await fetch('http://localhost:3001/api/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      
      // Simulando um delay de autenticação
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Dados de login enviados:', data);
      
      // Redirecionamento após login bem-sucedido
      // Em um ambiente real, isso seria feito após verificar a resposta da API
      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

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
                  <span className="text-gray-500">Minha Conta</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">Login</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-md mx-auto"
        >
          <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
            Iniciar <span className="text-rose-400 font-normal">sessão</span>
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-MAIL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none placeholder: text-gray-600 text-gray-800 font-medium">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 placeholder:text-gray-600 text-gray-600 font-medium ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-rose-300'
                    }`}
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              {/* Senha */}
              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                  SENHA
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    id="senha"
                    {...register('senha')}
                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                      errors.senha ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-rose-300 placeholder:text-gray-600 text-gray-800 font-medium'
                    }`}
                    placeholder="Sua senha"
                  />
                  <div 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                  >
                    {mostrarSenha ? (
                      <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FaEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </div>
                </div>
                {errors.senha && (
                  <p className="mt-1 text-sm text-red-600">{errors.senha.message}</p>
                )}
              </div>
              
              {/* Esqueceu a senha */}
              <div className="text-right">
                <Link href="/recuperar-senha" className="text-sm text-rose-400 hover:text-rose-500">
                  Esqueceu a senha?
                </Link>
              </div>
              
              {/* Botão de login */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-100 hover:bg-rose-200 text-rose-500 font-medium py-3 rounded-md transition-colors uppercase disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Entrando...
                  </div>
                ) : (
                  'Iniciar Sessão'
                )}
              </button>
            </form>
            
            {/* Criar conta */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Não possui uma conta ainda? 
                <Link href="/cadastro" className="ml-1 text-rose-400 hover:text-rose-500 font-medium">
                  Criar uma conta
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
