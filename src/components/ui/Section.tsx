import type { PropsWithChildren } from 'react'
import { Container } from './Container'

interface SectionProps {
  id: string
  className?: string
}

export function Section({ id, children, className = '' }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}
