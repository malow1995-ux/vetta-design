import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  MapPin,
  Star,
  ShieldCheck,
  Ruler,
  Gem,
  Wrench,
  HeartHandshake,
  Factory,
  Menu,
  X,
  Plus,
  Minus,
  ArrowRight,
  CheckCircle2,
  Award,
  MessageSquare,
  PenTool,
  Hammer,
  Truck,
} from "lucide-react";

import logoAsset from "@/assets/vetta-logo.png.asset.json";
const logo = logoAsset.url;
import heroKitchen from "@/assets/hero-kitchen.jpg?w=640;1024;1600&format=avif;webp;jpg&quality=62&as=picture";
import heroKitchenMobilePreload from "@/assets/hero-kitchen.jpg?w=640&format=avif&quality=60&url";
import heroKitchenDesktopPreload from "@/assets/hero-kitchen.jpg?w=1600&format=avif&quality=62&url";
import projCloset from "@/assets/project-closet.jpg?w=800&format=avif;webp;jpg&as=picture";
import projBedroom from "@/assets/project-bedroom.jpg?w=800&format=avif;webp;jpg&as=picture";
import projOffice from "@/assets/project-office.jpg?w=800&format=avif;webp;jpg&as=picture";
import projTv from "@/assets/project-tv.jpg?w=800&format=avif;webp;jpg&as=picture";
import projLaundry from "@/assets/project-laundry.jpg?w=800&format=avif;webp;jpg&as=picture";
import projBathroom from "@/assets/project-bathroom.jpg?w=800&format=avif;webp;jpg&as=picture";
import projKitchen2 from "@/assets/project-kitchen2.jpg?w=800&format=avif;webp;jpg&as=picture";
import projKitchen2Hero from "@/assets/project-kitchen2.jpg?w=1200&format=avif;webp;jpg&as=picture";

type PictureData = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

function Picture({
  data,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
  sizes,
}: {
  data: PictureData;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
}) {
  return (
    <picture style={{ display: "contents" }}>
      {Object.entries(data.sources).map(([type, srcset]) => (
        <source key={type} type={`image/${type === "jpg" ? "jpeg" : type}`} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={data.img.src}
        width={data.img.w}
        height={data.img.h}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={className}
      />
    </picture>
  );
}

const WHATSAPP_PHONE = "5547988271864";
const WHATSAPP_TEXT =
  "Olá! Gostaria de solicitar um orçamento de móveis planejados na Vetta Design.";
const WHATSAPP = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroKitchenMobilePreload,
        type: "image/avif",
        fetchpriority: "high",
        media: "(max-width: 767px)",
      } as unknown as Record<string, string>,
      {
        rel: "preload",
        as: "image",
        href: heroKitchenDesktopPreload,
        type: "image/avif",
        fetchpriority: "high",
        media: "(min-width: 768px)",
      } as unknown as Record<string, string>,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://vettadesign.com.br/#business",
          name: "Vetta Design Marcenaria",
          image: "https://vettadesign.com.br/og-image.jpg",
          description:
            "Marcenaria de alto padrão em Joinville. Móveis planejados sob medida para cozinhas, closets, dormitórios, home office, painéis, lavanderias e banheiros.",
          telephone: "+55 47 98827-1864",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Joinville",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          areaServed: [
            { "@type": "City", name: "Joinville" },
            { "@type": "State", name: "Santa Catarina" },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "11",
          },
          sameAs: ["https://www.instagram.com/vet.tadesign"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vetta Design",
          url: "https://vettadesign.com.br",
          logo: "https://vettadesign.com.br/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55 47 98827-1864",
            contactType: "sales",
            areaServed: "BR",
            availableLanguage: "Portuguese",
          },
        }),
      },
    ],
  }),
});

