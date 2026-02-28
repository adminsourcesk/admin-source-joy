import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Database, Search } from 'lucide-react';
import picture2 from '@/assets/picture2.jpg';
import picture3 from '@/assets/picture3.jpg';

const Services = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: FileText,
      title: t('cat1_title'),
      services: [
        { title: t('s1_title'), desc: t('s1_desc') },
        { title: t('s2_title'), desc: t('s2_desc') },
        { title: t('s3_title'), desc: t('s3_desc') },
      ],
    },
    {
      icon: Database,
      title: t('cat2_title'),
      services: [
        { title: t('s4_title'), desc: t('s4_desc') },
        { title: t('s5_title'), desc: t('s5_desc') },
        { title: t('s6_title'), desc: t('s6_desc') },
        { title: t('s7_title'), desc: t('s7_desc') },
      ],
    },
    {
      icon: Search,
      title: t('cat3_title'),
      services: [
        { title: t('s8_title'), desc: t('s8_desc') },
        { title: t('s9_title'), desc: t('s9_desc') },
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          {t('services_title')}
        </motion.h2>

        {/* Decorative image strip */}
        <div className="grid grid-cols-2 gap-4 my-12 rounded-xl overflow-hidden max-w-4xl mx-auto">
          <img src={picture2} alt="Modern office" className="w-full h-48 object-cover rounded-lg" loading="lazy" />
          <img src={picture3} alt="Workspace" className="w-full h-48 object-cover rounded-lg" loading="lazy" />
        </div>

        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.services.map((s, si) => (
                  <div
                    key={si}
                    className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold mb-2 text-foreground">{s.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
