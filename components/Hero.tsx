import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1920&auto=format&fit=crop" 
          alt="Электромонтажные работы"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Свет и безопасность <br className="hidden md:block" />
            <span className="text-primary">в вашем доме</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Профессиональные услуги электрика в с. Кучурган и Раздельнянском районе. 
            От замены розетки до полного электромонтажа под ключ.
            Аварийный выезд.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/25"
            >
              Оставить заявку
              <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 text-base font-medium rounded-md text-slate-200 hover:bg-white/10 transition-all"
            >
              Примеры работ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;