import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import heroBuildingAsset from "@/assets/fachada-noite.jpg.asset.json";
import lifestyleAsset from "@/assets/praca.jpg.asset.json";
import fachadaAerea from "@/assets/fachada-aerea.jpg";
import textureBg from "@/assets/texture-bg.jpg";
import logoMeta from "@/assets/logo-meta.png";
import logoMetaEarth from "@/assets/logo-meta-earth.png";
import plantaTipo from "@/assets/planta-tipo.png";
import plantaOitavo from "@/assets/planta-oitavo.png";

const heroBuilding = heroBuildingAsset.url;
const lifestyleImage = lifestyleAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const plantas = [
  {
    img: plantaTipo,
    titulo: "Pavimento Tipo",
    sub: "1º ao 7º andar · apartamentos de 2 quartos",
  },
  {
    img: plantaOitavo,
    titulo: "8º Pavimento",
    sub: "unidades com terraço descoberto e churrasqueira",
  },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [plantaAtiva, setPlantaAtiva] = useState(0);
  const [lightboxAberto, setLightboxAberto] = useState(false);
  const planta = plantas[plantaAtiva];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-sand font-sans text-brand-earth selection:bg-brand-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-10">
        <a href="#" aria-label="META Construtora — início">
          <img
            src={logoMetaEarth}
            alt="META Construtora"
            className="h-11 w-auto md:h-12"
          />
        </a>
        <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
          <a href="#conceito" className="transition-colors hover:text-brand-gold">
            O Conceito
          </a>
          <a href="#lifestyle" className="transition-colors hover:text-brand-gold">
            Lifestyle
          </a>
          <a href="#plantas" className="transition-colors hover:text-brand-gold">
            Plantas
          </a>
          <a href="#localizacao" className="transition-colors hover:text-brand-gold">
            Localização
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute right-0 top-0 z-0 h-full w-full [mask-image:linear-gradient(to_right,transparent_0%,black_55%)] md:w-2/3 md:[mask-image:linear-gradient(to_right,transparent_0%,black_45%)]">
          <img
            src={heroBuilding}
            alt="Fachada do empreendimento Verdantis ao entardecer, com jardins verticais integrados à arquitetura"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-sand/50 via-transparent to-transparent" />
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

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-brand-earth/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-earth/60">
              <span>2 e 3 quartos</span>
              <span className="text-brand-gold">·</span>
              <span>[58–82] m²</span>
              <span className="text-brand-gold">·</span>
              <span>Samambaia · DF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="border-y border-brand-earth/10 bg-brand-sand py-14">
        <div className="container mx-auto grid grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
          {[
            { value: "[2]", label: "Torres" },
            { value: "[120]", label: "Unidades" },
            { value: "[20+]", label: "Itens de lazer" },
            { value: "[82] m²", label: "Maior planta" },
          ].map((item) => (
            <div key={item.label} className="border-l border-brand-gold/50 pl-5">
              <div className="font-display text-4xl leading-none md:text-5xl">
                {item.value}
              </div>
              <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-earth/60">
                {item.label}
              </div>
            </div>
          ))}
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
                  src={fachadaAerea}
                  alt="Vista aérea do prédio, cercado por áreas verdes e jardins"
                  width={1220}
                  height={1525}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-sm object-cover shadow-2xl"
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
        style={{ backgroundImage: `url(${lifestyleImage})` }}
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

      {/* Floor plans */}
      <section id="plantas" className="bg-brand-earth py-24 text-brand-sand md:py-36">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                03 — Plantas
              </span>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                Espaços que se adaptam à sua vida.
              </h2>
            </div>
            <a
              href="#register"
              className="rounded-full border border-brand-sand/30 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all hover:bg-brand-gold hover:border-brand-gold hover:text-brand-earth"
            >
              Receber plantas completas
            </a>
          </div>
          <div className="mb-10 flex flex-wrap gap-3">
            {plantas.map((p, i) => (
              <button
                key={p.titulo}
                type="button"
                onClick={() => setPlantaAtiva(i)}
                className={`rounded-full px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all ${
                  i === plantaAtiva
                    ? "bg-brand-gold text-brand-earth"
                    : "border border-brand-sand/30 text-brand-sand/70 hover:border-brand-gold hover:text-brand-gold"
                }`}
              >
                {p.titulo}
              </button>
            ))}
          </div>

          <figure>
            <button
              type="button"
              onClick={() => setLightboxAberto(true)}
              className="group block w-full cursor-zoom-in overflow-hidden rounded-sm bg-white shadow-2xl"
              aria-label={`Ampliar planta — ${planta.titulo}`}
            >
              <img
                src={planta.img}
                alt={`Planta baixa — ${planta.titulo}`}
                className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="mt-6 flex flex-wrap items-end justify-between gap-4 border-l-2 border-brand-gold pl-5">
              <div>
                <h3 className="font-display text-2xl">{planta.titulo}</h3>
                <p className="mt-1 text-sm text-brand-sand/60">{planta.sub}</p>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Clique na planta para ampliar
              </span>
            </figcaption>
          </figure>

          {lightboxAberto && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Planta ampliada — ${planta.titulo}`}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-earth/95 p-4 backdrop-blur-sm md:p-10"
              onClick={() => setLightboxAberto(false)}
            >
              <img
                src={planta.img}
                alt={`Planta baixa ampliada — ${planta.titulo}`}
                className="max-h-full w-auto max-w-full rounded-sm shadow-2xl"
              />
              <button
                type="button"
                aria-label="Fechar"
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-sand/40 text-2xl text-brand-sand transition-colors hover:bg-brand-sand hover:text-brand-earth"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Location */}
      <section id="localizacao" className="py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div>
              <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                04 — Localização
              </span>
              <h2 className="mb-6 font-display text-4xl leading-tight md:text-6xl">
                No centro da sua rotina.
              </h2>
              <p className="mb-10 max-w-md text-lg leading-relaxed text-brand-earth/70">
                QN 327, Conjunto A, nº 02 — Samambaia/DF
              </p>
              <ul className="divide-y divide-brand-earth/10 border-y border-brand-earth/10">
                {[
                  { local: "[Escola / Colégio]", distancia: "[000 m]" },
                  { local: "[Supermercado]", distancia: "[000 m]" },
                  { local: "[Parque / Praça]", distancia: "[000 m]" },
                  { local: "[Shopping / Centro]", distancia: "[0 km]" },
                  { local: "[Acesso principal]", distancia: "[0 km]" },
                ].map((p) => (
                  <li
                    key={p.local}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <span className="text-sm font-semibold">{p.local}</span>
                    <span className="font-display text-lg italic text-brand-gold">
                      {p.distancia}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-brand-earth/15 shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=QN+327+Conjunto+A+2+Samambaia+DF&z=16&output=embed"
                title="Mapa — QN 327, Conjunto A, nº 02, Samambaia/DF"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
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
                    Nome e sobrenome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome e sobrenome"
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
          <img
            src={logoMeta}
            alt="META Construtora"
            className="h-10 w-auto opacity-80"
          />
          <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">
            © 2026 META Incorporadora · Imagens meramente ilustrativas
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

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/[5500000000000]?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Verdantis."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-[34px] w-[34px] fill-white" aria-hidden>
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.5 2.5.7 3.8.7 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.2c-1.2 0-2.4-.2-3.5-.7l-.5-.2-4.9.9 1-4.7-.3-.5c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.5 10.4-9.9 10.4zm5.4-7.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
        </svg>
      </a>
    </div>
  );
}
