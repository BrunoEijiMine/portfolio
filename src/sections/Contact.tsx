import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const HEADING = 'Vamos conversar'
const DESCRIPTION = 'Estou aberto(a) a novas oportunidades e colaborações. Me manda uma mensagem!'
const EMAIL = 'seuemail@exemplo.com'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/seuusuario' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/seuusuario' },
]

export function Contact() {
  return (
    <Section id="contact">
      <Card className="flex flex-col items-center gap-6 p-10 text-center sm:p-16">
        <h2 className="text-3xl font-medium text-white sm:text-4xl">{HEADING}</h2>
        <p className="max-w-md text-neutral-400">{DESCRIPTION}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${EMAIL}`}>{EMAIL}</Button>
          {SOCIALS.map((social) => (
            <Button key={social.href} href={social.href} target="_blank" rel="noreferrer" variant="secondary">
              {social.label}
            </Button>
          ))}
        </div>
      </Card>
    </Section>
  )
}
