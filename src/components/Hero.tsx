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
      <div className="absolute inset-0">
        <img
          src={picture1}
          alt="Office workspace"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.75)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          ADMINSOURCE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-lg md:text-xl text-white/70 font-light mb-10"
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('services')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {t('hero_cta')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {t('hero_contact')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
