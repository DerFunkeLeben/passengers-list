import { useState, useEffect } from 'react'

interface ApiResponse<T> {
  data: T | null
  loading: boolean
  error: string | null
}

/**
 * Пользовательский хук useFetch.
 * @param url URL для запроса.
 * @returns Состояние запроса, данные, ошибка и статус загрузки.
 */
function useFetch<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
