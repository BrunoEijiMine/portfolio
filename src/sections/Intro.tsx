import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ImagePlaceholder } from '@/components/ui/Placeholder'
import { iconMap } from '@/lib/icons'

const HEADING = 'Olá, eu sou Bruno'
const DESCRIPTION =
  'Sou apaixonado por criar soluções que não só têm uma boa aparência, como também entregam resultado.'

const SKILLS = [
  { icon: 'code', label: 'Desenvolvimento Frontend' },
  { icon: 'server', label: 'Desenvolvimento Backend' },
  { icon: 'figma', label: 'Figma' },
  { icon: 'wand', label: 'Motion Design' },
]

const STACK_HEADING = 'Tecnologias que eu uso'

const STACK = [
  { icon: 'code', label: 'React' },
  { icon: 'filecode', label: 'TypeScript' },
  { icon: 'server', label: 'Node.js' },
  { icon: 'palette', label: 'Tailwind CSS' },
  { icon: 'layers', label: 'Next.js' },
  { icon: 'figma', label: 'Figma' },
  { icon: 'database', label: 'PostgreSQL' },
  { icon: 'box', label: 'Docker' },
]

export function Intro() {
  return (
    <Section id="home">
      <Card className="flex flex-col gap-8 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div className="max-w-md">
          <h2 className="text-3xl font-medium text-white sm:text-4xl">{HEADING}</h2>
          <p className="mt-3 text-neutral-400">{DESCRIPTION}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <Badge key={skill.label} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </div>

        <ImagePlaceholder
          className="h-64 w-56 shrink-0 rounded-2xl sm:h-72 sm:w-64"
          label="sua foto aqui"
        />
      </Card>

      <div className="mt-10">
        <p className="mb-4 text-sm font-medium text-neutral-500">{STACK_HEADING}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STACK.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-neutral-300"
              >
                {Icon && <Icon className="h-4 w-4 text-neutral-500" />}
                {item.label}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
