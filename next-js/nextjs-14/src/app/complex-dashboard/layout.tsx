import React, { ReactNode } from 'react';

export default function ComplexDashboardLayout({
  children,
  analytics,
  notifications,
  revenue,
  login,
}: {
  children: ReactNode;
  analytics: ReactNode;
  notifications: ReactNode;
  revenue: ReactNode;
  login: ReactNode;
}) {
  const isLoggedIn = false;

  if (isLoggedIn) {
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

  return login;
}
