'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function OrderProductPage() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing the order...');
    router.push('/');
  };

  return (
    <div>
      <h1>OrderProductPage</h1>
      <button
        className="p-3 bg-green-400 rounded-md text-white"
        onClick={handleClick}
      >
        Place order
      </button>
    </div>
  );
}
