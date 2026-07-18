import { motion } from 'motion/react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import logoHa from '@/assets/logo-ha.webp'

const HEADING = 'Experiência'

const EXPERIENCE = [
  {
    company: 'Hospital de Amor',
    logo: logoHa,
    totalDuration: '4 anos 9 meses',
    roles: [
      {
        title: 'Analista Programador',
        type: 'Tempo integral',
        duration: 'Atual',
        location: 'Barretos, São Paulo',
        description:
          'Atuação em Desenvolvimento Web e Mobile, com foco na programação e criação de templates no sistema Tasy. Experiência em análise de requisitos, desenvolvimento de interfaces com ênfase em design UI/UX, visando usabilidade e performance. Participação ativa na manutenção e evolução de sistemas internos, integração entre módulos, testes e suporte a usuários.',
      },
      {
        title: 'Assistente Programador III',
        type: 'Tempo integral',
        period: 'mai de 2023 - jul de 2025',
        duration: '2 anos 3 meses',
        location: 'Barretos - SP',
      },
      {
        title: 'Jovem Aprendiz - TI',
        type: 'Aprendiz',
        period: 'nov de 2021 - abr de 2023',
        duration: '1 ano 6 meses',
        location: 'Barretos - SP',
      },
    ],
  },
]

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-medium text-white sm:text-4xl">{HEADING}</h2>

      <div className="mt-8 flex flex-col gap-6">
        {EXPERIENCE.map((entry) => (
          <Card key={entry.company} className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={entry.logo}
                  alt={entry.company}
                  className="h-14 w-14 rounded-lg bg-white/5 object-contain p-1.5"
                />
                <h3 className="text-lg font-medium text-white">{entry.company}</h3>
              </div>
              <span className="shrink-0 text-xs text-neutral-500">{entry.totalDuration}</span>
            </div>

            <div className="relative mt-6 flex flex-col gap-6">
              <div className="absolute top-2 bottom-2 left-1.75 w-px bg-white/10" />
              {entry.roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="relative pl-6"
                >
                  <span className="absolute top-1.5 left-0 h-3.75 w-3.75 rounded-full border-2 border-neutral-950 bg-neutral-500" />
                  <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-medium text-white">{role.title}</h4>
                      <span className="shrink-0 text-xs text-neutral-500">{role.duration}</span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      {role.type}
                      {role.period && ` · ${role.period}`}
                    </p>
                    <p className="text-sm text-neutral-500">{role.location}</p>
                    {role.description && (
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                        {role.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
