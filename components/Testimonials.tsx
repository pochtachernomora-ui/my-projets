import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Сергей П.",
    service: "Замена проводки в 2-к квартире",
    text: "Отличный мастер! Сделал полную замену проводки в хрущевке за 4 дня. Штробил с пылесосом, грязи почти не было. Ценник адекватный, лишнего не накручивал. Рекомендую всем, кто ищет качество.",
    date: "12.10.2023"
  },
  {
    id: 2,
    name: "Елена В.",
    service: "Установка люстр и розеток",
    text: "Нужно было повесить сложную люстру и перенести розетки на кухне. Все сделано аккуратно и быстро. Очень вежливый специалист, приехал вовремя, весь мусор за собой убрал. Спасибо!",
    date: "05.11.2023"
  },
  {
    id: 3,
    name: "Михаил К.",
    service: "Сборка электрощита",
    text: "Перебирал щиток в частном доме. Сделал все грамотно, подписал каждый автомат, объяснил, как пользоваться. Теперь все понятно и безопасно. Профессионал своего дела.",
    date: "20.12.2023"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Отзывы</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
            Что говорят клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div 
              key={review.id} 
              className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow"
            >
              <div className="absolute top-6 right-8 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>

              <p className="text-slate-600 mb-6 relative z-10 italic leading-relaxed">
                "{review.text}"
              </p>

              <div className="mt-auto border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-primary font-medium mt-1">{review.service}</p>
                <p className="text-xs text-slate-400 mt-2">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;