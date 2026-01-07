import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { products } from '@/lib/data';
import { translations } from '@/lib/translations';

import ProductDetailClient from '@/components/ProductDetailClient';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return {};
  }

  const enTitle = translations.en[product.titleKey as keyof typeof translations.en];
  const trTitle = translations.tr[product.titleKey as keyof typeof translations.tr];
  
  const enDesc = translations.en.product_detail_seo_description.replace('{{productName}}', enTitle);
  const trDesc = translations.tr.product_detail_seo_description.replace('{{productName}}', trTitle);

  return {
    title: `${enTitle} | ${trTitle}`,
    description: `${enDesc} / ${trDesc}`,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }
  return <ProductDetailClient product={product} />;
}
