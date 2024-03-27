'use client';
import { Role } from '@prisma/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavigationLinkProps {
  role?: Role;
}

type NavigationLink = { label: string; url: string; adminOnly?: boolean };

const LINKS: NavigationLink[] = [
  { label: 'Dashboard', url: '/' },
  { label: 'Tickets', url: '/tickets' },
  { label: 'Users', url: '/users', adminOnly: true },
];

const NavigationLink = ({ role }: NavigationLinkProps) => {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-2">
      {LINKS.filter(
        (link) => !link.adminOnly || (role && role === 'ADMIN'),
      ).map((link) => (
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
