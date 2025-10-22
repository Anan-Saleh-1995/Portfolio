import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { socials } from '@/lib/data';

export const SocialLinks = () => {

  const onClick = (e) => {
    e.preventDefault();
    toast.info('Coming Soon - Under Construction');
  };
  return (
    <div className="flex justify-center gap-4 lg:justify-start">
      {
        socials.map(({ label, href, icon: Icon }) => (
          <Button
            asChild
            key={label}
            variant="outline"
            size="icon"
            className="rounded-full hover:border-emerald-500! hover:bg-transparent"
            style={{
              cursor: 'pointer',
            }}
          >
            {
              href === '#' ? <a href="#" onClick={onClick}><Icon /></a> :
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
            }
          </Button>
        ))
      }
    </div>
  );
};
