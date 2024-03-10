import Link from 'next/link';
import React from 'react';
import Box from '@/components/box';

export default function ArchivedNotifications() {
  return (
    <Box>
      <h2>ArchivedNotifications</h2>
      <button className="p-3 bg-blue-400 rounded-md">
        <Link href="/complex-dashboard">Default</Link>
      </button>
    </Box>
  );
}
