import type { PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
}

export function Container({ children, className = '' }: PropsWithChildren<ContainerProps>) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
  )
}