const highlights = [
  { icon: Star, title: "Nota 5,0 no Google", desc: "Clientes satisfeitos com cada entrega." },
  { icon: ShieldCheck, title: "Garantia de 4 anos", desc: "Segurança e tranquilidade no seu investimento." },
  { icon: Ruler, title: "Móveis 100% sob medida", desc: "Projetos únicos, feitos para o seu espaço." },
  { icon: Award, title: "+50 projetos entregues", desc: "Experiência comprovada em alto padrão." },
];

const differentials = [
  { icon: PenTool, title: "Projeto totalmente personalizado", desc: "Cada detalhe pensado para o seu estilo de vida." },
  { icon: Factory, title: "Fabricação própria", desc: "Controle total da qualidade, do desenho à entrega." },
  { icon: Gem, title: "Acabamento de alto padrão", desc: "Materiais selecionados e detalhes impecáveis." },
  { icon: Wrench, title: "Instalação profissional", desc: "Equipe própria, cuidadosa e pontual." },
  { icon: HeartHandshake, title: "Atendimento personalizado", desc: "Relacionamento próximo do início ao pós-venda." },
  { icon: ShieldCheck, title: "Garantia de 4 anos", desc: "Compromisso que vai muito além da entrega." },
];

const process = [
  { icon: MessageSquare, n: "1", title: "Conversamos sobre sua ideia", desc: "Ouvimos você para entender estilo, necessidades e desejos." },
  { icon: PenTool, n: "2", title: "Desenvolvemos o projeto", desc: "Criamos um projeto exclusivo, com visualização em 3D." },
  { icon: Hammer, n: "3", title: "Fabricamos com alto padrão", desc: "Marcenaria própria, materiais premium e atenção a cada detalhe." },
  { icon: Truck, n: "4", title: "Instalamos com cuidado", desc: "Equipe treinada entrega tudo pronto, no prazo combinado." },
];

const environments = [
  { img: heroKitchen, title: "Cozinhas Planejadas", desc: "Funcionalidade e sofisticação em cada centímetro." },
  { img: projCloset, title: "Closets", desc: "Organização inteligente com iluminação embutida." },
  { img: projBedroom, title: "Dormitórios", desc: "Ambientes aconchegantes e integrados." },
  { img: projOffice, title: "Home Office", desc: "Espaço de trabalho ergonômico e elegante." },
  { img: projTv, title: "Painéis para TV", desc: "Ripados, iluminação indireta e integração perfeita." },
  { img: projLaundry, title: "Lavanderias", desc: "Cada centímetro otimizado com beleza." },
  { img: projBathroom, title: "Banheiros", desc: "Gabinetes sob medida em acabamentos premium." },
  { img: projKitchen2, title: "Cozinhas Abertas", desc: "Integração e luz para o coração da casa." },
];

const testimonials = [
  { name: "JM Empreendimentos", text: "Já é o terceiro projeto que concluímos. Sempre muito profissional, competente e entrega o combinado. Recomendo." },
  { name: "Cristiane Maria Muller", text: "Excelente profissional, móveis de ótima qualidade e acabamentos impecáveis, preço justo e entrega no prazo combinado. Super recomendo." },
  { name: "Sthefany Camile", text: "Sem dúvidas foi o melhor profissional que encontrei! Entregou um trabalho impecável e melhor do que o esperado, e o preço justíssimo!" },
  { name: "Sarahelen Espindula", text: "Móveis com qualidade e bom acabamento. Bom atendimento e preço justo! Adorei trabalhar com vocês, obrigado por todo suporte no projeto." },
  { name: "Jean Silva", text: "Atendimento e profissionalismo de qualidade, entrega na data certa e aquele capricho, muito bom, recomendo." },
];

