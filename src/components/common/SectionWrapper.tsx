import type { SectionWrapperProps } from '@/lib/types';

export const SectionWrapper = ({ id, title, children }: SectionWrapperProps) => (
  <section id={id} className="px-6 py-16 mx-auto">
    <h2 className="text-2xl font-bold mb-8">{title}</h2>
    {children}
  </section>
);
