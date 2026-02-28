import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navbar = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between min-w-0">
        <span className="text-xl font-bold tracking-tight text-secondary shrink-0">
          ADMINSOURCE
        </span>
        <div className="flex items-center gap-3 sm:gap-6 min-w-0 shrink">
          <button
            onClick={() => scrollTo('services')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap hidden xs:block"
          >
            {t('nav_services')}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap hidden xs:block"
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
