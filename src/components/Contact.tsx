import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 px-6 bg-secondary/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t('contact_title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { Icon: Mail, label: t('contact_email'), value: 'info@adminsource.sk' },
              { Icon: Phone, label: t('contact_phone'), value: '+421 XXX XXX XXX' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-secondary/40 hover:shadow-md hover:shadow-secondary/5 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder={t('contact_name')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all"
            />
            <input
              type="email"
              placeholder={t('contact_your_email')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all"
            />
            <textarea
              rows={4}
              placeholder={t('contact_your_message')}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all resize-none"
            />
            <button
              type="submit"
              className="group relative w-full py-3 rounded-lg font-medium overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)] transition-shadow"
            >
              <span className="relative z-10">{t('contact_send')}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
