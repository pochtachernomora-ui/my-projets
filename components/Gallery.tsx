import React from 'react';
import { ZoomIn } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=800&auto=format&fit=crop",
    alt: "Сборка электрощита",
    category: "Электрощиты"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1513506003011-3b03c8b82458?q=80&w=800&auto=format&fit=crop",
    alt: "Установка декоративного освещения",
    category: "Освещение"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop",
    alt: "Черновой монтаж проводки",
    category: "Монтаж"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    alt: "Освещение в офисе",
    category: "Коммерция"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Портфолио</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
            Примеры выполненных работ
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Фотографии реальных объектов: от черновой электрики до установки чистовой фурнитуры.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-xl shadow-md h-64 cursor-pointer">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <ZoomIn className="text-primary mb-2 h-8 w-8" />
                <h3 className="text-white font-bold text-lg">{photo.category}</h3>
                <p className="text-slate-300 text-sm">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;