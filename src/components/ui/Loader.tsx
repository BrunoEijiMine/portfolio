import { motion } from 'motion/react'

const NAME = 'bruno eiji'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const letter = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex text-xl font-light tracking-[0.3em] text-neutral-600 sm:text-2xl"
      >
        {NAME.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  )
}
