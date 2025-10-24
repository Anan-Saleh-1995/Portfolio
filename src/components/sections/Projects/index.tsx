import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Project } from '@/components/sections/Projects/Project';
import { projects } from '@/lib/data';

export const Projects = () => {
  const title = (
    <div className='flex flex-row gap-2'>
      <span>Projects</span>
      <Popover>
        <PopoverTrigger className='hover:cursor-pointer mt-1'>
          <InfoCircledIcon />
        </PopoverTrigger>
        <PopoverContent>For recruiters: These projects are a work in progress, they may not be the best at the time you are viewing them and everything takes time so they will improve and display better features and coding skills so come back again :)</PopoverContent>
      </Popover>
    </div>
  );
  return (
    <SectionWrapper id={'projects'} title={title}>
      <div className="mb-8">
        <p className="text-muted-foreground mt-2">
          Selected work that mirrors how I design, build, and ship.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
