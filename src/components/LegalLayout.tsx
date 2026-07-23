import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import logoAsset from "@/assets/vetta-logo.png.asset.json";

const logo = `https://vetta-design.lovable.app${logoAsset.url}`;

export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <div style={{ background: "var(--beige)", color: "var(--graphite)", minHeight: "100vh" }}>
      <header style={{ background: "rgb(59, 59, 59)" }} className="sticky top-0 z-40">
        <div className="container-x flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vetta Design" width={716} height={485} className="h-16 md:h-20 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition"
            style={{ color: "var(--beige)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="container-x py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--terracotta)" }}
          >
            Vetta Design
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--graphite)" }}
          >
            {title}
          </h1>
          <p className="text-sm mb-12" style={{ color: "color-mix(in oklab, var(--graphite) 65%, transparent)" }}>
            Última atualização: {updatedAt}
          </p>

          <article className="legal-prose">{children}</article>

          <div className="mt-16 pt-8" style={{ borderTop: "1px solid color-mix(in oklab, var(--graphite) 15%, transparent)" }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition"
              style={{ color: "var(--terracotta)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar à página inicial
            </Link>
          </div>
        </div>
      </main>

      <footer
        style={{
          background: "var(--graphite)",
          color: "color-mix(in oklab, var(--beige) 75%, transparent)",
        }}
        className="py-8"
      >
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Vetta Design. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://posicionafacil.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--terracotta)" }}
              className="hover:opacity-80 transition"
            >
              Posiciona Fácil
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
