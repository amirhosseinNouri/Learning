import UserForm from '@/components/user-form';
import prisma from '@/prisma/db';
import React from 'react';

interface EditUserPageProps {
  params: { id: string };
}

const EditUserPage = async ({ params }: EditUserPageProps) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return <p className="text-destructive">User not found</p>;
  }

  // We don't want to expose the  hashed password. So we clear the field here.
  user.password = '';

  return <UserForm user={user} />;
};

export default EditUserPage;
