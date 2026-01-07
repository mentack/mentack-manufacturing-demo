'use client';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { capabilitiesPageData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PageHeader from '@/components/PageHeader';
import { cn } from '@/lib/utils';

export default function CapabilitiesPage() {
    const { t } = useTranslation();

    return (
        <div>
            <PageHeader
                title={t('capabilities_hero_title')}
                subtitle={t('capabilities_hero_subtitle')}
                imageId="hero-capabilities"
            />
            <div className="container mx-auto max-w-7xl px-4 py-16 space-y-24">
                {capabilitiesPageData.map((capability, index) => {
                    const image = PlaceHolderImages.find(p => p.id === capability.imageId);
                    const Icon = capability.icon;
                    return (
                        <section key={capability.titleKey} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className={cn("space-y-4", index % 2 === 1 && "md:order-2")}>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary text-primary-foreground p-3 rounded-md">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold">{t(capability.titleKey as any)}</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t(capability.descriptionKey as any)}
                                </p>
                            </div>
                            <div className={cn(index % 2 === 1 && "md:order-1")}>
                                {image && (
                                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src={image.imageUrl}
                                            alt={t(capability.titleKey as any)}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
