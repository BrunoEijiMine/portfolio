import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { iconMap } from '@/lib/icons'
import photo from '@/assets/eu.jpeg'

const HEADING = 'Olá, eu sou Bruno'
const DESCRIPTION =
  'Sou apaixonado por criar soluções que não só têm uma boa aparência, como também entregam resultado.'

const SKILLS = [
  { icon: 'code', label: 'Front-end' },
  { icon: 'palette', label: 'UI/UX' },
  { icon: 'figma', label: 'Figma' },
  { icon: 'computer', label: 'Tasy Template' },
]

const STACK_HEADING = 'Tecnologias que eu uso'

const STACK = [
  { icon: 'html', label: 'HTML' },
  { icon: 'css', label: 'CSS' },
  { icon: 'js', label: 'JS' },
  { icon: 'js', label: 'jQuery' },
  { icon: 'react', label: 'React' },
  { icon: 'tailwind', label: 'Tailwind CSS' },
  { icon: 'bootstrap', label: 'Bootstrap' },
  { icon: 'git', label: 'Git' },
  { icon: 'figma', label: 'Figma' },
  { icon: 'adobexd', label: 'Adobe XD' },
  { icon: 'photoshop', label: 'Photoshop' },
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

        <img
          src={photo}
          alt="Bruno Eiji"
          className="h-64 w-56 shrink-0 rounded-2xl object-cover sm:h-72 sm:w-64"
        />
      </Card>

      <div className="mt-10">
        <p className="mb-4 text-sm font-medium text-neutral-500">{STACK_HEADING}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STACK.map((item) => {
            const icon = iconMap[item.icon]
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-neutral-300"
              >
                {icon && <FontAwesomeIcon icon={icon} className="h-4 w-4 text-neutral-500" />}
                {item.label}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
