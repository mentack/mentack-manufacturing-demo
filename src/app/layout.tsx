import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageProvider';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: 'Mentack Manufacturing',
    template: '%s | Mentack Manufacturing',
  },
  description: 'Your Reliable Partner in Industrial Manufacturing. Custom production, scalable capacity, consistent quality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
