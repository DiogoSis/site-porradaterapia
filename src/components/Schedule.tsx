import Image from "next/image";

type ScheduleItem = {
  time: string;
  type: string;
};

type DaySchedule = {
  day: string;
  periods: {
    label: string;
    classes: ScheduleItem[];
  }[];
};

const schedule: DaySchedule[] = [
  {
    day: "Segunda-feira",
    periods: [
      {
        label: "Manhã",
        classes: [
          { time: "07:00 - 08:00", type: "Boxe" },
          { time: "08:00 - 09:00", type: "Muay Thai" },
        ],
      },
      {
        label: "Tarde",
        classes: [{ time: "17:30 - 18:30", type: "Muay Thai" }],
      },
      {
        label: "Noite",
        classes: [
          { time: "19:30 - 20:30", type: "Muay Thai" },
          { time: "20:00 - 21:00", type: "Boxe P/ Todos" },
        ],
      },
    ],
  },
  {
    day: "Terça-feira",
    periods: [
      {
        label: "Tarde",
        classes: [
          { time: "17:30 - 18:30", type: "Boxe" },
          { time: "18:30 - 19:30", type: "Boxe Kids" },
        ],
      },
      {
        label: "Noite",
        classes: [{ time: "19:00 - 20:00", type: "Judô" }],
      },
    ],
  },
  {
    day: "Quarta-feira",
    periods: [
      {
        label: "Manhã",
        classes: [
          { time: "07:00 - 08:00", type: "Boxe" },
          { time: "08:00 - 09:00", type: "Muay Thai" },
        ],
      },
      {
        label: "Tarde",
        classes: [
          { time: "17:30 - 18:30", type: "Muay Thai" },
          { time: "18:30 - 19:30", type: "Kickboxing Kids" },
        ],
      },
      {
        label: "Noite",
        classes: [
          { time: "19:30 - 20:30", type: "Muay Thai" },
          { time: "20:00 - 21:00", type: "Boxe P/ Todos" },
        ],
      },
    ],
  },
  {
    day: "Quinta-feira",
    periods: [
      {
        label: "Tarde",
        classes: [
          { time: "17:30 - 18:30", type: "Boxe" },
          { time: "18:30 - 19:30", type: "Boxe Kids" },
        ],
      },
      {
        label: "Noite",
        classes: [{ time: "19:00 - 20:00", type: "Judô" }],
      },
    ],
  },
  {
    day: "Sexta-feira",
    periods: [
      {
        label: "Manhã",
        classes: [
          { time: "07:00 - 08:00", type: "Boxe" },
          { time: "08:00 - 09:00", type: "Muay Thai" },
        ],
      },
      {
        label: "Tarde",
        classes: [{ time: "17:30 - 18:30", type: "Muay Thai" }],
      },
      {
        label: "Noite",
        classes: [
          { time: "19:30 - 20:30", type: "Muay Thai" },
          { time: "20:00 - 21:00", type: "Boxe P/ Todos" },
        ],
      },
    ],
  },
];

export function Schedule() {
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

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {schedule.map((daySchedule) => (
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
