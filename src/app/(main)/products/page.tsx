'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';

export default function ProductsPage() {
    const { t } = useTranslation();

    return (
        <div>
            <PageHeader 
                title={t('products_hero_title')} 
                subtitle={t('products_hero_subtitle')}
                imageId="hero-products"
            />
            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => {
                        const image = PlaceHolderImages.find(p => p.id === product.imageId);
                        return (
                            <Card key={product.slug} className="flex flex-col h-full overflow-hidden group">
                                {image && (
                                    <div className="relative h-60 w-full">
                                        <Image
                                            src={image.imageUrl}
                                            alt={t(product.titleKey as any)}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle>{t(product.titleKey as any)}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{t(product.descriptionKey as any)}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/products/${product.slug}`} className="w-full">
                                        <Button variant="outline" className="w-full">{t('btn_view_details')}</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
