import React, { useState, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400',
  {
    variants: {
      variant: {
        default: 'focus:ring-green-500 border-gray-300 focus:border-green-500',
        error: 'border-red-500 focus:ring-red-500 focus:border-red-500',
        success: 'border-green-500 focus:ring-green-500 focus:border-green-500',
      },
      size: {
        small: 'text-sm px-3 py-2',
        medium: 'text-base px-4 py-2.5',
        large: 'text-lg px-5 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const EditText = forwardRef(({
  // Required parameters with defaults
  placeholder = "full name",
  text_font_size = "text-sm",
  text_font_family = "Inter",
  text_font_weight = "font-normal",
  text_line_height = "leading-normal",
  text_text_align = "left",
  text_text_transform = "capitalize",
  text_color = "text-text-primary",
  border_border = "1px solid #000000",
  border_border_radius = "rounded-2xl",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  type = "text",
  value,
  onChange,
  disabled = false,
  required = false,
  className,
  error,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Parse border styles
  const parseBorder = (borderStr) => {
    if (!borderStr || typeof borderStr !== 'string') return {};
    
    // Extract width, style, and color from "1px solid #000000" format
    const parts = borderStr?.trim()?.split(' ');
    if (parts?.length >= 3) {
      const width = parts?.[0];
      const style = parts?.[1];
      const color = parts?.slice(2)?.join(' ');
      return { width, style, color };
    }
    return {};
  };

  const borderInfo = parseBorder(border_border);

  // Build inline styles for required parameters
  const inputStyles = {
    fontSize: text_font_size === "text-sm" ? "16px" : text_font_size,
    fontFamily: text_font_family || 'Inter',
    fontWeight: text_font_weight === "font-normal" ? "400" : text_font_weight,
    lineHeight: text_line_height === "leading-normal" ? "21px" : text_line_height,
    textAlign: text_text_align || 'left',
    textTransform: text_text_transform || 'capitalize',
    color: text_color === "text-text-primary" ? "#000000" : text_color,
    borderRadius: border_border_radius === "rounded-2xl" ? "38px" : border_border_radius,
    borderWidth: borderInfo?.width || '1px',
    borderStyle: borderInfo?.style || 'solid',
    borderColor: borderInfo?.color || '#000000',
  };

  // Handle input change
  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setInternalValue(newValue);
    
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  // Determine variant based on error state
  const effectiveVariant = error ? 'error' : variant;

  return (
    <div className="w-full">
      <input
        ref={ref}
        type={type}
        value={value !== undefined ? value : internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        style={inputStyles}
        className={twMerge(
          inputClasses({ variant: effectiveVariant, size }),
          optionalClasses,
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props?.id || 'input'}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${props?.id || 'input'}-error`}
          className="mt-1 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

EditText.displayName = 'EditText';

export default EditText;