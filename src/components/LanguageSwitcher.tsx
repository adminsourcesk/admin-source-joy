import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';

const flags: Record<Language, string> = {
  sk: '🇸🇰',
  en: '🇬🇧',
  de: '🇩🇪',
  ru: '🇷🇺',
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1 rounded text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <Globe className="w-4 h-4" />
        {flags[language]} {language.toUpperCase()}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[120px] z-50">
          {(Object.keys(flags) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false); }}
              className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors ${
                language === lang
                  ? 'bg-primary/10 text-foreground font-medium'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {flags[lang]} {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
