import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import picture1 from '@/assets/picture1.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={picture1}
          alt="Office workspace"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay)/0.85)] via-[hsl(var(--hero-overlay)/0.6)] to-[hsl(var(--hero-overlay)/0.9)]" />
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-sm text-white/70 font-medium tracking-wide">
            {t('subtitle')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          ADMIN
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            SOURCE
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            onClick={() => scrollTo('services')}
            className="group relative px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium overflow-hidden transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            <span className="relative z-10">{t('hero_cta')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3.5 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-secondary/30 hover:border-secondary/50 transition-all"
          >
            {t('hero_contact')}
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
