import type { PropsWithChildren } from 'react'
import { Footer } from './Footer'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-black text-neutral-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
