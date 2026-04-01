import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozinha industrial profissional"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative section-container w-full pt-20">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-6">
              Fornecimento em larga escala
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 heading-display text-primary-foreground">
            Venda de Alimentos{" "}
            <span className="text-primary">em Atacado</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/80 max-w-xl">
            Especialistas no fornecimento de refeições para hospitais, escolas,
            universidades e órgãos públicos. Qualidade, segurança e pontualidade
            em cada entrega.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mt-10">
            <Button size="lg" asChild className="text-base px-8">
              <a href="#contato">
                Fale Conosco
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-300"
            >
              <a href="#servicos">Nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
