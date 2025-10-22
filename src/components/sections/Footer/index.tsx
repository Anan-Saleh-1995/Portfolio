import { SocialLinks } from '@/components/common/SocialLinks';

export const Footer = () => {
  return (
    <footer className="border-t border-muted-foreground/20 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">

        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Anan Saleh. All rights reserved.
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
};
