import UserForm from '@/components/user-form';
import React from 'react';
import UsersTable from './components/users-table';
import prisma from '@/prisma/db';
import { getServerSession } from 'next-auth';
import options from '../api/auth/[...nextauth]/options';
import { Role } from '@prisma/client';

export default async function UsersPage() {
  const session = await getServerSession(options);

  if (session?.user.role !== Role.ADMIN) {
    return <p className="text-destructive">Admin access required</p>;
  }

  const users = await prisma.user.findMany();

  return (
    <div>
      <UserForm />
      <UsersTable users={users} />
    </div>
  );
}
