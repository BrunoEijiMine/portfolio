import {
  faBox,
  faCode,
  faDatabase,
  faFileCode,
  faLayerGroup,
  faPalette,
  faServer,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const iconMap: Record<string, IconDefinition> = {
  code: faCode,
  server: faServer,
  figma: faFigma,
  wand: faWandMagicSparkles,
  filecode: faFileCode,
  palette: faPalette,
  layers: faLayerGroup,
  database: faDatabase,
  box: faBox,
}
