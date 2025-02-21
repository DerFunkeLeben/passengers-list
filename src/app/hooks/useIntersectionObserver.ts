import { useEffect, useRef, useState } from 'react'

const useIntersectionObserver = () => {
  const [page, setPage] = useState(1)
  const loaderRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1 },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return {
    page,
    loaderRef,
  }
}

export default useIntersectionObserver
