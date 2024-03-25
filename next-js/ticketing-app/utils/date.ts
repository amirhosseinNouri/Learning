const formatDate = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

export { formatDate };
