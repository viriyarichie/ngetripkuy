import { cn } from '../../utils';

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) {
  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    ghost: 'text-gray-600 hover:text-primary hover:bg-gray-100',
    white: 'bg-white text-primary hover:bg-gray-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
