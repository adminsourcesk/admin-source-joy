import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-8 px-6 border-t border-border bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          ADMINSOURCE
        </span>
        <span>© {new Date().getFullYear()} AdminSource. {t('footer_rights')}</span>
      </div>
    </footer>
  );
};

export default Footer;
