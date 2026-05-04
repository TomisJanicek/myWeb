import { useEffect, useRef, useCallback } from 'react'

/**
 * Sbírá DOM elementy přes `revealRef` a po mountu je pozoruje
 * IntersectionObserverem. Třída `.revealed` je přidána při průniku.
 *
 * POZOR: refs se nastavují před useEffect — proto sbíráme elementy
 * do pole a observujeme je až po vytvoření observeru v useEffect.
 */
export function useScrollReveal() {
  const pendingEls = useRef<Element[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    // Observuj všechny elementy registrované před tímto efektem
    pendingEls.current.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const revealRef = useCallback((el: Element | null) => {
    if (el) pendingEls.current.push(el)
  }, [])

  return { revealRef }
}
