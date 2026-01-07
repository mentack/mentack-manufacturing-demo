'use client';
import { useTranslation } from '@/hooks/use-translation';
import { industries } from '@/lib/data';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function IndustriesPage() {
    const { t } = useTranslation();

    return (
        <div>
            <PageHeader
                title={t('industries_hero_title')}
                subtitle={t('industries_hero_subtitle')}
                imageId="hero-industries"
            />
            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => {
                        const Icon = industry.icon;
                        return (
                            <Card key={industry.nameKey} className="h-full">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary text-primary-foreground p-3 rounded-md">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle>{t(industry.nameKey as any)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{t(industry.descriptionKey as any)}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
