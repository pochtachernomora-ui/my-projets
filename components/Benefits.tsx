import React from 'react';
import { Award, Clock, FileCheck, ThumbsUp } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    id: 1,
    title: "Опыт более 10 лет",
    description: "Имею профильное образование и необходимые допуски. Знаю все нюансы работы в старом фонде и новостройках.",
    icon: Award
  },
  {
    id: 2,
    title: "Работаю чисто",
    description: "Использую штроборез с пылесосом. Минимум пыли и грязи после проведения работ. Убираю за собой.",
    icon: ThumbsUp
  },
  {
    id: 3,
    title: "Гарантия на работы",
    description: "Даю гарантию до 3 лет на все выполненные работы. Заключаем официальный договор.",
    icon: FileCheck
  },
  {
    id: 4,
    title: "Точно в срок",
    description: "Ценю ваше время. Приезжаю вовремя, не затягиваю ремонт. Соблюдаем оговоренные сроки.",
    icon: Clock
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Преимущества</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-6">
              Почему выбирают меня?
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Электрика — это не место для экспериментов. Доверьте работу профессионалу, который отвечает за результат своей репутацией. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <benefit.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop" 
              alt="Установка люстры и освещения" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;