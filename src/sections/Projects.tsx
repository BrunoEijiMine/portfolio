import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ImagePlaceholder } from '@/components/ui/Placeholder'

const HEADING = 'Projetos'

const PROJECTS = [
  {
    title: 'Nimbus',
    description: 'Dashboard SaaS multiempresa (React + Tailwind)',
    ctaLabel: 'Ver projeto',
    ctaHref: '#',
  },
  {
    title: 'Fluxo',
    description: 'Landing page minimalista para produto (Next.js)',
    ctaLabel: 'Ver projeto',
    ctaHref: '#',
  },
  {
    title: 'Órbita',
    description: 'Tema de e-commerce personalizado para pequenas empresas',
    ctaLabel: 'Ver projeto',
    ctaHref: '#',
  },
]

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-medium text-white sm:text-4xl">{HEADING}</h2>

      <div className="mt-8 flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col overflow-hidden sm:flex-row sm:items-stretch"
          >
            <ImagePlaceholder
              className="h-56 w-full sm:h-auto sm:w-2/5"
              label={project.title}
            />
            <div className="flex flex-1 flex-col justify-center gap-3 p-8">
              <h3 className="text-2xl font-medium text-white">{project.title}</h3>
              <p className="text-neutral-400">{project.description}</p>
              <a
                href={project.ctaHref}
                className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                {project.ctaLabel}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
