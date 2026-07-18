import type { PropsWithChildren } from 'react'
import { motion } from 'motion/react'
import { Container } from './Container'

interface SectionProps {
  id: string
  className?: string
}

export function Section({ id, children, className = '' }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-20 ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  )
}
