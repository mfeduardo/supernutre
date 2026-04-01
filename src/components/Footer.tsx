import logo from "@/assets/logo_supernutre.png";

export function Footer() {
  return (
    <footer id="institucional" className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Supernutre" className="h-10 w-auto mb-4 rounded-xl object-contain" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Especialistas no fornecimento de refeições coletivas e logística
              de alimentos para o setor público e privado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Serviços", href: "#servicos" },
                { label: "Logística", href: "#logistica" },
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Dados Institucionais
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <span className="text-primary-foreground/80">Razão Social:</span>{" "}
                Supernutre Comercial Eireli
              </li>
              <li>
                <span className="text-primary-foreground/80">CNPJ:</span>{" "}
                12.982.763/0001-64
              </li>
              <li>
                <span className="text-primary-foreground/80">NIRE:</span>{" "}
                29600213093
              </li>
              <li>
                <span className="text-primary-foreground/80">Sede:</span>{" "}
                São Francisco do Conde - BA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Supernutre Comercial Eireli. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
