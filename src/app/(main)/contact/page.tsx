import type { Metadata } from 'next';
import { translations } from '@/lib/translations';
import PageHeader from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import ContactInfoClient from '@/components/ContactInfoClient';

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
