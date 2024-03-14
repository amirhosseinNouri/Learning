import Link from 'next/link';
import React from 'react';

export default function PageF4() {
  return (
    <div>
      <h2>PageF4</h2>
      <Link href="/f1/f3">Navigate to F3 page</Link>
      <Link href="/about">Navigate to About Page</Link>
    </div>
  );
}
