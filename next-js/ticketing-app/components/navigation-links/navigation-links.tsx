'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavigationLink = { label: string; url: string };

const LINKS: NavigationLink[] = [
  { label: 'Dashboard', url: '/' },
  { label: 'Tickets', url: '/tickets' },
  { label: 'Users', url: '/users' },
];

const NavigationLink = () => {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-2">
      {LINKS.map((link) => (
        <Link
          className={`font-medium text-md ${
            currentPath === link.url && 'text-primary/70 hover:text-primary/60'
          }`}
          key={link.label}
          href={link.url}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLink;
