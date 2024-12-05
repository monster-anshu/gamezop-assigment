export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  let timeout: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  } as T;
}
