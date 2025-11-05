import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-[--jonquil] text-black hover:bg-[--cinnabar] hover:text-white focus:ring-[--jonquil] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.25)]',
    secondary: 'bg-white text-[--foreground] border-2 border-[--foreground] hover:bg-gray-50 hover:shadow-xl focus:ring-[--foreground] rounded-lg',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-w-[120px]',
    md: 'px-6 py-3 text-base min-w-[200px]',
    lg: 'px-8 py-4 text-lg min-w-[280px]',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
