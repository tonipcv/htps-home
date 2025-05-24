import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    const baseClasses = "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500";
    const classes = `${baseClasses} ${className}`;
    
    return (
      <input className={classes} ref={ref} {...props} />
    );
  }
);

Input.displayName = 'Input'; 