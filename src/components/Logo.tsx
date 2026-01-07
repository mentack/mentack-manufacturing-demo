import React from 'react';
import Link from 'next/link';
import { Factory } from 'lucide-react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-wider text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
      <Factory className="h-6 w-6" />
      <span className="sm:inline">MENTACK</span>
    </Link>
  );
};

export default Logo;
