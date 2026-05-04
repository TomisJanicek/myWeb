import { useState, useEffect } from 'react'

export function useTypewriter(fullText: string, speed = 55) {
  const [typedText, setTypedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let aborted = false
    let i = 0

    const type = () => {
      if (aborted) return
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
        setTimeout(type, speed)
      }
    }

    const startDelay = setTimeout(type, 600)

    return () => {
      aborted = true
      clearTimeout(startDelay)
    }
  }, [fullText, speed])

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return { typedText, cursorVisible }
}
