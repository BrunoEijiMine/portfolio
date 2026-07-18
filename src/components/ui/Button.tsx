import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-white text-black hover:bg-neutral-200',
  secondary: 'border border-white/15 text-white hover:bg-white/10',
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
