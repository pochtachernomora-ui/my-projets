import React from 'react';
import { Lightbulb, Home, Wrench, AlertTriangle, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Электромонтаж под ключ",
    description: "Полная замена проводки в квартирах, домах и офисах. Штробление стен, укладка кабеля, сборка щита.",
    priceStart: "от 6 000 грн",
    icon: Home
  },
  {
    id: 2,
    title: "Установка и ремонт",
    description: "Монтаж розеток, выключателей, люстр, бра, подключение бытовой техники (плиты, духовки).",
    priceStart: "от 250 грн",
    icon: Wrench
  },
  {
    id: 3,
    title: "Аварийный выезд",
    description: "Поиск и устранение неисправностей, коротких замыканий. Восстановление электроснабжения 24/7.",
    priceStart: "от 600 грн",
    icon: AlertTriangle
  },
  {
    id: 4,
    title: "Сборка электрощитов",
    description: "Проектирование и сборка распределительных щитов. Установка автоматов, УЗО, реле напряжения.",
    priceStart: "от 1 500 грн",
    icon: ShieldCheck
  },
  {
    id: 5,
    title: "Светодиодное освещение",
    description: "Монтаж LED-лент, трековых светильников, подсветки кухни и рабочих зон.",
    priceStart: "от 400 грн/м",
    icon: Lightbulb
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Что я делаю</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
            Популярные услуги
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Решаю любые задачи, связанные с электричеством. Качественно, аккуратно и в срок.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="bg-white p-3 rounded-lg w-fit shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-auto">
                <span className="text-sm font-medium text-slate-500">Стоимость</span>
                <span className="text-lg font-bold text-secondary">{service.priceStart}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;