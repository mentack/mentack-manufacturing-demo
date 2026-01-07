"use client";

import Link from 'next/link';

import { useTranslation } from '@/hooks/use-translation';
import { translations } from '@/lib/translations';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { products } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';

type Product = (typeof products)[number];

export default function ProductDetailClient({ product }: { product: Product }) {
  const { t, language } = useTranslation();

  const localized = (key: keyof typeof translations.en, replacements?: Record<string, string>) => {
    let translation = translations[language]?.[key] || translations.en[key];
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        translation = translation.replace(`{{${k}}}`, v);
      });
    }
    return translation;
  };

  const title = localized(product.titleKey as keyof typeof translations.en);
  const subtitle = localized(product.descriptionKey as keyof typeof translations.en);

  return (
    <div>
      <PageHeader
        title={title}
        subtitle={subtitle}
        imageId={product.imageId}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold border-b pb-2">{localized('product_detail_overview')}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {`This section provides a detailed overview of ${title}. We focus on high-quality materials and manufacturing processes to ensure that every component meets the stringent requirements of modern industries. Our expertise in this area allows us to deliver reliable and efficient solutions.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b pb-2">{localized('product_detail_capabilities')}</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Advanced CNC machining for high precision.</li>
                <li>Support for a wide range of materials including steel, aluminum, and specialty alloys.</li>
                <li>Automated quality checks during the production cycle.</li>
                <li>Custom finishing and assembly services available.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b pb-2">{localized('product_detail_quality')}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {`Our commitment to quality is unwavering. For ${title}, we implement a multi-stage inspection process, from raw material verification to final dimensional analysis. Every batch is traceable, and we provide detailed quality reports upon request to ensure full transparency and compliance with your standards.`}
              </p>
            </section>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>{localized('product_detail_cta_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact our team to get detailed technical specifications or to start a quote for your project.
                </p>
                <Link href="/contact">
                  <Button className="w-full">{localized('btn_request_quote')}</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full mt-2">{localized('btn_request_technical_details')}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