const faqs = [
  { q: "Vocês atendem quais cidades?", a: "Atendemos Joinville e toda a região norte de Santa Catarina. Consulte outras localidades pelo WhatsApp." },
  { q: "Quanto tempo leva um projeto?", a: "O prazo médio de produção é de 30 a 60 dias após a aprovação do projeto, variando conforme o tamanho e a complexidade." },
  { q: "A instalação está inclusa?", a: "Sim. Todos os nossos projetos incluem instalação profissional realizada por equipe própria." },
  { q: "Posso solicitar orçamento pelo WhatsApp?", a: "Sim. Basta clicar em um dos botões do site e nos enviar uma mensagem — respondemos rapidamente." },
  { q: "Os móveis possuem garantia?", a: "Sim. Oferecemos 4 anos de garantia contra defeitos de fabricação, além de pós-venda dedicado." },
  { q: "Vocês fazem projetos personalizados?", a: "Sim. Cada projeto Vetta Design é 100% sob medida, criado especialmente para o seu ambiente e estilo de vida." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Environments />
        <MidCTA
          title="Gostou de algum ambiente?"
          desc="Solicite um orçamento personalizado para o seu projeto."
          button="Quero meu projeto"
          bg="graphite"
        />
        <Differentials />
        <MidCTA
          title="Vamos transformar seu ambiente em um espaço único?"
          desc="Fale com um especialista Vetta Design e comece hoje mesmo."
          button="Falar com um especialista"
          bg="beige"
        />
        <Process />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ============ NAV ============ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { href: "#ambientes", label: "Ambientes" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#processo", label: "Como funciona" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "rgb(59, 59, 59)",
        borderBottom: scrolled ? "1px solid color-mix(in oklab, var(--beige) 15%, transparent)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Vetta Design Marcenaria" width={716} height={485} className="h-20 md:h-28 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
              style={{ color: "var(--cream)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex btn-terracotta py-3 px-5 text-sm">
          <MessageCircle className="w-4 h-4" /> Orçamento
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-full"
          style={{ color: "var(--cream)" }}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div
          className="lg:hidden px-5 pb-6 pt-2"
          style={{ backgroundColor: "color-mix(in oklab, var(--graphite) 98%, transparent)" }}
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base py-2 border-b"
                style={{ color: "var(--cream)", borderColor: "color-mix(in oklab, var(--beige) 15%, transparent)" }}
              >
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-terracotta mt-2">
              <MessageCircle className="w-4 h-4" /> Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden" style={{ background: "var(--graphite)" }}>
      <Picture
        data={heroKitchen}
        alt="Cozinha planejada Vetta Design em verde oliva com ilha de mármore em Joinville"
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--graphite) 60%, transparent) 0%, color-mix(in oklab, var(--graphite) 40%, transparent) 40%, color-mix(in oklab, var(--graphite) 95%, transparent) 100%)",
        }}
      />
      <div className="relative container-x pb-16 md:pb-24 pt-32 md:pt-40 w-full">
        <div className="max-w-4xl animate-float-in">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm"
            style={{
              background: "color-mix(in oklab, var(--beige) 12%, transparent)",
              border: "1px solid color-mix(in oklab, var(--beige) 25%, transparent)",
              color: "var(--beige)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--terracotta)" }} />
            Móveis planejados de alto padrão em Joinville e região
          </span>
          <h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05]"
            style={{ color: "var(--beige)" }}
          >
            Cada detalhe da sua casa conta uma história.{" "}
            <em
              style={{
                color: "var(--terracotta)",
                fontWeight: 500,
                textShadow: "0 0 28px color-mix(in oklab, var(--terracotta) 45%, transparent), 0 0 56px color-mix(in oklab, var(--terracotta) 22%, transparent)",
              }}
            >
              Vamos criar a sua?
            </em>
          </h1>
          <p
            className="mt-6 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--beige) 88%, transparent)" }}
          >
            Móveis planejados sob medida para transformar sua casa com design, funcionalidade e acabamento de alto padrão.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-terracotta btn-lg group">
              <MessageCircle className="w-5 h-5" /> Solicitar orçamento pelo WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#ambientes" className="btn-ghost">
              Conheça nossos ambientes
            </a>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            style={{ color: "color-mix(in oklab, var(--beige) 90%, transparent)" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="5 estrelas no Google">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F5B301" }} />
                ))}
              </div>
              <span className="font-medium">Nota 5,0 no Google</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: "var(--olive)" }} /> Garantia de 4 anos
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="w-4 h-4" style={{ color: "var(--olive)" }} /> Projeto 100% personalizado
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Joinville e região
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ HIGHLIGHTS (2nd fold) ============ */
function Highlights() {
  return (
    <section className="section-beige">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="eyebrow">Vetta Design</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal" style={{ color: "var(--graphite)" }}>
            Ambientes planejados com <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>propósito</em>, beleza e funcionalidade.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="highlight-card"
            >
              <div className="highlight-icon">
                <h.icon className="w-6 h-6" strokeWidth={1.6} />
              </div>
              <h3 className="text-lg md:text-xl mt-5" style={{ color: "var(--graphite)" }}>{h.title}</h3>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "color-mix(in oklab, var(--graphite) 70%, transparent)" }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ ENVIRONMENTS ============ */
function Environments() {
  return (
    <section id="ambientes" className="section-graphite">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="eyebrow" style={{ color: "var(--terracotta)" }}>Ambientes</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal" style={{ color: "var(--beige)" }}>
            Cada ambiente, uma história única.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "color-mix(in oklab, var(--beige) 78%, transparent)" }}>
            Projetos exclusivos para cada canto da sua casa — desenvolvidos com material premium e acabamento impecável.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {environments.map((p, i) => (
            <motion.article
              key={p.title + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
              className="env-card group"
            >
              <div className="env-media">
                <Picture
                  data={p.img}
                  alt={`${p.title} sob medida Vetta Design Joinville`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="env-body">
                <h3 className="text-xl md:text-2xl" style={{ color: "var(--graphite)" }}>{p.title}</h3>
                <p className="text-sm mt-1.5" style={{ color: "color-mix(in oklab, var(--graphite) 65%, transparent)" }}>
                  {p.desc}
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="env-link mt-4"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ DIFFERENTIALS ============ */
function Differentials() {
  return (
    <section id="diferenciais" className="section-beige">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal" style={{ color: "var(--graphite)" }}>
            O que faz a Vetta Design ser <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>diferente</em>.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="diff-card"
            >
              <div className="diff-icon">
                <d.icon className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl" style={{ color: "var(--graphite)" }}>{d.title}</h3>
                <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "color-mix(in oklab, var(--graphite) 70%, transparent)" }}>
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESS ============ */
function Process() {
  return (
    <section id="processo" className="section-graphite">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="eyebrow" style={{ color: "var(--terracotta)" }}>Como funciona</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal" style={{ color: "var(--beige)" }}>
            Como transformamos seu projeto em realidade.
          </h2>
        </motion.div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="step-card"
            >
              <div className="step-num">{p.n}</div>
              <div className="step-icon"><p.icon className="w-5 h-5" strokeWidth={1.6} /></div>
              <h3 className="mt-5 text-lg md:text-xl" style={{ color: "var(--beige)" }}>{p.title}</h3>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "color-mix(in oklab, var(--beige) 72%, transparent)" }}>
                {p.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  return (
    <section id="depoimentos" className="section-beige">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal" style={{ color: "var(--graphite)" }}>
            O que dizem nossos clientes.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <div className="testimonial-hero">
            <div className="flex" aria-label="5 estrelas">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#F5B301" }} />
              ))}
            </div>
            <div className="text-6xl md:text-7xl mt-4" style={{ fontFamily: "var(--font-display)", color: "var(--beige)" }}>
              5,0
            </div>
            <div className="text-xs mt-2 uppercase tracking-widest" style={{ color: "color-mix(in oklab, var(--beige) 70%, transparent)" }}>
              11 avaliações verificadas no Google
            </div>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--beige) 82%, transparent)" }}>
              Clientes que confiaram na Vetta Design e viram suas casas se transformarem.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 md:gap-5">
            {testimonials.slice(0, 4).map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="testimonial-card"
              >
                <div className="flex mb-3">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#F5B301" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--graphite)" }}>
                  "{t.text}"
                </p>
                <footer className="mt-4 text-xs uppercase tracking-widest" style={{ color: "color-mix(in oklab, var(--graphite) 60%, transparent)" }}>
                  — {t.name}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
function About() {
  return (
    <section id="sobre" className="section-graphite">
      <div className="container-x">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-elegant">
              <Picture data={projKitchen2Hero} alt="Marcenaria Vetta Design em Joinville" sizes="(min-width: 768px) 40vw, 100vw" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-5 text-[15px] md:text-base leading-relaxed">
            <span className="eyebrow" style={{ color: "var(--terracotta)" }}>Sobre a Vetta Design</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-normal leading-[1.1]" style={{ color: "var(--beige)" }}>
              Uma marcenaria que transforma ideias em ambientes exclusivos.
            </h2>
            <p style={{ color: "color-mix(in oklab, var(--beige) 82%, transparent)" }}>
              A Vetta Design nasceu da paixão pela marcenaria e do propósito de transformar ambientes em espaços únicos,
              funcionais e feitos para durar. Cada projeto reflete o estilo, as necessidades e a personalidade de quem vai viver aquele ambiente.
            </p>
            <p style={{ color: "color-mix(in oklab, var(--beige) 82%, transparent)" }}>
              Desenvolvemos móveis planejados sob medida com atenção a cada detalhe, unindo design, funcionalidade e acabamento de alto padrão.
              Do primeiro atendimento à instalação, prezamos pela transparência e por um relacionamento próximo com cada cliente.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {["Fabricação própria", "Atendimento personalizado", "Materiais premium", "Garantia de 4 anos"].map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm" style={{ color: "var(--beige)" }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: "var(--olive)" }} /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ MID CTA ============ */
function MidCTA({
  title, desc, button, bg,
}: { title: string; desc: string; button: string; bg: "graphite" | "beige" }) {
  const dark = bg === "graphite";
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: dark ? "var(--graphite)" : "var(--beige)" }}
    >
      <div className="container-x">
        <div
          className="rounded-3xl px-6 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: dark ? "color-mix(in oklab, var(--beige) 6%, transparent)" : "color-mix(in oklab, var(--graphite) 5%, transparent)",
            border: `1px solid ${dark ? "color-mix(in oklab, var(--beige) 15%, transparent)" : "color-mix(in oklab, var(--graphite) 12%, transparent)"}`,
          }}
        >
          <div className="max-w-2xl">
            <h3
              className="text-2xl md:text-4xl font-normal leading-tight"
              style={{ color: dark ? "var(--beige)" : "var(--graphite)" }}
            >
              {title}
            </h3>
            <p
              className="mt-3 text-base md:text-lg"
              style={{ color: dark ? "color-mix(in oklab, var(--beige) 78%, transparent)" : "color-mix(in oklab, var(--graphite) 72%, transparent)" }}
            >
              {desc}
            </p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-terracotta btn-lg shrink-0">
            <MessageCircle className="w-5 h-5" /> {button}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-beige">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal" style={{ color: "var(--graphite)" }}>
            Tudo o que você precisa saber.
          </h2>
        </motion.div>
        <div className="max-w-3xl">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b" style={{ borderColor: "color-mix(in oklab, var(--graphite) 15%, transparent)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left py-5 md:py-6 gap-4 group"
              >
                <h3 className="text-base md:text-lg font-medium transition-colors group-hover:text-[color:var(--terracotta)]"
                    style={{ fontFamily: "var(--font-sans)", letterSpacing: 0, color: "var(--graphite)" }}>
                  {f.q}
                </h3>
                <span
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background: open === i ? "var(--terracotta)" : "color-mix(in oklab, var(--graphite) 8%, transparent)",
                    color: open === i ? "var(--beige)" : "var(--graphite)",
                  }}
                >
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {open === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pb-6 pr-12 text-sm md:text-base leading-relaxed"
                  style={{ color: "color-mix(in oklab, var(--graphite) 72%, transparent)" }}
                >
                  {f.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: "var(--graphite)" }}>
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, color-mix(in oklab, var(--olive) 60%, transparent) 0%, transparent 55%), radial-gradient(circle at 85% 80%, color-mix(in oklab, var(--terracotta) 55%, transparent) 0%, transparent 55%)",
        }}
      />
      <div className="container-x relative text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow" style={{ color: "var(--terracotta)" }}>Vamos começar?</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-normal leading-[1.1]" style={{ color: "var(--beige)" }}>
            Seu projeto começa com uma <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>boa conversa</em>.
          </h2>
          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--beige) 88%, transparent)" }}
          >
            Solicite seu orçamento e descubra como podemos transformar sua casa em um espaço único, elegante e feito sob medida para você.
          </p>
          <div className="mt-9 flex justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-terracotta btn-lg group">
              <MessageCircle className="w-5 h-5" /> Solicitar orçamento no WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer style={{ background: "var(--graphite)", color: "var(--beige)", borderTop: "1px solid color-mix(in oklab, var(--beige) 12%, transparent)" }} className="pt-20 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 pb-14">
          <div className="md:col-span-1">
            <img src={logo} alt="Vetta Design" width={140} height={48} className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--beige) 72%, transparent)" }}>
              Marcenaria de alto padrão em Joinville. Móveis planejados sob medida com design, funcionalidade e acabamento premium.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)", fontFamily: "var(--font-sans)" }}>
              Contato
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "color-mix(in oklab, var(--beige) 82%, transparent)" }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Joinville e região<br />Santa Catarina · Brasil</span>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color:var(--terracotta)] transition-colors">
                  <MessageCircle className="w-4 h-4" /> (47) 98827-1864
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vet.tadesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[color:var(--terracotta)] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> @vet.tadesign
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)", fontFamily: "var(--font-sans)" }}>
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "color-mix(in oklab, var(--beige) 82%, transparent)" }}>
              <li><a href="#ambientes" className="hover:text-[color:var(--terracotta)] transition-colors">Ambientes</a></li>
              <li><a href="#diferenciais" className="hover:text-[color:var(--terracotta)] transition-colors">Diferenciais</a></li>
              <li><a href="#processo" className="hover:text-[color:var(--terracotta)] transition-colors">Como funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-[color:var(--terracotta)] transition-colors">Depoimentos</a></li>
              <li><a href="#sobre" className="hover:text-[color:var(--terracotta)] transition-colors">Sobre</a></li>
              <li><a href="#faq" className="hover:text-[color:var(--terracotta)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)", fontFamily: "var(--font-sans)" }}>
              Localização
            </h4>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid color-mix(in oklab, var(--beige) 15%, transparent)" }}>
              <iframe
                title="Mapa Joinville - Vetta Design"
                src="https://www.google.com/maps?q=Joinville,SC&output=embed"
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid color-mix(in oklab, var(--beige) 12%, transparent)", color: "color-mix(in oklab, var(--beige) 60%, transparent)" }}
        >
          <p>© {new Date().getFullYear()} Vetta Design Marcenaria · Todos os direitos reservados</p>
          <p>Móveis planejados de alto padrão · Joinville / SC</p>
        </div>
      </div>
    </footer>
  );
}

/* ============ FLOATING WHATSAPP ============ */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
      style={{
        background: "var(--whatsapp)",
        color: "white",
        boxShadow: "0 20px 40px -12px color-mix(in oklab, var(--whatsapp) 60%, transparent)",
      }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
