import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import serviceAlimentacao from "@/assets/service-alimentacao.jpg";
import serviceLogistica from "@/assets/service-logistica.jpg";
import serviceCantina from "@/assets/service-cantina.jpg";

const services = [
  {
    title: "Alimentação Preparada",
    description:
      "Refeições industriais e serviços de buffet para eventos e recepções. Qualidade nutricional garantida com cardápios elaborados por profissionais.",
    image: serviceAlimentacao,
    alt: "Serviço de alimentação preparada e buffet",
  },
  {
    title: "Logística e Abastecimento",
    description:
      "Operação atacadista e varejista de hortifrúti, carnes, laticínios e panificação. Cadeia de suprimentos completa e rastreável.",
    image: serviceLogistica,
    alt: "Logística de alimentos e distribuição",
  },
  {
    title: "Gestão de Cantinas",
    description:
      "Serviços de alimentação privativos e administração de espaços alimentares. Gestão completa de refeitórios institucionais.",
    image: serviceCantina,
    alt: "Gestão de cantinas e refeitórios",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="section-padding bg-secondary">
      <div className="section-container">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            O que fazemos
          </span>
          <h2 className="heading-section mt-3 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-body-lg mt-4">
            Soluções completas em alimentação coletiva, da produção à
            distribuição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-xl overflow-hidden bg-card shadow-sm border border-border hover:shadow-lg transition-all duration-500 ${
        isVisible ? `animate-fade-up-delay-${index + 1}` : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {service.description}
        </p>
      </div>
    </div>
  );
}
