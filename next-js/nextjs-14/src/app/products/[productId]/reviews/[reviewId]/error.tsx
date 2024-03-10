'use client';
const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message}</div>;
};

export default ErrorBoundary;
