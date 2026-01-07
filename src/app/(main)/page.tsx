'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/hooks/use-translation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { capabilities, products, industries, whyChooseUs } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const { t } = useTranslation();

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">{t('home_hero_title')}</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">{t('home_hero_subtitle')}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact"><Button size="lg">{t('btn_request_quote')}</Button></Link>
            <Link href="/capabilities"><Button size="lg" variant="secondary">{t('btn_view_capabilities')}</Button></Link>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold text-center">{t('home_key_capabilities_title')}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map(cap => {
              const image = PlaceHolderImages.find(p => p.id === cap.imageId);
              const Icon = cap.icon;
              return (
                <Card key={cap.titleKey} className="text-center border-none shadow-none bg-transparent">
                  <CardHeader className="items-center">
                    <div className="bg-primary text-primary-foreground rounded-full p-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="pt-4">{t(cap.titleKey as any)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t(cap.descriptionKey as any)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold text-center">{t('home_products_title')}</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(prod => {
              const image = PlaceHolderImages.find(p => p.id === prod.imageId);
              return (
                <Link href={`/products/${prod.slug}`} key={prod.slug}>
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <div className="relative h-48 w-full">
                       {image && <Image src={image.imageUrl} alt={t(prod.titleKey as any)} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={image.imageHint} />}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{t(prod.titleKey as any)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">{t(prod.descriptionKey as any)}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-7xl">
              <h2 className="text-3xl font-bold text-center">{t('home_industries_title')}</h2>
              <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                  {industries.map(industry => {
                      const Icon = industry.icon;
                      return (
                          <div key={industry.nameKey} className="flex items-center gap-3 text-muted-foreground font-medium">
                              <Icon className="h-6 w-6" />
                              <span>{t(industry.nameKey as any)}</span>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold text-center">{t('home_why_choose_us_title')}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {whyChooseUs.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.titleKey} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-md p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{t(item.titleKey as any)}</h3>
                    <p className="mt-1 text-muted-foreground">{t(item.descriptionKey as any)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container max-w-7xl py-16 text-center">
          <h2 className="text-3xl font-bold">{t('home_cta_title')}</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-primary-foreground/80">{t('home_cta_subtitle')}</p>
          <div className="mt-8">
            <Link href="/contact"><Button size="lg" variant="secondary">{t('btn_request_quote')}</Button></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
