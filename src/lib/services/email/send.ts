import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import type { ContactForm } from '@/lib/types';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type EmailParams = Omit<ContactForm, 'website'>;

export const sendEmail = async (params: EmailParams): Promise<void> => {
  try {
    await emailjs.send(
      serviceId,
      templateId,
      params,
      publicKey
    );
    toast.success('Message sent successfully!');
  } catch (error) {
    toast.error('Something went wrong. Please try again later.');
  }
};
