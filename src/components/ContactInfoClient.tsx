"use client";

import { MapPin, Clock } from 'lucide-react';

import { useTranslation } from '@/hooks/use-translation';

export default function ContactInfoClient() {
  const { t } = useTranslation();

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
