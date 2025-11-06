import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

type ButtonVariant = NonNullable<ButtonProps['variant']>;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'inline-block font-bold text-center transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[var(--cinnabar)] text-white hover:bg-[#d63d2a] focus:ring-[color:var(--cinnabar)]',
    secondary:
      'bg-white text-[var(--foreground)] border-2 border-[color:var(--foreground)] hover:bg-gray-50 focus:ring-[color:var(--foreground)]',
    ghost:
      'bg-transparent text-white border border-white/40 hover:bg-white/10 focus:ring-white focus:ring-offset-0',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1DA955] focus:ring-[#1DA955]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} target={target} rel={rel}>
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
