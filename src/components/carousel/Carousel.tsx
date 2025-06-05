'use client';

import React from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Interface para o tipo de slide
interface Slide {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

// Interface para as props de configuração
interface CarouselConfigProps {
  slides?: Slide[];
  autoplay?: boolean;
  speed?: number;
  dots?: boolean;
  arrows?: boolean;
  className?: string;
}

// Interface para as props das setas customizadas
interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Componente para a seta "Próximo"
const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FaChevronRight className="text-gray-800" size={20} />
  </button>
);

// Componente para a seta "Anterior"
const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FaChevronLeft className="text-gray-800" size={20} />
  </button>
);

// Array fixo com os dados dos slides
const fixedSlides = [
  { image: '/images/carousel/slide1.png', alt: 'Slide 1 - Coleção Eternos Laços', title: 'Coleção Eternos Laços', subtitle: 'Descubra a beleza atemporal' },
  { image: '/images/carousel/slide2.png', alt: 'Slide 2 - Promoção Dia das Mães', title: 'Promoção Dia das Mães', subtitle: 'Presentes especiais para mães especiais' },
  { image: '/images/carousel/slide3.png', alt: 'Slide 3 - Novidades da Semana', title: 'Novidades da Semana', subtitle: 'Explore as últimas tendências' },
  { image: '/images/carousel/slide4.png', alt: 'Slide 4 - Looks Elegantes', title: 'Looks Elegantes', subtitle: 'Inspire-se com nossos estilos exclusivos' },
];

// Componente principal do Carrossel
const Carousel: React.FC<CarouselConfigProps> = ({
  slides = fixedSlides, // Usa o array fixo como padrão
  autoplay = true,
  speed = 500,
  dots = true,
  arrows = true,
  className = '',
}) => {
  // Configurações para o react-slick
  const settings: Settings = {
    dots,
    infinite: true,
    speed,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 5000,
    nextArrow: arrows ? <NextArrow /> : undefined,
    prevArrow: arrows ? <PrevArrow /> : undefined,
    dotsClass: 'slick-dots custom-dots',
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center items-center mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 mx-1 bg-gray-300 hover:bg-rose-400 rounded-full transition-colors" />
    ),
  };

  return (
    <div className={`carousel-container relative ${className}`}>
      <Slider {...settings}>
        {/* Mapeia os slides */}
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] md:h-[600px]">
            <Image
              src={slide.image} // Usa o caminho da imagem do array fixo
              alt={slide.alt}   // Usa o texto alternativo do array fixo
              fill // Preenche o contêiner
              style={{ objectFit: 'contain' }} // Garante que a imagem cubra o contêiner
              className="object-contain"
              priority={index === 0} // Prioriza o carregamento do primeiro slide
              sizes="100vw" // Adicionado para otimização (ajuste conforme necessário)
              onError={(e) => {
                // Fallback caso a imagem não carregue
                console.error(`Erro ao carregar imagem: ${slide.image}`);
                (e.target as HTMLImageElement).src = '/images/fallback-placeholder.png'; // Certifique-se que essa imagem exista
                (e.target as HTMLImageElement).alt = 'Imagem indisponível';
              }}
            />
            {/* Você pode adicionar títulos/subtítulos fixos aqui se desejar,
                ou remover esta seção se os slides são apenas imagens */}
            {/* Exemplo de título fixo para o primeiro slide:
            {index === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-20">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-4 drop-shadow-lg">
                  Título Fixo Slide 1
                </h2>
              </div>
            )}
            */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default React.memo(Carousel);

