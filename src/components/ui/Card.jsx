import { cn } from '../../utils';

export function Card({ className, children, ...props }) {
  return (
    <div 
      className={cn(
        'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pb-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pt-0 flex items-center', className)} {...props}>
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className, ...props }) {
    return (
        <div className="overflow-hidden">
            <img 
                src={src} 
                alt={alt} 
                className={cn('w-full h-full object-cover transition-transform duration-500 hover:scale-105', className)}
                {...props}
            />
        </div>
    )
}
