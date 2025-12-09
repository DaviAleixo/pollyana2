import { Truck, RefreshCw, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Envio para todo o Brasil',
    description: 'Entrega rápida e segura',
  },
  {
    icon: RefreshCw,
    title: 'Troca fácil',
    description: 'Até 30 dias para trocar',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento via WhatsApp',
    description: 'Suporte rápido e personalizado',
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center text-center md:text-left gap-4"
              >
                <div className="p-3 bg-black rounded-full flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-base md:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}