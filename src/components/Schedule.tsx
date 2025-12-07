"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

// ============================================================================
// CONFIGURAÇÃO DE MODALIDADES
// Para adicionar uma nova modalidade, basta adicionar aqui:
// ============================================================================
const MODALIDADES = [
  "Muay Thai",
  "Boxe",
  "Boxe P/ Todos",
  "Boxe Kids",
  "Judô",
  "Kickboxing Kids",
] as const;

type Modalidade = (typeof MODALIDADES)[number];

// ============================================================================
// CONFIGURAÇÃO DE HORÁRIOS
// Para editar horários, modifique o array abaixo:
// Cada item representa uma aula com: dia, período, horário e modalidade
// ============================================================================
type ScheduleItem = {
  day: string;
  period: "Manhã" | "Tarde" | "Noite";
  time: string;
  type: Modalidade;
};

const HORARIOS: ScheduleItem[] = [
  // SEGUNDA-FEIRA
  { day: "Segunda-feira", period: "Manhã", time: "07:00 - 08:00", type: "Boxe" },
  { day: "Segunda-feira", period: "Manhã", time: "08:00 - 09:00", type: "Muay Thai" },
  { day: "Segunda-feira", period: "Tarde", time: "17:30 - 18:30", type: "Muay Thai" },
  { day: "Segunda-feira", period: "Noite", time: "19:30 - 20:30", type: "Muay Thai" },
  { day: "Segunda-feira", period: "Noite", time: "20:00 - 21:00", type: "Boxe P/ Todos" },

  // TERÇA-FEIRA
  { day: "Terça-feira", period: "Tarde", time: "17:30 - 18:30", type: "Boxe" },
  { day: "Terça-feira", period: "Tarde", time: "18:30 - 19:30", type: "Boxe Kids" },
  { day: "Terça-feira", period: "Noite", time: "19:00 - 20:00", type: "Judô" },

  // QUARTA-FEIRA
  { day: "Quarta-feira", period: "Manhã", time: "07:00 - 08:00", type: "Boxe" },
  { day: "Quarta-feira", period: "Manhã", time: "08:00 - 09:00", type: "Muay Thai" },
  { day: "Quarta-feira", period: "Tarde", time: "17:30 - 18:30", type: "Muay Thai" },
  { day: "Quarta-feira", period: "Tarde", time: "18:30 - 19:30", type: "Kickboxing Kids" },
  { day: "Quarta-feira", period: "Noite", time: "19:30 - 20:30", type: "Muay Thai" },
  { day: "Quarta-feira", period: "Noite", time: "20:00 - 21:00", type: "Boxe P/ Todos" },

  // QUINTA-FEIRA
  { day: "Quinta-feira", period: "Tarde", time: "17:30 - 18:30", type: "Boxe" },
  { day: "Quinta-feira", period: "Tarde", time: "18:30 - 19:30", type: "Boxe Kids" },
  { day: "Quinta-feira", period: "Noite", time: "19:00 - 20:00", type: "Judô" },

  // SEXTA-FEIRA
  { day: "Sexta-feira", period: "Manhã", time: "07:00 - 08:00", type: "Boxe" },
  { day: "Sexta-feira", period: "Manhã", time: "08:00 - 09:00", type: "Muay Thai" },
  { day: "Sexta-feira", period: "Tarde", time: "17:30 - 18:30", type: "Muay Thai" },
  { day: "Sexta-feira", period: "Noite", time: "19:30 - 20:30", type: "Muay Thai" },
  { day: "Sexta-feira", period: "Noite", time: "20:00 - 21:00", type: "Boxe P/ Todos" },
];

// Ordem dos dias da semana
const DIAS_SEMANA = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

