'use client'
import React, { useState } from 'react'
import AdminModal from './adminModal'

const AdminCard = ({ title, items = [], onAdd, onEdit, onDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

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
    formData.append('kontak', item.kontak)
    if (item.image) {
      formData.append('image', item.image)
    }
    
    const endpointBase = adminStatus === 'Baha' ? 'wisataBaha' : 'wisataSobangan';
    const endpoint = selectedItem 
    ? `http://localhost:5000/${endpointBase}/update/${selectedItem._id}` 
    : `http://localhost:5000/${endpointBase}/add`;

    try {
      await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      selectedItem ? onEdit(item) : onAdd(item)
    } catch (error) {
      console.error('Failed to save item:', error)
    }
    setModalOpen(false)
  }

  const handleDelete = async (item) => {
    try {
      await fetch(`http://localhost:5000/wisataBaha/delete/${item._id}`, {
        method: 'GET',
      })
      onDelete(item)
    } catch (error) {
      console.error('Failed to delete item:', error)
    }
  }

  return (
    <div className="bg-gray-200 w-full max-w-lg rounded-lg p-6 shadow-md">
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
              <div className="h-12 w-12 bg-white"></div>
              <div className="text-lg font-semibold">
                <div>{item.title}</div>
                <div className="text-gray-700 text-sm">{item.contact}</div>
                <div className="text-gray-700 text-sm">{item.harga}</div> 
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
