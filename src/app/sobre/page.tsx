'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Sobre() {
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
            Sobre a <span className="text-rose-400 font-normal">Elegance Moda</span>
          </motion.h1>
        </div>
      </section>

      {/* História da empresa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            >
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                Nossa <span className="text-rose-400 font-normal">História</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Elegance Moda nasceu em 2010, do sonho de duas amigas apaixonadas por moda, 
                Carolina Mendes e Beatriz Oliveira. Após anos trabalhando no setor de vestuário, 
                elas decidiram unir suas experiências e criar uma marca que refletisse sua visão 
                sobre moda feminina: peças elegantes, confortáveis e acessíveis.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O que começou como uma pequena loja no centro da cidade, rapidamente ganhou 
                reconhecimento pela qualidade das peças e pelo atendimento personalizado. 
                A dedicação em selecionar tecidos de qualidade e criar designs exclusivos 
                conquistou uma clientela fiel, permitindo a expansão do negócio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Em 2015, a empresária Mariana Santos se juntou à sociedade, trazendo sua 
                experiência em gestão e marketing digital, o que impulsionou ainda mais o 
                crescimento da marca, especialmente no ambiente online.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/sobre/historia.jpg"
                  alt="História da Elegance Moda"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-center text-gray-800 mb-12"
          >
            Missão, Visão e <span className="text-rose-400 font-normal">Valores</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              transition={{ delay: 0 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-4">Missão</h3>
              <p className="text-gray-600">
                Oferecer produtos de moda feminina que combinem qualidade, estilo e conforto, 
                valorizando a beleza única de cada mulher e proporcionando uma experiência 
                de compra agradável e personalizada.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como referência em moda feminina, expandindo nossa presença 
                no mercado nacional, mantendo o compromisso com a qualidade e a satisfação 
                das nossas clientes.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Qualidade em cada detalhe</li>
                <li>• Atendimento personalizado</li>
                <li>• Respeito à diversidade</li>
                <li>• Compromisso com a satisfação</li>
                <li>• Inovação constante</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossas Sócias */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-center text-gray-800 mb-12"
          >
            Nossas <span className="text-rose-400 font-normal">Sócias</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carolina Mendes",
                role: "Fundadora e Diretora Criativa",
                bio: "Formada em Design de Moda, Carolina traz sua visão criativa e conhecimento técnico para cada coleção da Elegance Moda. Com mais de 15 anos de experiência no setor, ela é responsável por garantir que cada peça reflita a elegância e qualidade que são marcas registradas da empresa.",
                image: "/images/sobre/socia1.jpg"
              },
              {
                name: "Beatriz Oliveira",
                role: "Fundadora e Diretora Comercial",
                bio: "Com formação em Administração e especialização em Varejo, Beatriz coordena as operações comerciais e o relacionamento com fornecedores. Sua experiência anterior em grandes redes de moda trouxe para a Elegance Moda estratégias eficientes de gestão e vendas.",
                image: "/images/sobre/socia2.jpg"
              },
              {
                name: "Mariana Santos",
                role: "Sócia e Diretora de Marketing",
                bio: "Especialista em Marketing Digital, Mariana se juntou à equipe em 2015 e foi responsável pela expansão da presença online da marca. Sua visão inovadora tem sido fundamental para conectar a Elegance Moda com o público mais jovem e ampliar o alcance da marca.",
                image: "/images/sobre/socia3.jpg"
              }
            ].map((socia, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={index}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={socia.image}
                    alt={socia.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-800">{socia.name}</h3>
                <p className="text-rose-400 mb-4">{socia.role}</p>
                <p className="text-gray-600 px-4">{socia.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Loja Atual */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:w-1/2 mb-8 md:mb-0 md:pl-8"
            >
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                Nossa <span className="text-rose-400 font-normal">Loja Atual</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hoje, a Elegance Moda está localizada em um espaço amplo e aconchegante no 
                coração da cidade. Nossa loja física foi projetada para proporcionar uma 
                experiência de compra agradável, com ambientes bem iluminados, provadores 
                confortáveis e uma equipe de atendimento treinada para auxiliar cada cliente 
                na escolha das peças ideais.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Além da loja física, investimos em nossa presença digital, oferecendo uma 
                plataforma de e-commerce completa onde nossas clientes podem encontrar todo 
                o nosso catálogo e realizar compras com facilidade e segurança.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Estamos constantemente evoluindo e buscando novas formas de melhorar a 
                experiência de nossas clientes, seja na loja física ou no ambiente online.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/sobre/loja-atual.jpg"
                  alt="Loja atual da Elegance Moda"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              Venha nos <span className="text-rose-400 font-normal">Conhecer</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Estamos ansiosas para recebê-la em nossa loja e ajudá-la a encontrar peças que realcem sua beleza e estilo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/produtos" 
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-md transition-colors"
              >
                Ver Produtos
              </Link>
              <Link 
                href="/contato" 
                className="bg-white hover:bg-gray-100 text-rose-400 border border-rose-400 px-8 py-3 rounded-md transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
