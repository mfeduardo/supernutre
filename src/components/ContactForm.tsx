import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Mensagem enviada!",
        description: "Retornaremos o seu contato em breve.",
      });
    }, 1000);
  };

  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div
            ref={ref}
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Fale conosco
            </span>
            <h2 className="heading-section mt-3 text-foreground">
              Entre em Contato
            </h2>
            <p className="text-body-lg mt-4">
              Preencha o formulário abaixo e nossa equipe comercial entrará em
              contato em até 24 horas úteis.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 animate-fade-up">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Mensagem Enviada!
              </h3>
              <p className="text-muted-foreground">
                Nossa equipe entrará em contato em breve.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border transition-all duration-700 ${
                isVisible ? "animate-fade-up-delay-1" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-2">
                <Label htmlFor="empresa">Nome da Empresa</Label>
                <Input
                  id="empresa"
                  placeholder="Ex: Hospital Municipal de São Paulo"
                  required
                  maxLength={200}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="setor">Setor</Label>
                <Select required>
                  <SelectTrigger id="setor" className="h-12">
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="publico">Público</SelectItem>
                    <SelectItem value="privado">Privado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail de contato</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contato@empresa.com.br"
                  required
                  maxLength={255}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Descreva sua necessidade de fornecimento..."
                  required
                  maxLength={2000}
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-base h-12"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
