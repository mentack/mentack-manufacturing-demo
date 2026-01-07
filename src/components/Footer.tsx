'use client';

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { navLinks } from "@/lib/data";
import Logo from "./Logo";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-secondary-foreground border-t">
            <div className="container mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Logo />
                        <p className="mt-4 max-w-sm text-sm">
                            {t('home_hero_title')}
                        </p>
                    </div>

                    <div className="md:col-span-1">
                        <p className="font-semibold text-foreground">{t('nav_products')}</p>
                        <div className="mt-4 flex flex-col space-y-2 text-sm">
                            <Link href="/products/custom-components" className="hover:text-primary transition-colors">{t('product_custom_components_title')}</Link>
                            <Link href="/products/industrial-assemblies" className="hover:text-primary transition-colors">{t('product_industrial_assemblies_title')}</Link>
                            <Link href="/products/oem-manufacturing" className="hover:text-primary transition-colors">{t('product_oem_manufacturing_title')}</Link>
                            <Link href="/products/contract-manufacturing" className="hover:text-primary transition-colors">{t('product_contract_manufacturing_title')}</Link>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <p className="font-semibold text-foreground">{t('get_in_touch')}</p>
                        <div className="mt-4 flex flex-col space-y-2 text-sm">
                            {navLinks.slice(1).map((link) => (
                                <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                                    {t(link.labelKey as keyof typeof import('@/lib/translations').translations.en)}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t pt-6 text-center text-sm">
                    <p>&copy; {currentYear} Mentack Manufacturing. {t('all_rights_reserved')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
