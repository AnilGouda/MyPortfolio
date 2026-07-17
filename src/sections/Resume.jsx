import { Download, Award } from 'lucide-react'
import Reveal from '../components/Reveal'
import { profile, experience, education, certifications } from '../data/data'

function Timeline({ items, keyField }) {
  return (
    <div className="relative border-l border-line pl-8">
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 0.08} className="relative mb-10 last:mb-0">
          <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-teal bg-void" />
          <p className="font-mono text-xs text-muted">{item.period}</p>
          <h4 className="mt-1 font-display text-xl text-ink">{item[keyField]}</h4>
          <p className="text-sm text-teal">{item.org}</p>
          {item.description && <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>}
        </Reveal>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono text-3xl uppercase tracking-[0.05em] text-teal">Resume:</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-2xl">Where I've been.</h2>
        </div>
        <a
          href={profile.resumeUrl}
          download
          className="focus-ring flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          <Download size={16} />
          Download PDF
        </a>
      </Reveal>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">Experience</h3>
          <Timeline items={experience} keyField="role" />
        </div>
        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
          <Timeline items={education} keyField="degree" />
        </div>
      </div>

      {certifications?.length > 0 && (
        <Reveal delay={0.1} className="mt-16">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Certifications</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 rounded-2xl border border-line bg-surface px-5 py-4"
              >
                <Award size={18} className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <p className="text-sm text-ink">{cert.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  )
}
