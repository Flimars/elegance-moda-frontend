'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/carousel/Carousel';
import { motion } from 'framer-motion';

export default function Home() {
  // Dados do carrossel
  const carouselSlides = [
    {
      image: '/images/carousel/slide1.png',
      alt: 'Coleção Primavera/Verão',
      title: 'Temos o look perfeito para você!',
      subtitle: 'Nova coleção Primavera/Verão com peças exclusivas'
    },
    {
      image: '/images/carousel/slide2.png',
      alt: 'Promoções Especiais',
      title: 'Promoções Imperdíveis',
      subtitle: 'Até 50% de desconto em peças selecionadas'
    },
    {
      image: '/images/carousel/slide3.png',
      alt: 'Acessórios Elegantes',
      title: 'Acessórios que Transformam',
      subtitle: 'Complete seu look com nossa linha de acessórios'
    },
    {
      image: '/images/carousel/slide5.png',
      alt: 'Moda Plus Size',
      title: 'Beleza em Todos os Tamanhos',
      subtitle: 'Conheça nossa linha Plus Size com estilo e conforto'
    }
  ];

  // Categorias em destaque
  const featuredCategories = [
    {
      name: 'Vestidos',
      image: '/images/teste.jpg',
      link: '/produtos?categoria=vestidos'
    },
    {
      name: 'Blusas',
      image: '/images/categories/blusas/sueter-gabriela.webp',
      link: '/produtos?categoria=blusas'
    },
    {
      name: 'Saias',
      image: '/images/categories/saias/saia-daiane.webp',
      link: '/produtos?categoria=saias'
    },
    {
      name: 'Acessórios',
      image: '/images/categories/acessorios/bolsa-couro-preta.webp',
      link: '/produtos?categoria=acessorios'
    }
  ];

  // Animação para elementos que aparecem na tela
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen">
      {/* Carrossel principal */}
      <section className="w-full">
        <Carousel slides={carouselSlides} />
      </section>

      {/* Seção de boas-vindas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
              Bem-vinda à <span className="text-rose-400 font-normal">Elegance Moda</span>
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Descubra o melhor da moda feminina com peças que combinam elegância, conforto e estilo.
              Nossa missão é valorizar a beleza única de cada mulher, oferecendo roupas e acessórios
              que realçam sua personalidade e confiança.
            </p>
            <Link
              href="/produtos"
              className="inline-block bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-md transition-colors"
            >
              Explorar Coleção
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categorias em destaque */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-center text-gray-800 mb-12"
          >
            Categorias em <span className="text-rose-400 font-normal">Destaque</span>
          </motion.h2>

          {/* Substitua o bloco <div className="grid..."> ... </div> por isto para teste: */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <div key={index}>
                <Link href={category.link} className="block group">
                  <div className="relative h-80 bg-gray-200"> {/* Fundo cinza para ver o espaço */}
                    <Image
                      src={category.image} // Use o caminho que você confirmou existir
                      alt={category.name}
                      fill
                      style={{ objectFit: 'cover' }} // Mudar para 'contain' para teste
                    // Removido o className com hover e transition para simplificar
                    />
                  </div>
                  <div className="w-full p-4 bg-white">
                    <h3 className="text-xl font-medium text-gray-800">{category.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de novidades */}
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
                Novidades que <span className="text-rose-400 font-normal">Inspiram</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa nova coleção foi cuidadosamente desenhada para mulheres que valorizam
                qualidade e estilo. Com tecidos selecionados e acabamentos impecáveis,
                cada peça é pensada para trazer conforto e elegância ao seu dia a dia.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Visite nossa loja física ou navegue pelo nosso catálogo online para
                descobrir as últimas tendências e encontrar peças que combinam com seu estilo único.
              </p>
              <Link
                href="/promocoes"
                className="inline-block bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-md transition-colors"
              >
                Ver Promoções
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/novidades.webp"
                  alt="Novidades da coleção"
                  fill
                  style={{ objectFit: 'none' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-gray-800 mb-12"
          >
            O que nossas <span className="text-rose-400 font-normal">Clientes</span> dizem
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={index * 0.2}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  {index === 0 && "Adoro as roupas da Elegance Moda! Sempre encontro peças que combinam com meu estilo e recebo muitos elogios."}
                  {index === 1 && "O atendimento é excelente e as roupas têm ótima qualidade. Virou minha loja favorita para renovar o guarda-roupa."}
                  {index === 2 && "As promoções são imperdíveis e o conforto das peças é incrível. Recomendo para todas as minhas amigas!"}
                </p>
                <p className="font-medium text-gray-800">
                  {index === 0 && "Maria Silva"}
                  {index === 1 && "Ana Oliveira"}
                  {index === 2 && "Juliana Santos"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de newsletter */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              Fique por dentro das <span className="text-rose-400 font-normal">Novidades</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Assine nossa newsletter e receba ofertas exclusivas, lançamentos e dicas de moda em primeira mão.
            </p>
            <div className="flex flex-col sm:flex-row justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-4 py-3 rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 w-full sm:w-auto border border-gray-300 focus:outline-none focus:ring-1 focus:ring-rose-300"
              />
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-r-md sm:rounded-l-none transition-colors">
                Assinar
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
