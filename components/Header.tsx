import React from 'react';
import { Menu, X, Zap, Phone } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-primary p-1.5 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-secondary">
              Электро<span className="text-primary">Мастер</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+380991234567" 
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-secondary px-4 py-2 rounded-full transition-colors font-semibold text-sm"
            >
              <Phone size={16} />
              +380 (99) 123-45-67
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+380991234567" 
              className="flex items-center gap-2 px-3 py-3 text-base font-bold text-primary"
            >
              <Phone size={18} />
              +380 (99) 123-45-67
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;