// Ordem dos períodos
const PERIODOS = ["Manhã", "Tarde", "Noite"] as const;

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export function Schedule() {
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState<
    Modalidade | "Todas"
  >("Todas");

  // Filtra e agrupa os horários com base na modalidade selecionada
  const scheduleAgrupado = useMemo(() => {
    // Filtra por modalidade se necessário
    const horariosFiltrados =
      modalidadeSelecionada === "Todas"
        ? HORARIOS
        : HORARIOS.filter((h) => h.type === modalidadeSelecionada);

    // Agrupa por dia e período
    const agrupado = new Map<
      string,
      Map<string, { time: string; type: Modalidade }[]>
    >();

    horariosFiltrados.forEach((item) => {
      if (!agrupado.has(item.day)) {
        agrupado.set(item.day, new Map());
      }
      const dayMap = agrupado.get(item.day)!;

      if (!dayMap.has(item.period)) {
        dayMap.set(item.period, []);
      }
      dayMap.get(item.period)!.push({ time: item.time, type: item.type });
    });

    // Converte para o formato esperado pelo componente
    return DIAS_SEMANA.filter((day) => agrupado.has(day)).map((day) => {
      const dayMap = agrupado.get(day)!;
      return {
        day,
        periods: PERIODOS.filter((period) => dayMap.has(period)).map(
          (period) => ({
            label: period,
            classes: dayMap.get(period)!,
          })
        ),
      };
    });
  }, [modalidadeSelecionada]);

  return (
    <section id="horarios" className="py-16 sm:py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-orange-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Grade de Horários
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl lg:text-5xl text-text-light mt-2">
            ENCONTRE O MELHOR
            <br />
            <span className="text-gradient">HORÁRIO PARA VOCÊ</span>
          </h2>
        </div>

        {/* Filtro de Modalidades */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <button
            onClick={() => setModalidadeSelecionada("Todas")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              modalidadeSelecionada === "Todas"
                ? "bg-gradient-to-r from-orange-primary to-yellow-primary text-bg-dark"
                : "bg-bg-dark-secondary text-text-muted hover:text-text-light hover:bg-bg-dark-card"
            }`}
          >
            Todas
          </button>
          {MODALIDADES.map((modalidade) => (
            <button
              key={modalidade}
              onClick={() => setModalidadeSelecionada(modalidade)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                modalidadeSelecionada === modalidade
                  ? "bg-gradient-to-r from-orange-primary to-yellow-primary text-bg-dark"
                  : "bg-bg-dark-secondary text-text-muted hover:text-text-light hover:bg-bg-dark-card"
              }`}
            >
              {modalidade}
            </button>
          ))}
        </div>

        {/* Indicador de modalidade selecionada */}
        {modalidadeSelecionada !== "Todas" && (
          <div className="text-center mb-6">
            <p className="text-text-muted text-sm">
              Mostrando horários de{" "}
              <span className="text-orange-primary font-semibold">
                {modalidadeSelecionada}
              </span>
            </p>
          </div>
        )}

        {/* Schedule Grid */}
        {scheduleAgrupado.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {scheduleAgrupado.map((daySchedule) => (
              <div
                key={daySchedule.day}
                className="bg-bg-dark-secondary rounded-xl sm:rounded-2xl overflow-hidden"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-orange-primary to-yellow-primary px-4 py-3">
                  <h3 className="text-bg-dark font-bold text-sm sm:text-base">
                    {daySchedule.day}
                  </h3>
                </div>

                {/* Periods */}
                <div className="p-4 space-y-4">
                  {daySchedule.periods.map((period) => (
                    <div key={period.label}>
                      <span className="text-orange-primary text-xs font-semibold uppercase tracking-wider">
                        {period.label}
                      </span>
                      <div className="mt-2 space-y-2">
                        {period.classes.map((classItem, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center bg-bg-dark-card rounded-lg px-3 py-2"
                          >
                            <span className="text-text-muted text-xs sm:text-sm">
                              {classItem.time}
                            </span>
                            <span className="text-text-light font-medium text-xs sm:text-sm">
                              {classItem.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <p className="text-text-muted text-lg">
              Nenhum horário disponível para esta modalidade.
            </p>
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src="/banner-horizontal.jpg"
            alt="CT Porrada Terapia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <p className="text-text-light font-[family-name:var(--font-bebas-neue)] text-xl sm:text-2xl md:text-3xl">
              &ldquo;O TATAME É O MELHOR PSICÓLOGO&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
