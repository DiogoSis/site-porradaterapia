import Image from "next/image";

const images = [
  { src: "/foto-familia.jpg", alt: "Família Porrada Terapia" },
  { src: "/foto-evento.jpg", alt: "Evento de Muay Thai" },
  { src: "/foto-treino-grupo.jpg", alt: "Treino em grupo" },
  { src: "/foto-equipamentos.jpg", alt: "Equipamentos" },
];

export function Gallery() {
  return (
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
              className={`relative rounded-lg sm:rounded-xl overflow-hidden group ${
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
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-text-light font-medium text-xs sm:text-sm md:text-base">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
