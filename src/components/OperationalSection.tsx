import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Warehouse, Truck, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Warehouse,
    title: "Depósitos Próprios",
    description: "Depósitos fechados para armazenamento e comercialização de mercadorias em larga escala.",
  },
  {
    icon: Truck,
    title: "Frota Dedicada",
    description: "Logística própria com veículos refrigerados para garantir a qualidade dos alimentos.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Total",
    description: "Operação em conformidade com as normas da ANVISA e regulamentações de licitações públicas.",
  },
  {
    icon: BarChart3,
    title: "Escala Nacional",
    description: "Capacidade de atender contratos de grande volume com eficiência e pontualidade.",
  },
];

export function OperationalSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="logistica" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Infraestrutura
            </span>
            <h2 className="heading-section mt-3 text-foreground">
              Capacidade Operacional
            </h2>
            <p className="text-body-lg mt-4">
              Operamos com depósitos fechados para armazenamento próprio e
              comercialização de mercadorias em larga escala, garantindo
              abastecimento contínuo e seguro para nossos clientes.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`p-6 rounded-xl bg-secondary border border-border hover:border-primary/20 transition-all duration-500 ${
        isVisible ? `animate-fade-up-delay-${(index % 3) + 1}` : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
