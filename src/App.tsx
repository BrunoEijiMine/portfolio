import { Layout } from '@/components/layout/Layout'
import { Intro } from '@/sections/Intro'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'

function App() {
  return (
    <Layout>
      <Intro />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App
