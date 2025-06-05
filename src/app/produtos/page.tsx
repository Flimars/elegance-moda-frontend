'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFilter, FaSort, FaSearch } from 'react-icons/fa';

// Tipo para os produtos
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: {
    id: number;
    nome: string;
  };
}

export default function Produtos() {
  // Estados
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<{id: number, nome: string}[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | null>(null);
  const [termoBusca, setTermoBusca] = useState('');
  const [ordenacao, setOrdenacao] = useState('recentes');
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  // Efeito para carregar produtos
  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        setCarregando(true);
        // Em um ambiente real, isso seria uma chamada à API
        // const resposta = await fetch('http://localhost:3001/api/produtos');
        // const dados = await resposta.json();
        
        // Dados simulados para demonstração
        const dadosSimulados = [
          {
            id: 1,
            nome: 'Vestido Floral Midi',
            descricao: 'Vestido midi com estampa floral, mangas curtas e cintura marcada.',
            preco: 159.90,
            imagem: '/images/categories/vestidos/vestido-mindi-floral.webp',
            categoria: { id: 1, nome: 'Vestidos' }
          },
          {
            id: 2,
            nome: 'Blusa de Seda',
            descricao: 'Blusa de seda com decote V e mangas 3/4.',
            preco: 129.90,
            imagem: '/images/categories/blusas/blusa-lorena-verde.webp',
            categoria: { id: 2, nome: 'Blusas' }
          },
          {
            id: 3,
            nome: 'Saia Midi Plissada',
            descricao: 'Saia midi plissada em tecido leve com cintura alta.',
            preco: 119.90,
            imagem: '/images/categories/saias/saia-plissada-midi.webp',
            categoria: { id: 3, nome: 'Saias' }
          },
          {
            id: 4,
            nome: 'Conjunto Blazer e Calça',
            descricao: 'Conjunto elegante de blazer e calça em alfaiataria.',
            preco: 259.90,
            imagem: '/images/categories/blazer-casacos/blazer-estruturado-2.webp',
            categoria: { id: 4, nome: 'Conjuntos' }
          },
          {
            id: 5,
            nome: 'Vestido Longo Festa',
            descricao: 'Vestido longo para ocasiões especiais com detalhes em renda.',
            preco: 299.90,
            imagem: '/images/categories/vestidos/vestido-longo-festa-cor-verde.webp',
            categoria: { id: 1, nome: 'Vestidos' }
          },
          {
            id: 6,
            nome: 'Blusa Cropped',
            descricao: 'Blusa cropped em malha canelada com alças finas.',
            preco: 79.90,
            imagem: '/images/categories/blusas/blusa-cropped.jpg',
            categoria: { id: 2, nome: 'Blusas' }
          },
          {
            id: 7,
            nome: 'Blazer Estruturado',
            descricao: 'Blazer estruturado em alfaiataria com botões dourados.',
            preco: 189.90,
            imagem: '/images/categories/blazer-casacos/blazer-estruturado.webp',
            categoria: { id: 5, nome: 'Blazer / Casaco' }
          },
          {
            id: 8,
            nome: 'Bolsa Transversal',
            descricao: 'Bolsa transversal em couro sintético com alça ajustável.',
            preco: 99.90,
            imagem: '/images/categories/acessorios/bolsas-tote-de-couro.webp',
            categoria: { id: 6, nome: 'Acessórios' }
          }
        ];
        
        setProdutos(dadosSimulados);
        
        // Extrair categorias únicas
        const categoriasUnicas = Array.from(
          new Set(dadosSimulados.map(p => p.categoria.id))
        ).map(id => {
          const produto = dadosSimulados.find(p => p.categoria.id === id);
          return produto ? produto.categoria : { id: 0, nome: 'Desconhecida' };
        });
        
        setCategorias(categoriasUnicas);
        setCarregando(false);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        setErro('Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.');
        setCarregando(false);
      }
    };

    carregarProdutos();
  }, []);

  // Filtrar produtos por categoria e termo de busca
  const produtosFiltrados = produtos.filter(produto => {
    const matchCategoria = categoriaSelecionada === null || produto.categoria.id === categoriaSelecionada;
    const matchBusca = termoBusca === '' || 
      produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) || 
      produto.descricao.toLowerCase().includes(termoBusca.toLowerCase());
    
    return matchCategoria && matchBusca;
  });

  // Ordenar produtos
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    switch (ordenacao) {
      case 'preco-menor':
        return a.preco - b.preco;
      case 'preco-maior':
        return b.preco - a.preco;
      case 'nome-az':
        return a.nome.localeCompare(b.nome);
      case 'nome-za':
        return b.nome.localeCompare(a.nome);
      default:
        return a.id - b.id; // Recentes (por ID)
    }
  });

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
            Nossos <span className="text-rose-400 font-normal">Produtos</span>
          </motion.h1>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Filtro por categoria */}
            <div className="flex items-center">
              <FaFilter className="text-gray-500 mr-2" />
              <span className="text-gray-700 mr-2">Filtrar por:</span>
              <div className="relative">
                <select
                  value={categoriaSelecionada === null ? '' : categoriaSelecionada}
                  onChange={(e) => setCategoriaSelecionada(e.target.value ? Number(e.target.value) : null)}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-rose-300"
                >
                  <option value="">Todas as categorias</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nome}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Ordenação */}
            <div className="flex items-center">
              <FaSort className="text-gray-500 mr-2" />
              <span className="text-gray-700 mr-2">Ordenar por:</span>
              <div className="relative">
                <select
                  value={ordenacao}
                  onChange={(e) => setOrdenacao(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-rose-300"
                >
                  <option value="recentes">Mais recentes</option>
                  <option value="preco-menor">Menor preço</option>
                  <option value="preco-maior">Maior preço</option>
                  <option value="nome-az">Nome (A-Z)</option>
                  <option value="nome-za">Nome (Z-A)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Busca */}
            <div className="relative flex-grow md:max-w-xs">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 placeholder:text-gray-400 text-gray-600 font-medium"

              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {carregando ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-400"></div>
            </div>
          ) : erro ? (
            <div className="text-center text-red-500 py-8">{erro}</div>
          ) : produtosOrdenados.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              Nenhum produto encontrado com os filtros selecionados.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {produtosOrdenados.map((produto, index) => (
                <motion.div
                  key={produto.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  custom={index * 0.1}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
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
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xl font-medium text-gray-900">
                        {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                      <button className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-md transition-colors">
                        Comprar
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Informações adicionais */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
              Qualidade e <span className="text-rose-400 font-normal">Estilo</span> em cada peça
            </h2>
            <p className="text-gray-600 mb-8">
              Na Elegance Moda, selecionamos cuidadosamente cada item de nossa coleção para garantir 
              que você encontre peças de qualidade, com acabamento impecável e design exclusivo. 
              Nosso compromisso é oferecer produtos que combinem estilo, conforto e durabilidade.
            </p>
            <p className="text-gray-600">
              Caso tenha dúvidas sobre algum produto, tamanhos disponíveis ou formas de pagamento, 
              entre em contato conosco pelo WhatsApp ou visite nossa loja física.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
