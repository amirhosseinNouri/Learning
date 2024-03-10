'use client';
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      {error.message}
      <button className="bg-gray-500 p-4" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
