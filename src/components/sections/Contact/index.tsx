import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { sendEmail } from '@/lib/services/email/send';
import type { ContactForm } from '@/lib/types';

export const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => //todo: add to utils
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lastSubmit = localStorage.getItem('lastSubmitTime');
    const now = Date.now();

    if (lastSubmit && now - parseInt(lastSubmit, 10) < 30000) {
      toast.error('Please wait before sending another message.');
      return;
    }
    localStorage.setItem('lastSubmitTime', now.toString());

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!validateEmail(form.email)) {
      toast.error('Invalid email address');
      return;
    }

    if (form.website) {
      // honeypot triggered
      return;
    }

    setLoading(true);

    try {
      const paramsToSend = {
        name: form.name,
        email: form.email,
        message: form.message,
      };
      await sendEmail(paramsToSend);
      setForm({
        name: '',
        email: '',
        message: '',
        website: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id={'contact'} title={'Contact'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                name="name"
                value={form.name}
                onChange={onChange}
                type="text"
                placeholder="Your Name"
                className="focus-visible:ring-transparent focus-visible:border-emerald-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                name="email"
                value={form.email}
                onChange={onChange}
                type="email"
                placeholder="Your Email"
                className="focus-visible:ring-transparent focus-visible:border-emerald-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Your Message"
                rows={4}
                className="focus-visible:ring-transparent focus-visible:border-emerald-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="website"
                value={form.website || ''}
                onChange={onChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <Button
              disabled={loading}
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer"
            >
              {loading ? (
                <>
                  <Spinner className="mr-2 h-4 w-4 animate-spin" />
                  On its way...
                </>
              ) : (
                'Let\'s Connect'
              )}
            </Button>
          </form>
        </div>
        <div className='hidden lg:block'>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
              <p className="text-muted-foreground">
                Feel free to reach out if you have any questions or if you’d like to work together on a project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
