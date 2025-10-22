import { SocialLinks } from '@/components/common/SocialLinks';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-10 px-6 py-16">
      <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-4xl font-bold leading-tight">
          Hi! I'm <span className="text-emerald-500">Anan Saleh</span>
        </h1>
        <p className="text-lg font-medium text-muted-foreground leading-snug">
          Full Stack Developer
        </p>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          I build full-stack applications with React and Node.js, combining clean architecture with smooth, responsive design.
          Passionate about modern JavaScript, micro-improvements, and creating web apps that feel effortless to use.
        </p>
        <SocialLinks />
      </div>
      <div className="rounded-xl p-1">
        <img
          src="/images/hero-photo.png"
          alt="Anan Saleh working on laptop"
          className="h-64 w-64 rounded-full"
        />
      </div>
    </div>
  );
};
