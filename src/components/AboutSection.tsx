import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Nossa Missão",
    description:
      "Oferecer as pessoas uma alimentação personalizada e saudável, zelando pela qualidade e a segurança de nossas refeições, tornando-as acessíveis e proporcionando bem-estar através de uma alimentação adequada nos mais altos padrões de qualidade e assim garantindo a excelência em nosso serviço prestado.",
  },
  {
    icon: Eye,
    title: "Nossa Visão",
    description:
      "Ser uma empresa referência no fornecimento de alimentação coletiva, reconhecida como a melhor opção do mercado e zelando pela qualidade dos produtos, relacionamento e no atendimento.",
  },
  {
    icon: Heart,
    title: "Nossos Valores",
    description:
      "Ética; Segurança de alimentos; Segurança no trabalho; Excelência na qualidade; Simplicidade; Valorização pessoal; Transparência; Compromisso; Responsabilidade social e com meio ambiente.",
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="quem-somos" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Main text */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Quem Somos
          </span>
          <h2 className="heading-section mt-3 text-foreground">
            {"\n"}
          </h2>
          <p className="text-body-lg mt-6">
            A Super Nutre foi fundada em 2011 por Erick Machado Filgueiras, com
            o objetivo de fornecer refeições coletivas. Nossa empresa se dedica
            em promover saúde a pessoas, famílias e instituições através da
            oferta de uma alimentação saudável e de qualidade. Assumindo esse
            compromisso trabalhamos em parceria com escolas, hospitais, órgãos
            governamentais para garantir que as necessidades alimentares das
            comunidades sejam atendidas de forma eficiente e responsável. Nosso
            foco é contribuir para o bem-estar de todos que necessitam de uma
            alimentação adequada.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = pillar.icon;

  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl bg-background border border-border hover:border-primary/20 transition-all duration-500 text-center ${
        isVisible
          ? `animate-fade-up-delay-${(index % 3) + 1}`
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {pillar.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {pillar.description}
      </p>
    </div>
  );
}
