/**
 * Fixed footer shown only on localhost in development.
 * Displays the current Firebase project ID to avoid confusion with prod.
 */
import { useState, useEffect } from 'react'

export default function DevFirebaseFooter() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      setShow(true)
    }
  }, [])

  if (!show) return null

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '—'

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-gray-300 text-xs py-1.5 px-4 text-center font-mono"
      role="status"
      aria-label={`Firebase project: ${projectId}`}
    >
      Firebase project: <span className="text-amber-400 font-semibold">{projectId}</span>
    </div>
  )
}
