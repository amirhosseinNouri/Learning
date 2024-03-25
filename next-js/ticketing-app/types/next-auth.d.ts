import NextAuth, { DefaultSession } from 'next-auth/next';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      username: string;
      role: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: number;
    name: string;
    username: string;
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}
