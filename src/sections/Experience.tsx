import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const HEADING = 'Experiência'

const EXPERIENCE = [
  {
    company: 'Estúdio Vega',
    role: 'Desenvolvedor(a) Front-end Sênior',
    period: '2022 — Atual',
    description:
      'Liderando o desenvolvimento de interfaces para produtos digitais de alto impacto.',
  },
  {
    company: 'NordTech',
    role: 'Desenvolvedor(a) Jr.',
    period: '2020 — 2022',
    description: 'Experiências web com foco em performance e tecnologia inovadora.',
  },
  {
    company: 'Agência Prisma',
    role: 'Desenvolvedor(a) de Produto',
    period: '2018 — 2020',
    description: 'Soluções sob medida com coaching de UX e melhoria contínua.',
  },
  {
    company: 'Freelance',
    role: 'Desenvolvedor(a) Web',
    period: '2016 — 2018',
    description: 'Criatividade, expertise técnica e paixão por design em cada projeto.',
  },
]

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-medium text-white sm:text-4xl">{HEADING}</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {EXPERIENCE.map((item) => (
          <Card key={item.company} className="flex flex-col p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium text-white">{item.company}</h3>
              <span className="shrink-0 text-xs text-neutral-500">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-400">{item.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
