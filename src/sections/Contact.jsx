import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Check, Copy, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import { profile } from '../data/data'

// Fill these in from your EmailJS dashboard (emailjs.com) to enable real sending.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { from_name: form.name, from_email: form.email, message: form.message },
          EMAILJS_PUBLIC_KEY
        )
      }
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">04 · Contact</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Let's build something.</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
          Have a backend problem worth solving, or an opening on your team? My inbox is open.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal delay={0.1} className="space-y-6">
          <button
            onClick={copyEmail}
            className="focus-ring flex w-full items-center justify-between rounded-2xl border border-line bg-surface px-5 py-4 text-left transition-colors hover:border-teal/50"
          >
            <div>
              <p className="font-mono text-xs text-muted">email</p>
              <p className="mt-1 text-sm text-ink">{profile.email}</p>
            </div>
            {copied ? <Check size={18} className="text-amber" /> : <Copy size={18} className="text-muted" />}
          </button>

          <div className="rounded-2xl border border-line bg-surface px-5 py-4">
            <p className="font-mono text-xs text-muted">based in</p>
            <p className="mt-1 text-sm text-ink">{profile.location}</p>
          </div>

          <div className="rounded-2xl border border-line bg-surface px-5 py-4">
            <p className="mb-3 font-mono text-xs text-muted">elsewhere</p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted">
                name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="focus-ring w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/60"
                placeholder="Jane Doe"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-muted">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="focus-ring w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/60"
                placeholder="jane@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted">
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="focus-ring w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/60"
                placeholder="Tell me a bit about the role or project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-center text-xs text-amber">Thanks — I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-xs text-red-400">
                Something went wrong. Try again, or email me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
