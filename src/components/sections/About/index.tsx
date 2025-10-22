import { SectionWrapper } from '@/components/common/SectionWrapper';
import { about } from '@/lib/data';

export const About = () => {
  return (
    <SectionWrapper id={'about'} title={about.title}>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {about.paragraphs.map((text, i) => (
          <p key={i} className='mb-2'>{text}</p>
        ))}
      </div>
    </SectionWrapper>
  );
};
