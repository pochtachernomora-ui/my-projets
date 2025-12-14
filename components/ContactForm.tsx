import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info Side */}
            <div className="bg-primary p-10 lg:p-14 text-white">
              <h3 className="text-2xl font-bold mb-6">Остались вопросы?</h3>
              <p className="text-amber-100 mb-10 leading-relaxed">
                Заполните форму или позвоните мне напрямую. Я бесплатно проконсультирую вас и рассчитаю примерную стоимость работ.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 mt-1 text-white" />
                  <div>
                    <p className="font-semibold text-lg">Телефон</p>
                    <a href="tel:+380991234567" className="text-amber-100 hover:text-white transition-colors">
                      +380 (99) 123-45-67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 mt-1 text-white" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <a href="mailto:info@electro-master.ua" className="text-amber-100 hover:text-white transition-colors">
                      info@electro-master.ua
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 mt-1 text-white" />
                  <div>
                    <p className="font-semibold text-lg">Работаю по району</p>
                    <p className="text-amber-100">с. Кучурган, Раздельнянский район</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 lg:p-14">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Заказать звонок</h3>
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Заявка отправлена!</h4>
                  <p className="text-slate-500 mt-2">Я перезвоню вам в течение 15 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Номер телефона
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                      placeholder="+380 (__) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Описание проблемы (необязательно)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none"
                      placeholder="Например: нужно повесить люстру на кухне..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-slate-700 text-white font-bold py-4 rounded-lg transition-colors duration-300 shadow-lg"
                  >
                    Отправить заявку
                  </button>
                  
                  <p className="text-xs text-slate-400 text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;