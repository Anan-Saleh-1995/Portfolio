import { Badge } from '@/components/ui/badge';

type techBadgeProps = {
  tech: string,
};

export const TechBadge = ({ tech }: techBadgeProps) => {
  return (
    <Badge className="hover:cursor-pointer hover:bg-emerald-400 hover:dark:text-emerald-400 hover:dark:bg-accent" variant={'secondary'}>
      { tech }
    </Badge>
  );
};
