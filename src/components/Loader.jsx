import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [line, setLine] = useState('')
  const full = 'connecting to server...'

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      i++
      setLine(full.slice(0, i))
      if (i >= full.length) clearInterval(typing)
    }, 38)

    const timeout = setTimeout(() => setVisible(false), 1400)
    return () => {
      clearInterval(typing)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
        >
          <div className="font-mono text-sm text-muted">
            <span className="text-teal">→</span> {line}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-amber animate-blink" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
