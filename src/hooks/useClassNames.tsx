import { useMemo } from 'react';

export function useClassNames(className: string, styles: Record<string, string>): string {
  return useMemo(() => {
    return className
      .split(' ')
      .map((name) => styles[name] || name)
      .join(' ');
  }, [className, styles]);
}
