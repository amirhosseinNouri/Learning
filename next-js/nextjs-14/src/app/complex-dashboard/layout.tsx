import React, { ReactNode } from 'react';

export default function ComplexDashboardLayout({
  children,
  analytics,
  notifications,
  revenue,
}: {
  children: ReactNode;
  analytics: ReactNode;
  notifications: ReactNode;
  revenue: ReactNode;
}) {
  return (
    <div>
      {children}

      {analytics}
      {notifications}
      {revenue}
    </div>
  );
}
