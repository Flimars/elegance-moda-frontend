'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Carousel from '@/components/carousel/Carousel';
import { FaTag, FaShoppingBag } from 'react-icons/fa';

// Tipo para os produtos em promoção
interface ProdutoPromocao {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  precoPromo: number;
  imagem: string;
  categoria: {
    id: number;
    nome: string;
  };
}

export default function Promocoes() {
  // Estados
  const [promocoes, setPromocoes] = useState<ProdutoPromocao[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  // Efeito para carregar produtos em promoção
  useEffect(() => {
    const carregarPromocoes = async () => {
      try {
        setCarregando(true);
        // Em um ambiente real, isso seria uma chamada à API
        // const resposta = await fetch('http://localhost:3001/api/promocoes');
        // const dados = await resposta.json();
        
        // Dados simulados para demonstração
        const dadosSimulados = [
          {
            id: 1,
            nome: 'Vestido Floral Midi',
            descricao: 'Vestido midi com estampa floral, mangas curtas e cintura marcada.',
            preco: 199.90,
            precoPromo: 159.90,
            imagem: '/images/categories/vestidos/vestido-mindi-floral.webp',
            categoria: { id: 1, nome: 'Vestidos' }
          },
          {
            id: 2,
            nome: 'Blusa de Seda',
            descricao: 'Blusa de seda com decote V e mangas 3/4.',
            preco: 159.90,
            precoPromo: 129.90,
            imagem: '/images/categories/blusas/blusa-lorena-verde.webp',
            categoria: { id: 2, nome: 'Blusas' }
          },
          {
            id: 3,
            nome: 'Saia Midi Plissada',
            descricao: 'Saia midi plissada em tecido leve com cintura alta.',
            preco: 149.90,
            precoPromo: 119.90,
            imagem: '/images/categories/saias/saia-plissada-midi-rosa.webp',
            categoria: { id: 3, nome: 'Saias' }
          },
          {
            id: 4,
            nome: 'Sobretudo Neia',
            descricao: 'Sobetudo elegante em alfaiataria.',
            preco: 299.90,
            precoPromo: 259.90,
            imagem: '/images/categories/blazer-casacos/sobretudo-neia.webp',
            categoria: { id: 4, nome: 'Conjuntos' }
          },
          {
            id: 5,
            nome: 'Vestido Longo Festa',
            descricao: 'Vestido longo para ocasiões especiais com detalhes em renda.',
            preco: 349.90,
            precoPromo: 299.90,
            imagem: '/images/categories/vestidos/vestido-longo-festa-cor-verde.webp',
            categoria: { id: 1, nome: 'Vestidos' }
          },
          {
            id: 6,
            nome: 'Blusa Cropped',
            descricao: 'Blusa cropped em malha canelada com alças finas.',
            preco: 99.90,
            precoPromo: 79.90,
            imagem: '/images/categories/blusas/blusa-cropped.jpg',
            categoria: { id: 2, nome: 'Blusas' }
          },
          {
            id: 7,
            nome: 'Blazer Estruturado',
            descricao: 'Blazer estruturado em alfaiataria com botões dourados.',
            preco: 229.90,
            precoPromo: 189.90,
            imagem: '/images/categories/blazer-casacos/blazer-black.webp',
            categoria: { id: 5, nome: 'Blazer / Casaco' }
          },
          {
            id: 8,
            nome: 'Bolsa Feminina em Couro',
            descricao: 'Bolsa em couro croco estampado com alças fixas',
            preco: 129.90,
            precoPromo: 99.90,
            imagem: '/images/categories/acessorios/bolsa-couro-preta.webp',
            categoria: { id: 6, nome: 'Acessórios' }
          }
        ];
        
        setPromocoes(dadosSimulados);
        setCarregando(false);
      } catch (error) {
        console.error('Erro ao carregar promoções:', error);
        setErro('Não foi possível carregar as promoções. Por favor, tente novamente mais tarde.');
        setCarregando(false);
      }
    };

    carregarPromocoes();
  }, []);

  // Preparar slides para o carrossel de destaques
  const carouselSlides = promocoes.slice(0, 4).map(produto => ({
    image: produto.imagem,
    alt: produto.nome,
    title: `${produto.nome} - ${produto.precoPromo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`,
    subtitle: `De ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} por apenas ${produto.precoPromo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  }));

  // Calcular porcentagem de desconto
  const calcularDesconto = (precoOriginal: number, precoPromocional: number) => {
    return Math.round(((precoOriginal - precoPromocional) / precoOriginal) * 100);
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
            Nossas <span className="text-rose-400 font-normal">Promoções</span>
          </motion.h1>
        </div>
      </section>

      {/* Carrossel de promoções em destaque */}
      {!carregando && promocoes.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-light text-center text-gray-800 mb-8"
            >
              Promoções em <span className="text-rose-400 font-normal">Destaque</span>
            </motion.h2>
            
            <Carousel slides={carouselSlides} />
          </div>
        </section>
      )}

      {/* Lista de produtos em promoção */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-center text-gray-800 mb-12"
          >
            Todos os <span className="text-rose-400 font-normal">Produtos em Oferta</span>
          </motion.h2>
          
          {carregando ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-400"></div>
            </div>
          ) : erro ? (
            <div className="text-center text-red-500 py-8">{erro}</div>
          ) : promocoes.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              Nenhuma promoção disponível no momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {promocoes.map((produto, index) => {
                const descontoPercent = calcularDesconto(produto.preco, produto.precoPromo);
                
                return (
                  <motion.div
                    key={produto.id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={index * 0.1}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
                  >
                    {/* Badge de desconto */}
                    <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10 flex items-center">
                      <FaTag className="mr-1" />
                      {descontoPercent}% OFF
                    </div>
                    
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={produto.imagem}
                        alt={produto.nome}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-rose-400 font-medium">{produto.categoria.nome}</span>
                      <h3 className="text-lg font-medium text-gray-800 mt-1">{produto.nome}</h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{produto.descricao}</p>
                      <div className="mt-4">
                        {/* Preço original riscado */}
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 line-through">
                            {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </span>
                          <span className="ml-2 text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded">
                            -{descontoPercent}%
                          </span>
                        </div>
                        
                        {/* Preço promocional */}
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xl font-medium text-rose-600">
                            {produto.precoPromo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </span>
                          <button className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-md transition-colors flex items-center">
                            <FaShoppingBag className="mr-2" />
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Informações sobre promoções */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
              Ofertas por <span className="text-rose-400 font-normal">Tempo Limitado</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Nossas promoções são por tempo limitado e sujeitas à disponibilidade de estoque. 
              Aproveite para renovar seu guarda-roupa com peças de qualidade por preços especiais.
            </p>
            <p className="text-gray-600">
              Para mais informações sobre condições de pagamento, prazos de entrega ou 
              disponibilidade de tamanhos, entre em contato conosco pelo WhatsApp ou 
              visite nossa loja física.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
