import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-aula-experimental.jpg"
          alt="Treino de Muay Thai"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/60 to-bg-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-20">
        <h1 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide mb-4 sm:mb-6">
          <span className="text-text-light">TREINAR É O MELHOR</span>
          <br />
          <span className="text-gradient">REMÉDIO</span>
        </h1>

        <p className="text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2 font-[family-name:var(--font-montserrat)]">
          Venha fazer parte da família Porrada Terapia. Muay Thai para todos os
          níveis, do iniciante ao competidor.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link
            href="#aula-experimental"
            className="bg-gradient-to-r from-orange-primary to-yellow-primary text-bg-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Agendar Aula Experimental
          </Link>

          <Link
            href="#horarios"
            className="border-2 border-orange-primary text-orange-primary font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-orange-primary hover:text-bg-dark transition-colors inline-flex items-center justify-center gap-2"
          >
            Ver Horários
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 px-4 sm:px-0">
          {[
            { value: "10+", label: "Anos de experiência" },
            { value: "200+", label: "Alunos treinados" },
            { value: "5x", label: "Treinos por semana" },
            { value: "100%", label: "Família" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl md:text-5xl text-orange-primary">
                {stat.value}
              </div>
              <div className="text-text-muted text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
