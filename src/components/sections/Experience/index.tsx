import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { DrawingPinFilledIcon, CalendarIcon, SewingPinFilledIcon, DrawingPinIcon } from '@radix-ui/react-icons';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { experiences } from '@/lib/data';

export const Experience = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <SectionWrapper id={'experience'} title={'Experience'}>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
      >
        <div className="relative border-l border-muted-foreground/20">
          {experiences.map((exp) => (
            <div key={exp.id} className="ml-10">
              <span className="absolute -left-2 h-4 w-4 rounded-full bg-emerald-500"></span>
              <div className="flex gap-2">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <CollapsibleTrigger
                  className={`rounded-full hover:cursor-pointer ${open? 'text-emerald-400' : ''}`}
                >
                  {open ? <DrawingPinFilledIcon /> : <DrawingPinIcon />}
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="flex flex-col gap-2">
                <p className="text-sm font-medium">{exp.company}</p>
                <div className="flex gap-1">
                  <div className="flex gap-2">
                    <CalendarIcon className="mt-1 text-emerald-500" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.period} ·
                    </p>
                  </div>
                  <div className="flex">
                    <SewingPinFilledIcon className="mt-1 text-emerald-500"/>
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {
                    exp.techStack.map((tech) => (
                      <Badge key={tech} className="hover:cursor-pointer hover:bg-emerald-400 hover:dark:text-emerald-400 hover:dark:bg-accent" variant={'secondary'}>{tech}</Badge>
                    ))
                  }
                </div>
              </CollapsibleContent>
            </div>
          ))}
        </div>
      </Collapsible>
    </SectionWrapper>
  );
};
