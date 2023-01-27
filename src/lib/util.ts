export function formatDate(datetime: string): string {
  const date = new Date(datetime);
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');

  return `${y}-${m}-${d}`;
}
