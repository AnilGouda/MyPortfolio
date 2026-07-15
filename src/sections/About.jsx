import Reveal from '../components/Reveal'
import { profile, coreSkills, supportingSkills, toolset } from '../data/data'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">01 · About</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Backend-first, full-stack curious.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr]">
        <Reveal delay={0.1} className="flex justify-center md:justify-start">
          <div className="group relative h-44 w-44 shrink-0 md:h-52 md:w-52">
            <div className="absolute inset-0 -rotate-3 rounded-2xl border border-line bg-surface transition-transform duration-300 group-hover:rotate-0" />
            <img
              src={profile.avatar}
              alt={profile.name}
              onError={(e) => (e.currentTarget.style.display = 'none')}
              className="relative h-full w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.15} className="space-y-4 text-[15px] leading-relaxed text-muted">
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="font-mono text-sm text-ink">
              <span className="text-amber">// currently:</span> deepening my {profile.learning}
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Core · Backend</h3>
            <div className="mt-4 space-y-3">
              {coreSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between font-mono text-xs text-muted">
                    <span className="text-ink">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal to-amber"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Frontend · Supporting</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {supportingSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35} className="mt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {toolset.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 font-mono text-xs text-ink"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
