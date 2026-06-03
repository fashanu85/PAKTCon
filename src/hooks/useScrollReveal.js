import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0 }
    )

    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default useScrollReveal
