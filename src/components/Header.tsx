'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTranslation } from '@/hooks/use-translation';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { Button } from './ui/button';

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex md:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {t(link.labelKey as keyof typeof import('@/lib/translations').translations.en)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <Link href="/contact" className='hidden sm:flex'>
            <Button size="sm">{t('btn_request_quote')}</Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
