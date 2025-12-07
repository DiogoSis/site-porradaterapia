"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/banner/foto-familia.webp", alt: "Família Porrada Terapia" },
  { src: "/photo/foto-evento.webp", alt: "Evento de Muay Thai" },
  { src: "/photo/foto-treino-grupo.jpg", alt: "Treino em grupo" },
  { src: "/photo/foto-equipamentos.jpg", alt: "Equipamentos" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Fecha o modal com ESC
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    } else if (e.key === "ArrowRight" && selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % images.length);
    } else if (e.key === "ArrowLeft" && selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
    }
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, handleKeyDown]);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev! + 1) % images.length);
  };

  return (
    <>
      <section id="galeria" className="py-16 sm:py-24 bg-bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-orange-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Nossa Galeria
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl lg:text-5xl text-text-light mt-2">
              MOMENTOS DA
              <br />
              <span className="text-gradient">FAMÍLIA DE LUTA</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {images.map((image, index) => (
              <div
                key={image.src}
                onClick={() => openImage(index)}
                className={`relative rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer ${
                  index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Ícone de expandir */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-bg-dark/60 backdrop-blur-sm rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-text-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-text-light font-medium text-xs sm:text-sm md:text-base">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Imagem Expandida */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark/95 backdrop-blur-md"
          onClick={closeModal}
        >
          {/* Botão Fechar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 bg-bg-dark-secondary/80 hover:bg-orange-primary text-text-light p-2 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Botão Anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-50 bg-bg-dark-secondary/80 hover:bg-orange-primary text-text-light p-3 rounded-full transition-colors"
            aria-label="Imagem anterior"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Botão Próximo */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-50 bg-bg-dark-secondary/80 hover:bg-orange-primary text-text-light p-3 rounded-full transition-colors"
            aria-label="Próxima imagem"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Container da Imagem */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>

          {/* Legenda */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-text-light font-medium text-lg bg-bg-dark/60 backdrop-blur-sm inline-block px-6 py-2 rounded-full">
              {images[selectedImage].alt}
            </p>
            <p className="text-text-muted text-sm mt-2">
              {selectedImage + 1} / {images.length} • Use as setas para navegar
            </p>
          </div>
        </div>
      )}
    </>
  );
}
