import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChefHat,
  Shirt,
  Bed,
  Briefcase,
  Tv,
  WashingMachine,
  Bath,
  GalleryVerticalEnd,
  Sparkles,
  MessageCircle,
  MapPin,
  Star,
  ShieldCheck,
  Ruler,
  Gem,
  Package,
  Wrench,
  Clock,
  HeartHandshake,
  Menu,
  X,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

import logo from "@/assets/vetta-logo.png";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import projCloset from "@/assets/project-closet.jpg";
import projBedroom from "@/assets/project-bedroom.jpg";
import projOffice from "@/assets/project-office.jpg";
import projTv from "@/assets/project-tv.jpg";
import projLaundry from "@/assets/project-laundry.jpg";
import projBathroom from "@/assets/project-bathroom.jpg";
import projKitchen2 from "@/assets/project-kitchen2.jpg";

const WHATSAPP_URL = "https://wa.me/5547988271864";
const WHATSAPP_MSG =
  "?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+de+m%C3%B3veis+planejados.";
const WHATSAPP = `${WHATSAPP_URL}${WHATSAPP_MSG}`;

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
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

const services = [
  { icon: ChefHat, title: "Cozinhas Planejadas", desc: "Cozinhas sob medida que unem funcionalidade, organização e um acabamento impecável." },
  { icon: Shirt, title: "Closets", desc: "Closets planejados com iluminação embutida e divisórias inteligentes para o seu dia a dia." },
  { icon: Bed, title: "Dormitórios", desc: "Quartos aconchegantes com guarda-roupas, cabeceiras e móveis totalmente integrados." },
  { icon: Briefcase, title: "Home Office", desc: "Ambientes de trabalho ergonômicos, discretos e sofisticados feitos para o seu ritmo." },
  { icon: Tv, title: "Painéis para TV", desc: "Painéis de TV com ripados, iluminação indireta e integração com a sala de estar." },
  { icon: WashingMachine, title: "Lavanderias", desc: "Lavanderias planejadas que otimizam cada centímetro sem abrir mão da elegância." },
  { icon: Bath, title: "Banheiros", desc: "Gabinetes e armários sob medida em acabamentos resistentes à umidade." },
  { icon: GalleryVerticalEnd, title: "Cristaleiras", desc: "Peças exclusivas para valorizar louças, adegas e objetos de coleção." },
  { icon: Sparkles, title: "Móveis Sob Medida", desc: "Projetos exclusivos para qualquer ambiente da sua casa ou empresa." },
];

const differentials = [
  { icon: HeartHandshake, title: "Atendimento personalizado" },
  { icon: Ruler, title: "Projeto totalmente sob medida" },
  { icon: Gem, title: "Acabamento de alto padrão" },
  { icon: Package, title: "Materiais selecionados" },
  { icon: Wrench, title: "Instalação profissional" },
  { icon: ShieldCheck, title: "Garantia de 4 anos" },
  { icon: Clock, title: "Cumprimento de prazos" },
  { icon: Sparkles, title: "Pós-venda dedicado" },
];

const process = [
  { n: "01", title: "Contato pelo WhatsApp", desc: "Fale conosco e conte sobre o ambiente que deseja transformar." },
  { n: "02", title: "Conversa inicial", desc: "Entendemos suas necessidades, estilo e expectativas." },
  { n: "03", title: "Visita técnica e medidas", desc: "Vamos até você para medir com precisão cada detalhe." },
  { n: "04", title: "Orçamento", desc: "Enviamos projeto e proposta transparente, sem surpresas." },
  { n: "05", title: "Produção", desc: "Fabricação com materiais selecionados e acabamento premium." },
  { n: "06", title: "Instalação", desc: "Equipe própria realiza a montagem com máximo cuidado." },
  { n: "07", title: "Pós-venda", desc: "Acompanhamos você mesmo depois da entrega." },
];

