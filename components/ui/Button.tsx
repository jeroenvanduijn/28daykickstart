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
  const baseStyles = 'inline-block font-bold text-center transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg';

  const variantStyles = {
    primary: 'bg-[--cinnabar] text-white hover:bg-[#d63d2a] hover:shadow-xl focus:ring-[--cinnabar]',
    secondary: 'bg-white text-[--foreground] border-2 border-[--foreground] hover:bg-gray-50 hover:shadow-xl focus:ring-[--foreground]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
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
