import type { PropsWithChildren } from 'react'

interface CardProps {
  className?: string
}

export function Card({ children, className = '' }: PropsWithChildren<CardProps>) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  )
}
