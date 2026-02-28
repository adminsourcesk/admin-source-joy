import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navbar = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          ADMINSOURCE
        </span>
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollTo('services')}
            className="text-sm text-muted-foreground hover:text-secondary transition-colors"
          >
            {t('nav_services')}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm text-muted-foreground hover:text-secondary transition-colors"
          >
            {t('nav_contact')}
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
