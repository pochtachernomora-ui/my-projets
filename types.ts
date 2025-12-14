import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  priceStart: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  name: string;
  service: string;
  text: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}