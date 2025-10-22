import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import type { Project as ProjectType } from '@/lib/types';
import { TechBadge } from '@/components/common/TechBadge';

export const Project = ({ project }: { project: ProjectType }) => {
  const { title, description, img, techStack, github, liveDemo } = project;
  return (
    <Card className="grid pt-0 rounded-4xl transition-transform duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-xl focus-within:ring-2 focus-within:ring-emerald-500/40">
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        className="rounded-t-4xl"
      />

      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-semibold">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-1 flex justify-center sm:justify-start flex-wrap gap-2">
        {
          techStack?.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))
        }
      </CardContent>

      <CardFooter className="flex items-center justify-center sm:justify-start gap-6 text-sm text-muted-foreground">
        <a
          href={github}
          className="inline-flex items-center gap-2 hover:text-emerald-500 hover:cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='View code on GitHub'
        >
          <GitHubLogoIcon />
          Code
        </a>
        <a
          href={liveDemo}
          className="inline-flex items-center gap-2 hover:text-emerald-500 hover:cursor-pointer"
          aria-label='Open live demo'
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLinkIcon />
          Live Demo
        </a>
      </CardFooter>
    </Card>
  );
};
