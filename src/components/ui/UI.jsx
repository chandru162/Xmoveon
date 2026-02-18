import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const ulClasses = cva(
  'list-none',
  {
    variants: {
      variant: {
        default: '',
        bulleted: 'list-disc list-inside',
        numbered: 'list-decimal list-inside',
        none: 'list-none',
      },
      spacing: {
        tight: 'space-y-1',
        normal: 'space-y-2',
        relaxed: 'space-y-4',
        loose: 'space-y-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      spacing: 'normal',
    },
  }
);

const Ul = ({
  // Content
  children,
  items = [],
  
  // Styling variants
  variant,
  spacing,
  
  // Custom styling
  className,
  
  // List properties
  role = "list",
  
  ...props
}) => {
  // Render items from array if provided
  const renderItems = () => {
    if (items?.length > 0) {
      return items?.map((item, index) => (
        <li key={index} role="listitem">
          {typeof item === 'string' ? item : item}
        </li>
      ));
    }
    return children;
  };

  return (
    <ul
      role={role}
      className={twMerge(
        ulClasses({ variant, spacing }),
        className
      )}
      {...props}
    >
      {renderItems()}
    </ul>
  );
};

export default Ul;