
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
  
    return function debounced(...args: Parameters<T>): void {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  