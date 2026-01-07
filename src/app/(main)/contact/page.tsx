import type { Metadata } from 'next';
import { translations } from '@/lib/translations';
import PageHeader from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const enTitle = translations.en.contact_seo_title;
  const trTitle = translations.tr.contact_seo_title;
  const enDesc = translations.en.contact_seo_description;
  const trDesc = translations.tr.contact_seo_description;

  return {
    title: `${enTitle} | ${trTitle}`,
    description: `${enDesc} / ${trDesc}`,
  };
}

const ContactInfoClient = () => {
    // This component is needed to use the useTranslation hook
    'use client';
    const { t } = require('@/hooks/use-translation').useTranslation();

    const infoItems = [
        { icon: MapPin, title: t('contact_address_title'), detail: t('contact_address_detail') },
        { icon: Clock, title: t('contact_hours_title'), detail: t('contact_hours_detail') },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t('contact_info_title')}</h2>
            <div className="space-y-4">
                {infoItems.map(item => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className="flex gap-4">
                            <Icon className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-muted-foreground">{item.detail}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <div>
            <PageHeader 
                title={translations.en.contact_hero_title}
                subtitle={translations.en.contact_hero_subtitle}
                imageId="hero-contact"
            />
            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                         <h2 className="text-3xl font-bold mb-6">{translations.en.contact_form_title}</h2>
                        <ContactForm />
                    </div>
                    <div className="lg:col-span-2">
                       <ContactInfoClient />
                    </div>
                </div>
            </div>
        </div>
    );
}
