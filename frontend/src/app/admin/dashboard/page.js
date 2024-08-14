'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminCard from '@/components/adminCard'
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

  const handleAddItem = async (item) => {
    try {
      const endpoint =
        adminStatus === 'Baha'
          ? 'http://localhost:5000/wisataBaha/add'
          : 'http://localhost:5000/wisataSobangan/add'

      const formData = new FormData()
      formData.append('title', item.title)
      formData.append('description', item.description)
      formData.append('image', item.image) // Append the file

      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...headers,
        },
      })

      if (response.status === 200) {
        alert('Item added successfully!')
      }
    } catch (error) {
      setError('Error adding item')
      console.error('Error adding item:', error)
    }
  }

  const handleEditItem = async (item) => {
    try {
      const endpoint =
        adminStatus === 'Baha'
          ? `http://localhost:5000/wisataBaha/update/${item._id}`
          : `http://localhost:5000/wisataSobangan/update/${item._id}`

      const formData = new FormData()
      formData.append('title', item.title)
      formData.append('description', item.description)
      formData.append('image', item.image) // Append the file if necessary

      const response = await axios.post(endpoint, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        alert('Item updated successfully!')
      }
    } catch (error) {
      setError('Error updating item')
      console.error('Error updating item:', error)
    }
  }

  const handleDeleteItem = async (item) => {
    try {
      const endpoint =
        adminStatus === 'Baha'
          ? `http://localhost:5000/wisataBaha/delete/${item._id}`
          : `http://localhost:5000/wisataSobangan/delete/${item._id}`

      await axios.get(endpoint, {
        headers,
      })

      alert('Item deleted successfully!')
      // Refresh the list of items
    } catch (error) {
      setError('Error deleting item')
      console.error('Error deleting item:', error)
    }
  }

  return (
    <div
      className="bg-gray-100 min-h-screen"
      style={{
        backgroundImage: "url('/pattern-white.png')",
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container mx-auto py-12">
        <h1 className="mb-12 text-center text-4xl font-bold">Dashboard Administrator</h1>
        <div className="flex justify-around space-x-8">
          <AdminCard
            title="Tourism Section"
            items={tourismItems}
            onAdd={handleAddItem}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
          <AdminCard
            title="Culinary Section"
            items={culinaryItems}
            onAdd={handleAddItem} // Adjust if there's a different handler for culinary items
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
