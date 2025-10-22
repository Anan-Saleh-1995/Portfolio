import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { DrawingPinFilledIcon, DrawingPinIcon } from '@radix-ui/react-icons';
import type { SectionWrapperProps } from '@/lib/types';

export const SectionWrapper = ({ id, title, children }: SectionWrapperProps) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <section id={id} className="px-6 py-16 mx-auto">
      <Collapsible
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex gap-2 mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          <CollapsibleTrigger
            className={`rounded-full hover:cursor-pointer ${open? 'text-emerald-400' : ''}`}
          >
            {open ? <DrawingPinFilledIcon /> : <DrawingPinIcon />}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {children}
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

