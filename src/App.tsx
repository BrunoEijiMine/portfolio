import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Loader } from '@/components/ui/Loader'
import { Layout } from '@/components/layout/Layout'
import { Intro } from '@/sections/Intro'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Layout>
        <Intro />
        <Projects />
        <Experience />
        <Contact />
      </Layout>
    </>
  )
}

export default App
