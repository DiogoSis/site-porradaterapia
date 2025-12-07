import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/photo/foto-treinador.jpg"
                alt="Treinador Porrada Terapia"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-primary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-orange-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Sobre nós
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl lg:text-5xl text-text-light mt-2 mb-4 sm:mb-6">
              MAIS QUE UM TREINO,
              <br />
              <span className="text-gradient">UMA FAMÍLIA</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-text-muted text-sm sm:text-base font-[family-name:var(--font-montserrat)]">
              <p>
                O Porrada Terapia nasceu da paixão pela luta, independente do
                estilo. Acreditamos que treinar é o melhor remédio para o corpo
                e para a mente, seja no Muay Thai, Boxe, Judô ou Kickboxing.
              </p>
              <p>
                Aqui você encontra um ambiente acolhedor, onde iniciantes e
                experientes treinam lado a lado, sempre com respeito e
                dedicação. Nossa missão é formar não apenas lutadores, mas
                pessoas melhores.
              </p>
              <p>
                Venha conhecer nossa família de luta e descubra o poder
                transformador das artes marciais.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {[
                { icon: "🥊", text: "Treinos para todos os níveis" },
                { icon: "👨‍🏫", text: "Professores qualificados" },
                { icon: "💪", text: "Foco em saúde e bem-estar" },
                { icon: "🏆", text: "Preparação para competições" },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 sm:gap-3 bg-bg-dark-card p-3 sm:p-4 rounded-lg sm:rounded-xl"
                >
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  <span className="text-text-light font-medium text-xs sm:text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
