'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaUser, FaUserAlt, FaAt, FaPhoneAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

// Schema de validação do formulário
const contatoSchema = z.object({
    nome: z.string().min(2, 'Nome é obrigatório'),
    sobrenome: z.string().min(2, 'Sobrenome é obrigatório'),
    email: z.string().email('Email inválido'),
    telefone: z.string().min(10, 'Telefone inválido'),
    whatsapp: z.string().optional(),
    mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

type ContatoFormData = z.infer<typeof contatoSchema>;

export default function Contato() {
    // Configuração do formulário com validação
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContatoFormData>({
        resolver: zodResolver(contatoSchema)
    });

    // Estado para mensagem de sucesso
    const [enviado, setEnviado] = React.useState(false);

    // Função para enviar o formulário
    const onSubmit = async (data: ContatoFormData) => {
        try {
            // Em um ambiente real, isso seria uma chamada à API
            // const resposta = await fetch('http://localhost:3001/api/contato', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(data),
            // });

            // Simulando um delay de envio
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Dados enviados:', data);
            setEnviado(true);
            reset();

            // Resetar mensagem de sucesso após 5 segundos
            setTimeout(() => {
                setEnviado(false);
            }, 5000);
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    // Animação para elementos que aparecem na tela
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen">
            {/* Banner da página */}
            <section className="relative h-64 md:h-80 bg-rose-50">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-100/70 to-rose-50/30"></div>
                <div className="container mx-auto px-4 h-full flex items-center justify-center">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl font-light text-gray-800 text-center"
                    >
                        Entre em <span className="text-rose-400 font-normal">Contato</span>
                    </motion.h1>
                </div>
            </section>

            {/* Seção de contato */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Informações de contato */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="lg:w-1/3"
                        >
                            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
                                Nossos <span className="text-rose-400 font-normal">Contatos</span>
                            </h2>

                            <p className="text-gray-600 mb-8">
                                Estamos à disposição para atender você. Entre em contato conosco
                                através dos canais abaixo ou preencha o formulário ao lado.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                                        <FaMapMarkerAlt className="text-rose-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Endereço</h3>
                                        <p className="text-gray-600">
                                            Av. das Flores, 1500, Centro<br />
                                            São Paulo - SP, 01000-000
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                                        <FaPhone className="text-rose-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Telefone</h3>
                                        <p className="text-gray-600">(11) 3000-5000</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                                        <FaWhatsapp className="text-rose-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">WhatsApp</h3>
                                        <p className="text-gray-600">(11) 99999-9999</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                                        <FaEnvelope className="text-rose-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Email</h3>
                                        <p className="text-gray-600">contato@elegancemoda.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                                        <FaGlobe className="text-rose-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Website</h3>
                                        <p className="text-gray-600">www.elegancemoda.com.br</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Formulário de contato */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="lg:w-2/3"
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                                <h2 className="text-2xl font-light text-gray-800 mb-6">
                                    Envie sua <span className="text-rose-400 font-normal">Mensagem</span>
                                </h2>

                                {enviado && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Nome */}
                                        <div>
                                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                                                Nome *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaUser className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="nome"
                                                    {...register('nome')}
                                                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.nome ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-rose-300'
                                                        }`}
                                                    placeholder="Seu nome"
                                                />
                                            </div>
                                            {errors.nome && (
                                                <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
                                            )}
                                        </div>

                                        {/* Sobrenome */}
                                        <div>
                                            <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700 mb-1">
                                                Sobrenome *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaUserAlt className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="sobrenome"
                                                    {...register('sobrenome')}
                                                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.sobrenome ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-rose-300'
                                                        }`}
                                                    placeholder="Seu sobrenome"
                                                />
                                            </div>
                                            {errors.sobrenome && (
                                                <p className="mt-1 text-sm text-red-600">{errors.sobrenome.message}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaAt className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    {...register('email')}
                                                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-rose-300'
                                                        }`}
                                                    placeholder="seu.email@exemplo.com"
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>

                                        {/* Telefone */}
                                        <div>
                                            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Telefone *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaPhoneAlt className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="telefone"
                                                    {...register('telefone')}
                                                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.telefone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-rose-300'
                                                        }`}
                                                    placeholder="(11) 99999-9999"
                                                />
                                            </div>
                                            {errors.telefone && (
                                                <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>
                                            )}
                                        </div>

                                        {/* WhatsApp */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                                                WhatsApp
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaWhatsapp className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="whatsapp"
                                                    {...register('whatsapp')}
                                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-300"
                                                    placeholder="(11) 99999-9999"
                                                />
                                            </div>
                                        </div>

                                        {/* Mensagem */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                                                Mensagem *
                                            </label>
                                            <textarea
                                                id="mensagem"
                                                {...register('mensagem')}
                                                rows={5}
                                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.mensagem ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-rose-300'
                                                    }`}
                                                placeholder="Digite sua mensagem aqui..."
                                            ></textarea>
                                            {errors.mensagem && (
                                                <p className="mt-1 text-sm text-red-600">{errors.mensagem.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Botão de envio */}
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-md transition-colors flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <FaPaperPlane className="mr-2" />
                                                    Enviar Mensagem
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mapa ou localização */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-light text-center text-gray-800 mb-6"
                    >
                        Contato</motion.h2>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                    >
                        <iframe
                            className="w-full h-64 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902123456789!2d-46.63330868412345!3d-23.550520284681234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a5b6c7e8b7%3A0x9a8e8c8c8c8c8c8c!2sAv.%20das%20Flores%2C%201500%20-%20Centro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001000-000!5e0!3m2!1spt-BR!2sbr!4v1631234567890"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
// Nota: O código acima é um exemplo de como criar uma página de contato com React, Framer Motion e React Hook Form.

