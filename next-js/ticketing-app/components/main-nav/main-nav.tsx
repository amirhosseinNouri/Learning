import Link from 'next/link';
import React from 'react';
import ToggleMode from '@/components/toggle-mode';
import { getServerSession } from 'next-auth';
import options from '@/app/api/auth/[...nextauth]/options';
import NavigationLinks from '@/components/navigation-links';

export default async function MainNav() {
  const session = await getServerSession(options);

  return (
    <div className="flex flex-row justify-between">
      <NavigationLinks />

      <div className="flex items-center gap-2">
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}

        <ToggleMode />
      </div>
    </div>
  );
}
