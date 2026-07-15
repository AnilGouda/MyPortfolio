import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, FolderGit2 } from 'lucide-react'
import { profile } from '../data/data'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  const [typedTagline, setTypedTagline] = useState('')

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i++
      setTypedTagline(profile.tagline.slice(0, i))
      if (i >= profile.tagline.length) clearInterval(t)
    }, 30)
    return () => clearInterval(t)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="schema-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal/10 blur-[120px]" />
      <div className="animate-floatSlow pointer-events-none absolute right-10 top-40 h-40 w-40 rounded-full bg-amber/10 blur-[90px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {profile.available && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-teal" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            status: available for work
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-teal"
        >
          {profile.role}
        </motion.p>

        {/* API response console — signature element */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 w-full max-w-xl overflow-hidden rounded-xl border border-line bg-surface text-left shadow-2xl shadow-black/30"
        >
          <div className="flex items-center justify-between border-b border-line bg-void/40 px-4 py-2.5">
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="rounded bg-teal/15 px-1.5 py-0.5 font-semibold text-teal">GET</span>
              /api/profile
            </div>
            <span className="rounded bg-teal/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-teal">
              200 OK
            </span>
          </div>
          <div className="flex px-5 py-5 font-mono text-sm leading-relaxed">
            <div className="mr-4 select-none text-right text-muted/50">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n}>{n}</div>
              ))}
            </div>
            <div className="text-ink">
              <div>{'{'}</div>
              <div className="pl-4">
                <span className="text-amber">"name"</span>: <span className="text-teal">"{profile.name}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-amber">"role"</span>: <span className="text-teal">"{profile.role}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-amber">"summary"</span>: <span className="text-teal">"{typedTagline}</span>
                <span className="inline-block h-4 w-1.5 translate-y-0.5 bg-teal animate-blink" />
                <span className="text-teal">"</span>
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="focus-ring group flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
          >
            <FolderGit2 size={16} />
            View projects
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="focus-ring flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download resume
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
          <SocialLinks className="mt-8" />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="focus-ring absolute bottom-8 flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted"
      >
        <ArrowDown size={16} />
      </motion.button>
    </section>
  )
}
