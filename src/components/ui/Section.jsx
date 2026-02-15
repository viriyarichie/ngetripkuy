import { cn } from '../../utils';

export function Section({ className, children, id, ...props }) {
  return (
    <section 
      id={id}
      className={cn('py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto', className)} 
      {...props}
    >
      {children}
    </section>
  );
}
