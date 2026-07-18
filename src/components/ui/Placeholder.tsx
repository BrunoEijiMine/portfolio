import { Image as ImageIcon } from 'lucide-react'

interface PlaceholderProps {
  className?: string
  label?: string
}

// Bloco de espaço reservado — troque por <img> real quando tiver as fotos/renders.
export function ImagePlaceholder({ className = '', label }: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-linear-to-br from-neutral-700/60 via-neutral-800/60 to-neutral-950 text-neutral-500 ${className}`}
    >
      <ImageIcon className="h-6 w-6" strokeWidth={1.5} />
      {label && <span className="text-xs text-neutral-600">{label}</span>}
    </div>
  )
}
