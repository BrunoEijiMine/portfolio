import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const HEADING = 'Vamos conversar'
const SUBHEADING = 'Tem um projeto em mente? Me chama e vamos conversar.'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/BrunoEijiMine' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bruno-eiji-1b47b1206/' },
  { label: 'Instagram', href: 'https://www.instagram.com/brunoeiji_/' },
]

export function Contact() {
  return (
    <Section id="contact">
      <Card className="flex flex-col items-center gap-6 p-10 text-center sm:p-16">
        <div>
          <h2 className="text-3xl font-medium text-white sm:text-4xl">{HEADING}</h2>
          <p className="mt-2 text-neutral-400">{SUBHEADING}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
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
