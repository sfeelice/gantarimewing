'use client'
import React, { useState } from 'react'
import AdminModal from './adminModal'
import { useAccessToken } from '@/hooks/auth'
import axios from 'axios'

const AdminCard = ({ title, items = [], adminStatus, type, setError }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const { accessToken, headers } = useAccessToken() // Call hook at top level

  const handleAddItem = async (item) => {
    try {
      const endpoint =
        adminStatus === 'Baha'
          ? `http://localhost:5000/${type}Baha/add`
          : `http://localhost:5000/${type}Sobangan/add`

      const formData = new FormData()
      formData.append('title', item.title)
      formData.append('description', item.description)
      formData.append('kontak', item.contact)
      formData.append('harga', item.harga)
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
          ? `http://localhost:5000/${type}Baha/update/${item._id}`
          : `http://localhost:5000/${type}Sobangan/update/${item._id}`

      const formData = new FormData()
      formData.append('title', item.title)
      formData.append('description', item.description)
      formData.append('kontak', item.contact)
      formData.append('harga', item.harga)
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
          ? `http://localhost:5000/${type}Baha/delete/${item._id}`
          : `http://localhost:5000/${type}Sobangan/delete/${item._id}`

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

  const handleAddClick = () => {
    setSelectedItem(null)
    setModalOpen(true)
  }

  const handleEditClick = (item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const handleSave = async (item) => {
    const formData = new FormData()
    formData.append('title', item.title)
    formData.append('description', item.description)
    formData.append('kontak', item.contact)
    formData.append('harga', item.harga)
    console.log(formData)
    if (item.image) {
      formData.append('image', item.image)
    }

    try {
      console.log(selectedItem)
      selectedItem ? handleEditItem(item) : handleAddItem(item)
    } catch (error) {
      console.error('Failed to save item:', error)
    }
    setModalOpen(false)
  }

  const handleDelete = async (item) => {
    console.log(item)
    try {
      handleDeleteItem(item)
    } catch (error) {
      console.error('Failed to delete item:', error)
    }
  }

  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={handleAddClick} className="rounded bg-white px-4 py-1 text-black shadow">
          Add
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between rounded bg-primary p-4">
            <div className="flex items-center space-x-4">
              {/* ambil data image */}
              <div className="h-12 w-12 bg-white">
                {item.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="text-lg font-semibold">
                <div>{item.title}</div>
                <div className="text-sm text-darkgrey">{item.contact}</div>
                <div className="text-sm text-darkgrey">{item.harga}</div>
              </div>
            </div>
            <button
              onClick={() => handleEditClick(item)}
              className="rounded bg-white px-4 py-1 text-black shadow"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
        item={selectedItem}
      />
    </div>
  )
}

export default AdminCard
