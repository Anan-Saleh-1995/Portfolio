import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Project } from '@/components/sections/Projects/Project';
import { projects } from '@/lib/data';

export const Projects = () => {
  return (
    <SectionWrapper id={'projects'} title={'Projects'}>
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
