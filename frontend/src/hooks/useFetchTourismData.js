import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAccessToken } from '@/hooks/auth'

const useFetchTourismData = (type, adminStatus) => {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const { headers } = useAccessToken()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint =
          adminStatus === 'Baha'
            ? `http://localhost:5000/${type}Baha`
            : `http://localhost:5000/${type}Sobangan`
        const response = await axios.get(endpoint, { headers })
        setItems(response.data)
      } catch (error) {
        setError('Error fetching data')
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [type, adminStatus, headers])

  return { items, error }
}

export default useFetchTourismData