const projects = [
  { img: heroKitchen, title: "Cozinha verde oliva", cat: "Cozinhas" },
  { img: projCloset, title: "Closet iluminado", cat: "Closets" },
  { img: projTv, title: "Painel de TV ripado", cat: "Painéis" },
  { img: projBedroom, title: "Dormitório integrado", cat: "Dormitórios" },
  { img: projOffice, title: "Home office sob medida", cat: "Home Office" },
  { img: projBathroom, title: "Banheiro sofisticado", cat: "Banheiros" },
  { img: projLaundry, title: "Lavanderia planejada", cat: "Lavanderias" },
  { img: projKitchen2, title: "Cozinha aberta clara", cat: "Cozinhas" },
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
        <About />
        <Services />
        <Differentials />
        <Process />
        <Projects />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

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
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#projetos", label: "Projetos" },
    { href: "#processo", label: "Processo" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "color-mix(in oklab, var(--graphite) 92%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid color-mix(in oklab, var(--beige) 15%, transparent)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Vetta Design Marcenaria" width={120} height={40} className="h-10 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors"
              style={{ color: "var(--cream)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden lg:inline-flex btn-whatsapp py-3 px-5 text-sm">
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
          style={{ backgroundColor: "color-mix(in oklab, var(--graphite) 96%, transparent)" }}
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
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-whatsapp mt-2">
              <MessageCircle className="w-4 h-4" /> Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroKitchen}
        alt="Cozinha planejada Vetta Design em verde oliva com ilha de mármore em Joinville"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--graphite) 55%, transparent) 0%, color-mix(in oklab, var(--graphite) 30%, transparent) 40%, color-mix(in oklab, var(--graphite) 88%, transparent) 100%)",
        }}
      />
      <div className="relative container-x pb-16 md:pb-24 pt-32 md:pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--beige) 90%, transparent)" }}>
            Marcenaria de alto padrão · Joinville / SC
          </span>
          <h1
            className="mt-5 text-4xl sm:text-5xl md:text-7xl font-normal leading-[1.05]"
            style={{ color: "var(--cream)" }}
          >
            Móveis Planejados Sob Medida para Transformar seu Ambiente
          </h1>
          <p
            className="mt-6 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}
          >
            Criamos móveis planejados que unem design, funcionalidade e acabamento de alto padrão para valorizar sua casa e tornar cada ambiente único.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> Solicitar orçamento pelo WhatsApp
            </a>
            <a href="#projetos" className="btn-ghost">
              Conheça nossos projetos <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
            style={{ color: "color-mix(in oklab, var(--cream) 88%, transparent)" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="5 estrelas no Google">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F5B301" }} />
                ))}
              </div>
              <span className="font-medium">5,0 no Google</span>
              <span style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}>· 11 avaliações</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Atendimento em Joinville e região
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  bg,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`} style={bg ? { background: bg } : undefined}>
      <div className="container-x">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mb-12 md:mb-16"
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal">{title}</h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre a Vetta Design"
      title="Uma marcenaria que transforma ideias em ambientes exclusivos."
    >
      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <div className="md:col-span-3 space-y-5 text-[15px] md:text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          <p>
            A Vetta Design nasceu da paixão pela marcenaria e do propósito de transformar ambientes em espaços únicos, funcionais e feitos para durar. Acreditamos que cada projeto deve refletir o estilo, as necessidades e a personalidade de quem vai viver aquele ambiente.
          </p>
          <p>
            Por isso, desenvolvemos <strong style={{ color: "var(--graphite)" }}>móveis planejados sob medida</strong> com atenção a cada detalhe, unindo design, funcionalidade e acabamento de alto padrão. Desde o primeiro atendimento até a instalação, prezamos pela transparência, pelo compromisso com os prazos e por um relacionamento próximo com cada cliente.
          </p>
          <p>
            Mais do que fabricar móveis, realizamos projetos que valorizam os ambientes e proporcionam conforto, organização e satisfação para toda a família. Na Vetta Design, transformar ideias em realidade é o que nos inspira todos os dias.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            { n: "+50", l: "Projetos entregues" },
            { n: "4 anos", l: "Garantia total" },
            { n: "5,0★", l: "Nota no Google" },
            { n: "100%", l: "Sob medida" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl p-6 flex flex-col justify-between min-h-32"
              style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
            >
              <div className="text-3xl md:text-4xl font-display" style={{ color: "var(--olive-deep)", fontFamily: "var(--font-display)" }}>
                {s.n}
              </div>
              <div className="text-xs uppercase tracking-widest mt-3" style={{ color: "var(--muted-foreground)" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="Ambientes projetados com propósito e requinte"
      bg="linear-gradient(180deg, var(--cream) 0%, var(--background) 100%)"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card-elegant group flex flex-col"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ background: "color-mix(in oklab, var(--olive) 15%, transparent)", color: "var(--olive-deep)" }}
            >
              <s.icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--muted-foreground)" }}>
              {s.desc}
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-all"
              style={{ color: "var(--olive-deep)" }}
            >
              Saiba mais
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Differentials() {
  return (
    <section
      className="py-20 md:py-32"
      style={{ background: "var(--graphite)", color: "var(--cream)" }}
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--beige) 90%, transparent)" }}>
            Diferenciais
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] font-normal" style={{ color: "var(--cream)" }}>
            Por que escolher a Vetta Design
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="p-6 rounded-2xl transition-colors"
              style={{
                background: "color-mix(in oklab, var(--cream) 4%, transparent)",
                border: "1px solid color-mix(in oklab, var(--cream) 10%, transparent)",
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                style={{ background: "color-mix(in oklab, var(--olive) 30%, transparent)", color: "var(--cream)" }}
              >
                <d.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg" style={{ color: "var(--cream)" }}>{d.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <Section id="processo" eyebrow="Como trabalhamos" title="Um processo cuidadoso, do primeiro contato à entrega">
      <div className="relative">
        <div
          className="hidden md:block absolute left-0 right-0 top-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
        />
        <ol className="grid gap-8 md:grid-cols-4 lg:grid-cols-7">
          {process.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              <div
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-display text-lg"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--olive)",
                  color: "var(--olive-deep)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {p.n}
              </div>
              <h3 className="mt-4 text-base">{p.title}</h3>
              <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {p.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<string>("Todos");
  const cats = ["Todos", "Cozinhas", "Closets", "Dormitórios", "Home Office", "Lavanderias", "Painéis", "Banheiros"];
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.cat === filter);
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Ambientes que contam histórias"
      bg="var(--cream)"
    >
      <div className="flex flex-wrap gap-2 mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className="px-4 py-2 rounded-full text-sm transition-all"
            style={{
              background: filter === c ? "var(--graphite)" : "transparent",
              color: filter === c ? "var(--cream)" : "var(--graphite)",
              border: `1px solid ${filter === c ? "var(--graphite)" : "var(--border)"}`,
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filtered.map((p, i) => (
          <motion.figure
            key={p.title + i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
              i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <img
              src={p.img}
              alt={`${p.title} - ${p.cat} sob medida Vetta Design Joinville`}
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--graphite) 90%, transparent) 100%)",
              }}
            >
              <figcaption style={{ color: "var(--cream)" }}>
                <div className="text-xs uppercase tracking-widest opacity-80">{p.cat}</div>
                <div className="text-lg mt-1 font-display" style={{ fontFamily: "var(--font-display)" }}>
                  {p.title}
                </div>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="depoimentos" eyebrow="Depoimentos" title="O que dizem nossos clientes">
      <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10">
        <div
          className="md:col-span-1 rounded-2xl p-8 flex flex-col justify-center"
          style={{ background: "var(--graphite)", color: "var(--cream)" }}
        >
          <div className="flex" aria-label="5 estrelas">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#F5B301" }} />
            ))}
          </div>
          <div className="text-6xl md:text-7xl mt-4 font-display" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
            5,0
          </div>
          <div className="text-sm mt-2 uppercase tracking-widest" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
            11 avaliações no Google
          </div>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
            Todas as avaliações são verificadas e disponíveis no perfil Google da Vetta Design.
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
              className="rounded-2xl p-6 flex flex-col"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="flex mb-3">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#F5B301" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--foreground)" }}>
                “{t.text}”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                — {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
      <blockquote
        className="rounded-2xl p-6 md:p-8"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <div className="flex mb-3">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#F5B301" }} />
          ))}
        </div>
        <p className="text-sm md:text-base leading-relaxed">“{testimonials[4].text}”</p>
        <footer className="mt-4 text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
          — {testimonials[4].name}
        </footer>
      </blockquote>
    </Section>
  );
}

function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: "var(--olive-deep)" }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 20%, var(--olive) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--terracotta) 0%, transparent 50%)",
        }}
      />
      <div className="container-x relative text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
            Vamos começar?
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-normal leading-[1.1]" style={{ color: "var(--cream)" }}>
            Vamos transformar seu ambiente?
          </h2>
          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--cream) 88%, transparent)" }}
          >
            Solicite um orçamento sem compromisso e descubra como podemos criar móveis planejados exclusivos para sua casa.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-whatsapp text-base">
              <MessageCircle className="w-5 h-5" /> Solicitar orçamento pelo WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="Perguntas frequentes" title="Tudo o que você precisa saber">
      <div className="max-w-3xl">
        {faqs.map((f, i) => (
          <div
            key={f.q}
            className="border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left py-5 md:py-6 gap-4"
            >
              <h3 className="text-base md:text-lg font-normal" style={{ fontFamily: "var(--font-sans)", letterSpacing: 0 }}>
                {f.q}
              </h3>
              <span
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "var(--muted)", color: "var(--graphite)" }}
              >
                {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {open === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="pb-6 pr-12 text-sm md:text-base leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                {f.a}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--graphite)", color: "var(--cream)" }} className="pt-20 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 pb-14">
          <div className="md:col-span-1">
            <img src={logo} alt="Vetta Design" width={140} height={48} className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
              Marcenaria de alto padrão em Joinville. Móveis planejados sob medida com design, funcionalidade e acabamento premium.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--beige)", fontFamily: "var(--font-sans)" }}>
              Contato
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Joinville e região<br />Santa Catarina · Brasil</span>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline">
                  <MessageCircle className="w-4 h-4" /> (47) 98827-1864
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vet.tadesign"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 hover:underline"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> @vet.tadesign
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--beige)", fontFamily: "var(--font-sans)" }}>
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
              <li><a href="#sobre" className="hover:underline">Sobre</a></li>
              <li><a href="#servicos" className="hover:underline">Serviços</a></li>
              <li><a href="#projetos" className="hover:underline">Projetos</a></li>
              <li><a href="#processo" className="hover:underline">Processo</a></li>
              <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--beige)", fontFamily: "var(--font-sans)" }}>
              Localização
            </h4>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid color-mix(in oklab, var(--cream) 15%, transparent)" }}>
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
          style={{ borderTop: "1px solid color-mix(in oklab, var(--cream) 12%, transparent)", color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
        >
          <p>© {new Date().getFullYear()} Vetta Design Marcenaria · Todos os direitos reservados</p>
          <p>Móveis planejados de alto padrão · Joinville / SC</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
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
