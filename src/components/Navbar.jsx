import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'hero', label: 'hero' },
  { id: 'about', label: 'about' },
  { id: 'resume', label: 'resume' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]

const ids = NAV_ITEMS.map((n) => n.id)

export default function Navbar({ theme, toggleTheme }) {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <div className="flex w-full max-w-2xl items-center justify-between rounded-full border border-line bg-surface/70 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-md">
          <button
            onClick={() => scrollTo('hero')}
            className="focus-ring rounded-full px-2 font-mono text-sm font-medium text-ink"
          >
            an<span className="text-teal">;</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`focus-ring relative rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${
                  active === item.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-line bg-void"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:text-ink"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:text-ink md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-line bg-surface/95 p-2 shadow-xl backdrop-blur-md md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`focus-ring block w-full rounded-xl px-4 py-3 text-left font-mono text-sm ${
                active === item.id ? 'bg-void text-ink' : 'text-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  )
}
