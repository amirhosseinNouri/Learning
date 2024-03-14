import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import IMOJIES from '../imoji';
import { notFound } from 'next/navigation';

type ImojiDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function ImojiDetailsPage({ params }: ImojiDetailsPageProps) {
  const imoji = IMOJIES.find((imoji) => imoji.id === Number(params.id));

  if (!imoji) {
    notFound();
  }

  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{imoji.content}</CardTitle>
        <CardDescription>{imoji.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
