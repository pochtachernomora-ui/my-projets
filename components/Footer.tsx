import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="bg-slate-800 p-1.5 rounded-lg">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-lg text-white">
              Электро<span className="text-primary">Мастер</span>
            </span>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Все права защищены.</p>
            <p className="mt-1">Сайт носит информационный характер и не является публичной офертой.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;