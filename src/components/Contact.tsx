"use client";

import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Envia dados para o RD Station CRM
      const response = await fetch("/api/rdcrm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar formulário");
      }

      console.log("Lead cadastrado no RD CRM:", result);
      setSubmitted(true);
      setFormData({ nome: "", telefone: "", email: "" });
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Ocorreu um erro. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    // Aplica máscara (XX) XXXXX-XXXX
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value.slice(0, 15);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-orange-primary font-semibold uppercase tracking-wider text-sm">
            Contato
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl lg:text-5xl text-text-light mt-2">
            ENTRE EM
            <br />
            <span className="text-gradient">CONTATO</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-orange-primary to-yellow-primary p-3 rounded-xl shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-bg-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-text-light font-semibold text-base sm:text-lg">
                  Endereço
                </h3>
                <p className="text-text-muted text-sm sm:text-base">
                  R. José Álvares, 102 — B. Luz
                  <br />
                  Nova Iguaçu - RJ
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-orange-primary to-yellow-primary p-3 rounded-xl shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-bg-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-text-light font-semibold text-base sm:text-lg">
                  Telefone
                </h3>
                <p className="text-text-muted text-sm sm:text-base">(21) 99076-0880</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-orange-primary to-yellow-primary p-3 rounded-xl shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-bg-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h3 className="text-text-light font-semibold text-base sm:text-lg">
                  Instagram
                </h3>
                <a 
                  href="https://instagram.com/ctporradaterapiaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm sm:text-base hover:text-orange-primary transition-colors"
                >
                  @ctporradaterapiaoficial
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-6 rounded-xl overflow-hidden h-48 sm:h-64">
              <iframe
                src="https://maps.google.com/maps?q=CT+PORRADATERAPIA+Nova+Iguaçu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização CT Porrada Terapia"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-dark-card rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-primary to-yellow-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-bg-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-text-light font-semibold text-xl mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-text-muted mb-6">
                  Em breve entraremos em contato com você.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                  }}
                  className="text-orange-primary hover:text-yellow-primary transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-text-light font-semibold text-lg sm:text-xl mb-6">
                  Agende sua aula experimental
                </h3>

                {/* Mensagem de erro */}
                {error && (
                  <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-text-muted text-sm mb-2"
                    >
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      className="w-full bg-bg-dark-secondary border border-white/10 rounded-xl px-4 py-3 text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-orange-primary transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-text-muted text-sm mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      required
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          telefone: formatPhone(e.target.value),
                        })
                      }
                      className="w-full bg-bg-dark-secondary border border-white/10 rounded-xl px-4 py-3 text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-orange-primary transition-colors"
                      placeholder="(41) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-muted text-sm mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-bg-dark-secondary border border-white/10 rounded-xl px-4 py-3 text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-orange-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-primary to-yellow-primary text-bg-dark font-bold px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
