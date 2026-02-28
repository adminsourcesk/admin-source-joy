import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 border-t border-border bg-background"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">ADMINSOURCE</span>
        <span>© {new Date().getFullYear()} AdminSource. {t('footer_rights')}</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
