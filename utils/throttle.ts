// utils/throttle.ts

export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let lastExecutionTime = 0;
  
    return function throttled(...args: Parameters<T>): void {
      const currentTime = Date.now();
  
      if (currentTime - lastExecutionTime >= limit) {
        func(...args);
        lastExecutionTime = currentTime;
      }
    };
  }
  