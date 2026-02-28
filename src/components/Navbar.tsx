import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold tracking-tight text-secondary">
          ADMINSOURCE
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo('services')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t('nav_services')}
          </button>
          <button onClick={() => scrollTo('contact')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t('nav_contact')}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-1">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-4">
          <button onClick={() => scrollTo('services')} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t('nav_services')}
          </button>
          <button onClick={() => scrollTo('contact')} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t('nav_contact')}
          </button>
          <div className="pt-2 border-t border-border">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
