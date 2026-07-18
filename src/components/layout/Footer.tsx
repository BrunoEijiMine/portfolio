import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container } from '@/components/ui/Container'

const NAME = 'Bruno Eiji'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/BrunoEijiMine', icon: faGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bruno-eiji-1b47b1206/', icon: faLinkedinIn },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <span className="flex items-center gap-2">
          © {year} {NAME}
          <span className="flex items-center gap-1.5 text-xs text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Disponível
          </span>
        </span>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-white/30 hover:text-white"
            >
              <FontAwesomeIcon icon={icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
