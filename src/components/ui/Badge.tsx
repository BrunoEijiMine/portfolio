import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMap } from '@/lib/icons'

interface BadgeProps {
  icon: string
  label: string
}

export function Badge({ icon, label }: BadgeProps) {
  const icon_ = iconMap[icon]

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
      {icon_ && <FontAwesomeIcon icon={icon_} className="h-4 w-4 text-neutral-400" />}
      {label}
    </span>
  )
}
