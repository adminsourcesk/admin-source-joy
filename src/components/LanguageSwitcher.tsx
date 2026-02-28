import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

const flags: Record<Language, string> = {
  sk: '🇸🇰',
  en: '🇬🇧',
  de: '🇩🇪',
  ru: '🇷🇺',
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {(Object.keys(flags) as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
            language === lang
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {flags[lang]} {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
