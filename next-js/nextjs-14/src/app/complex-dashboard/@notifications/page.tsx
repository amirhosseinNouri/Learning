import Link from 'next/link';
import React from 'react';
import Box from '@/components/box';

export default function NotificationsPage() {
  return (
    <Box>
      <h2>NotificationsPage</h2>
      <button className="p-3 bg-blue-400 rounded-md">
        <Link href="/complex-dashboard/archived">Archived</Link>
      </button>
    </Box>
  );
}
