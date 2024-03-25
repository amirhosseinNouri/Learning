'use client';
import Link from 'next/link';
import React from 'react';
import ToggleMode from '@/components/toggle-mode';
import { usePathname } from 'next/navigation';

type NavigationLink = { label: string; url: string };

const LINKS: NavigationLink[] = [
  { label: 'Dashboard', url: '/' },
  { label: 'Tickets', url: '/tickets' },
  { label: 'Users', url: '/users' },
];

export default function MainNav() {
  const currentPath = usePathname();

  return (
    <div className="flex flex-row justify-between">
      <div className="flex items-center gap-2">
        {LINKS.map((link) => (
          <Link
            className={`font-medium text-md ${
              currentPath === link.url &&
              'text-primary/70 hover:text-primary/60'
            }`}
            key={link.label}
            href={link.url}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Link href="/">Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
}
