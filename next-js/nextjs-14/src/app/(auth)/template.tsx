'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

const navLink = [
  { name: 'Register', href: '/register' },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Forgot password',
    href: '/forgot-password',
  },
];

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();

  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLink.map((link, index) => (
        <div key={index}>
          <Link
            className={
              pathname.startsWith(link.href)
                ? 'font-bold mr-4'
                : 'text-blue-500 mr-4'
            }
            href={link.href}
          >
            {link.name}
          </Link>
        </div>
      ))}
      {children}
    </div>
  );
}
