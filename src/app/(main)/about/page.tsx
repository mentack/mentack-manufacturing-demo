'use client';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { milestones } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PageHeader from '@/components/PageHeader';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
    const { t } = useTranslation();

    const overviewImage = PlaceHolderImages.find(p => p.id === 'about-overview');
    const facilityImage = PlaceHolderImages.find(p => p.id === 'about-facility');

    return (
        <div>
            <PageHeader
                title={t('about_hero_title')}
                subtitle={t('about_hero_subtitle')}
                imageId="hero-about"
            />
            <div className="container mx-auto max-w-7xl px-4 py-16 space-y-16">
                
                {/* Company Overview */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">{t('about_overview_title')}</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">{t('about_overview_desc')}</p>
                    </div>
                    {overviewImage && (
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                            <Image src={overviewImage.imageUrl} alt={overviewImage.description} fill className="object-cover" data-ai-hint={overviewImage.imageHint}/>
                        </div>
                    )}
                </section>

                {/* Mission & Values */}
                 <section className="text-center">
                    <h2 className="text-3xl font-bold">{t('about_mission_title')}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground leading-relaxed">{t('about_mission_desc')}</p>
                </section>
                
                {/* Facility Overview */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                     {facilityImage && (
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg md:order-1">
                            <Image src={facilityImage.imageUrl} alt={facilityImage.description} fill className="object-cover" data-ai-hint={facilityImage.imageHint} />
                        </div>
                    )}
                    <div className="md:order-2">
                        <h2 className="text-3xl font-bold">{t('about_facility_title')}</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">{t('about_facility_desc')}</p>
                    </div>
                </section>

            </div>
        </div>
    );
}
