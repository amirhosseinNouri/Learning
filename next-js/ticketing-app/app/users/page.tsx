import UserForm from '@/components/user-form';
import React from 'react';
import UsersTable from './components/users-table';
import prisma from '@/prisma/db';

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <UserForm />
      <UsersTable users={users} />
    </div>
  );
}
