import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Loader />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
