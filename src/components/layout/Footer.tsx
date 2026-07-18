import { Container } from '@/components/ui/Container'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'

const NAME = 'Bruno Eiji'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/seuusuario', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/seuusuario', Icon: LinkedinIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <span>
          © {year} {NAME}
        </span>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-white/30 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
