import {
  Box,
  Code2,
  Database,
  FileCode,
  Layers,
  Palette,
  Server,
  Wand2,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { FigmaIcon } from '@/components/icons/BrandIcons'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export const iconMap: Record<string, IconComponent> = {
  code: Code2,
  server: Server,
  figma: FigmaIcon,
  wand: Wand2,
  filecode: FileCode,
  palette: Palette,
  layers: Layers,
  database: Database,
  box: Box,
}
