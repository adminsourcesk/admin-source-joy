import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t('contact_title')}
        </motion.h2>

        <div className="flex flex-col items-center gap-8">
          <motion.a
            href="mailto:info@adminsource.sk"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 text-center"
          >
            <Mail className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">{t('contact_email')}</p>
              <p className="text-xl font-semibold">info@adminsource.sk</p>
            </div>
          </motion.a>
          <motion.a
            href="tel:+421XXXXXXXX"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 text-center"
          >
            <Phone className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">{t('contact_phone')}</p>
              <p className="text-xl font-semibold">+421 XXX XXX XXX</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
