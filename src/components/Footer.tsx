import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 tracking-wide">
              Pollyana Basic Chic
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Moda feminina com estilo, qualidade e preços acessiveis. Vista-se com elegancia todos os dias.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4 text-base uppercase tracking-wider text-white/90">Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors duration-200">
                  Catalogo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Politica de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Politica de Trocas
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-base uppercase tracking-wider text-white/90">Contato</h4>
            <div className="flex flex-col items-center md:items-end gap-4">
              <a
                href="https://instagram.com/pollyana.bc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm">@pollyana.bc</span>
              </a>
              <a
                href="https://wa.me/5531983921200"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm">(31) 9 8392-1200</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col items-center gap-3">
            <p className="text-white/50 text-sm">
              {currentYear} Pollyana Basic Chic. Todos os direitos reservados.
            </p>
            <p className="text-white/40 text-xs">
              Desenvolvido por{' '}
              <a
                href="https://instagram.com/davialeixo_nogueira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-2"
              >
                Davi Aleixo
              </a>
              {' | '}
              <a
                href="https://wa.me/5531982607426"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-2"
              >
                31 9 8260-7426
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}