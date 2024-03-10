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

      <div className="flex">
        {analytics}
        {notifications}
        {revenue}
      </div>
    </div>
  );
}
