import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const linkClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1',
  {
    variants: {
      variant: {
        default: 'hover:opacity-80 focus:ring-green-500',
        underline: 'underline hover:no-underline focus:ring-green-500',
        button: 'hover:opacity-90 focus:ring-green-500',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const Link = ({
  // Content and navigation
  href = "#",
  children,
  text,
  
  // Styling variants
  variant,
  size,
  
  // Custom styling
  className,
  
  // Event handlers
  onClick,
  
  // Accessibility
  target,
  rel,
  'aria-label': ariaLabel,
  
  ...props
}) => {
  // Handle click events
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  // Set appropriate rel attribute for external links
  const linkRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;

  return (
    <a
      href={href}
      target={target}
      rel={linkRel}
      onClick={handleClick}
      className={twMerge(
        linkClasses({ variant, size }),
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {children || text}
    </a>
  );
};

export default Link;