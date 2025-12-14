import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl mb-4">
            География работы
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Работаю в с. Кучурган и по всему Раздельнянскому району.
            <br />
            <span className="text-primary font-medium">Оперативный выезд при аварийных ситуациях.</span>
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white h-[400px] md:h-[500px] border border-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43105.78762746404!2d29.943152648585675!3d46.73693259461528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9a63d7e7e5d8d%3A0x7d28c2b7f3b8b6a1!2sKuchurhan%2C%20Odesa%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2sua!4v1709295600000!5m2!1sen!2sua" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта обслуживания"
          ></iframe>
          
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden sm:block">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Работаю без выходных</p>
                <p className="text-sm text-slate-600 mt-1">Звоните с 9:00 до 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;