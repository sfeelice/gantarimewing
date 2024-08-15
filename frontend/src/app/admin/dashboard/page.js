'use client'

import React, { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import axios from 'axios'
import AdminCard from '@/components/adminCard'
import CardWithModal from '@/components/cardWithModal'
import { useAccessToken } from '@/hooks/auth'

const Dashboard = () => {
  const [tourismItems, setTourismItems] = useState([])
  const [culinaryItems, setCulinaryItems] = useState([])
  const [adminStatus, setAdminStatus] = useState('') // Placeholder for admin status
  const [error, setError] = useState('')

  const { accessToken, headers } = useAccessToken() // Call hook at top level
  const [dataFetched, setDataFetched] = useState(false)

  useEffect(() => {
    if (!accessToken || !headers || dataFetched) return

    async function fetchTourismItems(status) {
      try {
        const endpoint =
          status === 'Baha'
            ? 'http://localhost:5000/wisataBaha'
            : 'http://localhost:5000/wisataSobangan'
        const response = await axios.get(endpoint, { headers })
        setTourismItems(response.data)
      } catch (error) {
        console.error('Error fetching tourism items:', error)
      }
    }

    async function fetchCulinaryItems(status) {
      try {
        const endpoint =
          status === 'Baha'
            ? 'http://localhost:5000/kulinerBaha'
            : 'http://localhost:5000/kulinerSobangan'
        const response = await axios.get(endpoint, { headers })
        setCulinaryItems(response.data)
      } catch (error) {
        console.error('Error fetching culinary items:', error)
      }
    }

    async function fetchAdminStatus() {
      try {
        const response = await axios.get('http://localhost:5000/admin/status', { headers })
        setAdminStatus(response.data.status)
        if (response.data.status) {
          fetchTourismItems(response.data.status)
          fetchCulinaryItems(response.data.status)
        }
        setDataFetched(true) // Set dataFetched to true after fetching the data
      } catch (error) {
        console.error('Error fetching admin status:', error)
      }
    }

    fetchAdminStatus()
  }, [accessToken, headers, dataFetched])

  return (
    <div
      className="min-h-screen bg-darkgrey"
      style={{
        backgroundImage: "url('/pattern-white.png')",
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container mx-auto py-12">
        <button
          onClick={() => signOut()}
          type="button"
          className="btn absolute right-4 top-4 rounded rounded-xl bg-red px-4 py-2 text-white hover:bg-red"
        >
          Sign Out
        </button>
        <h1 className="mb-12 text-center text-4xl font-bold">
          Dashboard Administrator Desa {adminStatus}
        </h1>
        <div className="flex justify-around space-x-8">
          <AdminCard
            title="Tourism Section"
            items={tourismItems}
            adminStatus={adminStatus}
            type={'wisata'}
            setError={setError}
            setItem={setTourismItems}
          />
          <AdminCard
            title="Culinary Section"
            items={culinaryItems}
            adminStatus={adminStatus}
            type={'kuliner'}
            setError={setError}
            setItem={setCulinaryItems}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
