import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-green-500',
        secondary: 'focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-green-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Get Started",
  text_font_size = "text-sm",
  text_font_family = "Inter",
  text_font_weight = "font-semibold",
  text_line_height = "leading-normal",
  text_text_align = "left",
  text_color = "text-accent-foreground",
  fill_background_color = "bg-primary-background",
  border_border_radius = "rounded-lg",
  layout_align_self = "end",
  
  // Optional parameters (no defaults)
  border_border,
  layout_gap,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidBorder ? `border-[${border_border}]` : '',
    layout_align_self === 'end' ? 'self-end' : 
    layout_align_self === 'start' ? 'self-start' : 
    layout_align_self === 'center' ? 'self-center' : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles = {
    fontSize: text_font_size === "text-sm" ? "16px" : text_font_size,
    fontFamily: text_font_family || 'Inter',
    fontWeight: text_font_weight === "font-semibold" ? "600" : text_font_weight,
    lineHeight: text_line_height === "leading-normal" ? "21px" : text_line_height,
    textAlign: text_text_align || 'center',
    color: text_color === "text-accent-foreground" ? "#1d1d21" : text_color,
    backgroundColor: fill_background_color === "bg-primary-background" ? "#9cee69" : fill_background_color,
    borderRadius: border_border_radius === "rounded-lg" ? "24px" : border_border_radius,
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;