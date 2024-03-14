import React from 'react';
import { notFound } from 'next/navigation';
import IMOJIES from '@/app/feed/imoji';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ImojiModalProps = {
  params: {
    id: string;
  };
};

export default function ImojiModal({ params }: ImojiModalProps) {
  const imoji = IMOJIES.find((imoji) => imoji.id === Number(params.id));

  if (!imoji) {
    notFound();
  }

  return (
    <div className="h-screen w-screen z-50 bg-gray-200 fixed top-0 left-0 opacity-90 flex flex-col justify-center items-center">
      <div>
        <Card className="cursor-pointer max-w-screen-md opacity-100">
          <CardHeader>
            <CardTitle>
              {imoji.content} - {imoji.name}
            </CardTitle>
            <CardDescription>{imoji.description}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
