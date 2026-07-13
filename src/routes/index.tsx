import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import heroBuilding from "@/assets/hero-building.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import shadowDetail from "@/assets/shadow-detail.jpg";
import textureBg from "@/assets/texture-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-sand font-sans text-brand-earth selection:bg-brand-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-10">
        <span className="font-display text-2xl font-semibold tracking-tighter">
          Verdantis
        </span>
        <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
          <a href="#conceito" className="transition-colors hover:text-brand-gold">
            O Conceito
          </a>
          <a href="#lifestyle" className="transition-colors hover:text-brand-gold">
            Lifestyle
          </a>
          <a href="#register" className="transition-colors hover:text-brand-gold">
            Localização
          </a>
        </div>
        <a
          href="#register"
          className="rounded-full border border-brand-earth/20 px-5 py-2 text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-brand-earth hover:text-brand-sand"
        >
          Lista VIP
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute right-0 top-0 z-0 h-full w-full md:w-2/3">
          <img
            src={heroBuilding}
            alt="Fachada do empreendimento Verdantis ao entardecer, com jardins verticais integrados à arquitetura"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-sand via-brand-sand/60 to-transparent md:from-brand-sand/95 md:via-brand-sand/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-earth/70">
                Pré-lançamento · 2026
              </span>
            </div>
            <h1 className="mb-8 font-display text-6xl leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem]">
              Onde a <br />
              <span className="font-light italic">natureza</span>
              <br /> reside.
            </h1>
            <p className="mb-10 max-w-md text-base font-light leading-relaxed md:text-xl">
              Um refúgio urbano desenhado para quem busca o equilíbrio entre a
              sofisticação moderna e a serenidade orgânica.
            </p>
            <a
              href="#register"
              className="inline-block rounded-full bg-brand-earth px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-sand transition-transform hover:scale-[1.02]"
            >
              Garantir acesso antecipado
            </a>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="conceito" className="relative overflow-hidden py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
            <div className="z-20 md:col-span-5">
              <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                01 — O Conceito
              </span>
              <h2 className="mb-8 font-display text-4xl italic leading-tight md:text-6xl">
                Espaços que respiram.
              </h2>
              <p className="text-lg leading-relaxed text-brand-earth/70">
                O Verdantis não é apenas um endereço. É um manifesto sobre como
                viver bem — com varandas que se fundem ao horizonte e interiores
                que abraçam a luz natural em cada hora do dia.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-20 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                  Lançamento Outono · 2026
                </span>
              </div>
            </div>

            <div className="relative md:col-span-7">
              <div className="relative z-10">
                <img
                  src={interiorDetail}
                  alt="Detalhe interior em madeira e travertino iluminado pela luz do entardecer"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-sm object-cover shadow-2xl"
                />
              </div>
              <div className="floating-image absolute -bottom-16 -left-10 z-20 hidden aspect-[5/7] w-64 lg:block">
                <img
                  src={shadowDetail}
                  alt="Sombra de folhagem sobre parede de pedra"
                  width={512}
                  height={720}
                  loading="lazy"
                  className="h-full w-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle — full-bleed image */}
      <section
        id="lifestyle"
        className="relative min-h-[80vh] w-full overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBuilding})` }}
      >
        <div className="absolute inset-0 bg-brand-earth/60" />
        <div className="relative z-10 flex min-h-[80vh] items-end px-6 py-24 md:px-16 md:py-32">
          <div className="max-w-3xl text-brand-sand">
            <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold">
              02 — Lifestyle
            </span>
            <h2 className="mb-8 font-display text-4xl leading-tight md:text-7xl">
              Uma <span className="italic font-light">curadoria</span> do que
              importa.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-brand-sand/80">
              Wellness privativo, cozinha assinada, rooftop com vista para o
              parque. Cada ambiente foi pensado para transformar rotina em
              ritual.
            </p>
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section
        id="register"
        className="relative overflow-hidden bg-brand-earth py-24 text-brand-sand md:py-40"
      >
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-screen"
          style={{ backgroundImage: `url(${textureBg})`, backgroundSize: "cover" }}
          aria-hidden
        />

        <div className="container relative z-10 mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Lista VIP
            </span>
            <h3 className="mb-8 font-display text-4xl leading-tight md:text-7xl">
              Seja o primeiro a habitar o amanhã.
            </h3>
            <p className="mx-auto mb-16 max-w-xl text-sm uppercase tracking-[0.25em] text-brand-sand/60">
              Cadastre-se para ser avisado assim que as vendas forem liberadas
              e receber acesso exclusivo ao book digital.
            </p>

            {submitted ? (
              <div className="mx-auto max-w-lg border border-brand-gold/40 bg-brand-earth/40 p-12 backdrop-blur-sm">
                <div className="mx-auto mb-6 h-px w-16 bg-brand-gold" />
                <h4 className="mb-4 font-display text-3xl italic">
                  Cadastro recebido.
                </h4>
                <p className="text-sm leading-relaxed text-brand-sand/70">
                  Você está na lista VIP do Verdantis. Em breve, entraremos em
                  contato com o convite exclusivo para o preview.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-8 gap-y-8 text-left md:grid-cols-2"
              >
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="block text-[10px] uppercase tracking-[0.3em] text-brand-sand/50"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    className="w-full border-b border-brand-sand/20 bg-transparent py-3 text-brand-sand placeholder:text-brand-sand/25 focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-[10px] uppercase tracking-[0.3em] text-brand-sand/50"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full border-b border-brand-sand/20 bg-transparent py-3 text-brand-sand placeholder:text-brand-sand/25 focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="phone"
                    className="block text-[10px] uppercase tracking-[0.3em] text-brand-sand/50"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full border-b border-brand-sand/20 bg-transparent py-3 text-brand-sand placeholder:text-brand-sand/25 focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="message"
                    className="block text-[10px] uppercase tracking-[0.3em] text-brand-sand/50"
                  >
                    Mensagem (opcional)
                  </label>
                  <input
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Conte o que você procura"
                    className="w-full border-b border-brand-sand/20 bg-transparent py-3 text-brand-sand placeholder:text-brand-sand/25 focus:border-brand-gold focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2 md:pt-6">
                  <button
                    type="submit"
                    className="w-full bg-brand-gold py-5 text-xs font-bold uppercase tracking-[0.3em] text-brand-earth transition-colors hover:bg-brand-sand"
                  >
                    Quero ser avisado
                  </button>
                </div>
              </form>
            )}

            <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-brand-sand/40">
              Ao se cadastrar, você concorda em receber comunicações exclusivas sobre este lançamento.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-earth/10 py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
          <div className="font-display text-xl font-semibold tracking-tighter text-brand-gold">
            Verdantis
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">
            © 2026 Verdantis Incorporações · Imagens meramente ilustrativas · CRECI J-00000
          </div>
          <div className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-earth/10 text-[8px] font-bold">
              IG
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-earth/10 text-[8px] font-bold">
              LI
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
