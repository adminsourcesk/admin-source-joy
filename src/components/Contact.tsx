import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t('contact_title')}
        </motion.h2>

        <div className="flex flex-col items-center gap-8">
          <motion.a
            href="mailto:info@adminsource.sk"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center gap-1"
          >
            <Mail className="w-8 h-8 text-primary" />
            <p className="text-sm text-muted-foreground">{t('contact_email')}</p>
            <p className="text-xl font-semibold">info@adminsource.sk</p>
          </motion.a>
          <motion.a
            href="tel:+421XXXXXXXX"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={2}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center gap-1"
          >
            <Phone className="w-8 h-8 text-primary" />
            <p className="text-sm text-muted-foreground">{t('contact_phone')}</p>
            <p className="text-xl font-semibold">+421 XXX XXX XXX</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
