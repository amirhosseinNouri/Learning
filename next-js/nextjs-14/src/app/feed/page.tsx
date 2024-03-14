import React from 'react';
import IMOJIES from './imoji';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function Feed() {
  return (
    <div>
      {IMOJIES.map((imoji) => (
        <Link key={imoji.name} href={`/feed/${imoji.id}`}>
          <Card>
            <CardHeader>
              <CardTitle>{imoji.content}</CardTitle>
              <CardDescription>{imoji.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
