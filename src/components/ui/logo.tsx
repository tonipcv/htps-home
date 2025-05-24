import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <span className={cn(
        'text-2xl font-light tracking-tight',
        variant === 'light' ? 'text-white' : 'text-gray-900',
        'font-montserrat'
      )}>
        MED1
      </span>
    </div>
  );
} 