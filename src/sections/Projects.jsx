import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Server } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects, projectCategories } from '../data/data'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">03 · Projects</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Things I've built.</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`focus-ring rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                filter === cat ? 'border-teal bg-teal/10 text-teal' : 'border-line text-muted hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-teal/50"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                  {project.category}
                </span>
                <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} repository`}
                    className="focus-ring text-muted hover:text-ink"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="focus-ring text-muted hover:text-ink"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <h3 className="mt-4 font-display text-xl text-ink">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

              {project.architecture && (
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-void/50 px-3 py-2 font-mono text-[11px] text-muted">
                  <Server size={13} className="mt-0.5 shrink-0 text-amber" />
                  <span>{project.architecture}</span>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
