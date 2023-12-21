import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { MouseEvent } from 'react';

function Navbar() {
  const { data: session, status } = useSession();

  const handleSignInClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signIn();
  };

  const handleSignOutClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul
        className={`main-nav ${
          !session && status === 'loading' ? 'loading' : 'loaded'
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {status !== 'loading' && !session && (
          <li>
            <Link href="/api/auth/signin" onClick={handleSignInClick}>
              Sign In
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout" onClick={handleSignOutClick}>
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
