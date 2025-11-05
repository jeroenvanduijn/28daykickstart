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
  const baseStyles = 'inline-flex items-center justify-center font-bold text-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 transform hover:scale-105 active:scale-100';

  const variantStyles = {
    primary: 'bg-[--jonquil] text-black hover:bg-[--cinnabar] hover:text-white focus:ring-[--jonquil]/50 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.45)]',
    secondary: 'bg-white text-[--foreground] border-2 border-[--foreground] hover:bg-gray-50 hover:shadow-xl focus:ring-[--foreground]/30 rounded-lg shadow-md',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm min-w-[140px]',
    md: 'px-7 py-3.5 text-base min-w-[220px]',
    lg: 'px-10 py-5 text-xl font-extrabold min-w-[300px]',
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
