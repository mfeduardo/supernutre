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
              MATRIZ
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <span className="text-primary-foreground/80">Razão Social:</span>{" "}
                Supernutre Comercial Ltda. - ME
              </li>
              <li>
                <span className="text-primary-foreground/80">CNPJ:</span>{" "}
                12.982.763/0001-64
              </li>
              <li>
                <span className="text-primary-foreground/80">Sede:</span>{" "}
                São Francisco do Conde - BA
              </li>
              <li>
                <span className="text-primary-foreground/80">Endereço:</span>{" "}
                Rua Mário Augusto Teixeira de Freitas, 02-B - Centro - CEP 43900-000
              </li>
            </ul>
          </div>

          {/* Filial */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              FILIAL
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <span className="text-primary-foreground/80">Razão Social:</span>{" "}
                Supernutre Comercial Eireli
              </li>
              <li>
                <span className="text-primary-foreground/80">CNPJ:</span>{" "}
                12.982.763/0002-45
              </li>
              <li>
                <span className="text-primary-foreground/80">Filial:</span>{" "}
                Salvador - BA
              </li>
              <li>
                <span className="text-primary-foreground/80">Endereço:</span>{" "}
                Rua Lamarão, 334 - Pernambués - CEP 41100-086
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Supernutre Comercial Ltda. - ME. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
