import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLock } from '@fortawesome/free-solid-svg-icons'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import logoInforma from '@/assets/logo-informa.png'
import logoHa from '@/assets/logo-ha.webp'

const HEADING = 'Projetos'
const PRIVATE_NOTE =
  'Os demais projetos em que atuei são de caráter interno/confidencial e não podem ser exibidos publicamente. Entre em contato para saber mais sobre minha experiência.'

const PROJECTS = [
  {
    title: 'Informa Solutions',
    role: 'Desenvolvimento Front-end',
    logo: logoInforma,
    description:
      'O projeto contempla tanto a aplicação principal quanto um painel administrativo completo, permitindo o gerenciamento de conteúdo e funcionalidades de forma centralizada.',
    objectives: [
      { label: 'Rebrand', description: 'Modernização completa de sistema legado' },
      { label: 'Performance', description: 'Interface rápida e responsiva com Vite' },
      { label: 'UX/UI', description: 'Experiência intuitiva para usuários e administradores' },
      { label: 'Manutenibilidade', description: 'Código escalável com boas práticas TypeScript' },
    ],
    stack: [
      { icon: 'react', label: 'React' },
      { icon: 'typescript', label: 'TypeScript' },
      { icon: 'vite', label: 'Vite' },
      { icon: 'styledcomponents', label: 'Styled Components' },
      { icon: 'framermotion', label: 'Framer Motion' },
      { icon: 'swiper', label: 'Swiper' },
      { icon: 'i18next', label: 'i18next' },
      { icon: 'axios', label: 'Axios' },
      { icon: 'eslint', label: 'ESLint' },
      { icon: 'prettier', label: 'Prettier' },
    ],
  },
  {
    title: 'HA Colaborador',
    role: 'Desenvolvimento Mobile',
    logo: logoHa,
    description:
      'Aplicativo que facilita o dia a dia dos colaboradores do Hospital de Amor. Por meio dele é possível consultar informações essenciais, como registro de ponto, banco de horas e holerites, de forma rápida e segura.',
    stack: [
      { icon: 'react', label: 'React Native' },
      { icon: 'react', label: 'React.js' },
      { icon: 'python', label: 'Python' },
      { icon: 'etl', label: 'ETL' },
      { icon: 'airflow', label: 'Apache Airflow' },
      { icon: 'aws', label: 'AWS Lambda' },
      { icon: 'aws', label: 'Amazon Web Services' },
      { icon: 'lex', label: 'Amazon Lex' },
      { icon: 'twilio', label: 'Twilio' },
      { icon: 'containerization', label: 'Containerization' },
      { icon: 'docker', label: 'Docker' },
    ],
  },
  {
    title: 'HA Conecta',
    role: 'Desenvolvimento Front-end',
    logo: logoHa,
    description:
      'Plataforma que conecta o Hospital de Amor a pacientes e serviços, facilitando o acesso, a comunicação e o cuidado contínuo.',
    stack: [
      { icon: 'html', label: 'HTML' },
      { icon: 'css', label: 'CSS' },
      { icon: 'js', label: 'JS' },
      { icon: 'php', label: 'PHP' },
      { icon: 'bootstrap', label: 'Bootstrap' },
    ],
  },
]

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-medium text-white sm:text-4xl">{HEADING}</h2>

      <div className="mt-8 flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <Card key={project.title} className="flex flex-col p-8">
            <div className="flex items-center gap-3">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.title}
                  className="h-14 w-14 rounded-lg bg-white/5 object-contain p-1.5"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/5 text-neutral-400">
                  <FontAwesomeIcon icon={faCode} className="h-6 w-6" />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                <p className="text-sm text-neutral-500">{project.role}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <p className="text-neutral-400">{project.description}</p>
              {project.objectives && (
                <ul className="grid grid-cols-1 gap-1.5 text-sm text-neutral-400 sm:grid-cols-2">
                  {project.objectives.map((objective) => (
                    <li key={objective.label}>
                      <span className="font-medium text-neutral-200">{objective.label}:</span>{' '}
                      {objective.description}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-1 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item.label} icon={item.icon} label={item.label} />
                ))}
              </div>
            </div>
          </Card>
        ))}

        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/15 p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-neutral-400">
            <FontAwesomeIcon icon={faLock} className="h-5 w-5" />
          </div>
          <p className="max-w-md text-sm text-neutral-400">{PRIVATE_NOTE}</p>
        </div>
      </div>
    </Section>
  )
}
