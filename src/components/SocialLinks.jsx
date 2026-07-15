import { Github, Linkedin, Instagram } from 'lucide-react'
import { social } from '../data/data'

const items = [
  { key: 'github', href: social.github, Icon: Github, label: 'GitHub' },
  { key: 'linkedin', href: social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { key: 'instagram', href: social.instagram, Icon: Instagram, label: 'Instagram' },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ key, href, Icon, label }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="focus-ring group flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-teal hover:text-teal"
        >
          <Icon size={18} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  )
}
