"use client";
import React, { useState } from "react";
import AdminModal from "./adminModal";

const AdminCard = ({ title, items = [], onAdd, onEdit, onDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddClick = () => {
    setSelectedItem(null);
    setModalOpen(true);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleSave = (item) => {
    if (selectedItem) {
      onEdit(item);
    } else {
      onAdd(item);
    }
  };

  const handleDelete = (item) => {
    onDelete(item);
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={handleAddClick} className="bg-white text-black px-4 py-1 rounded shadow">
          Add
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-primary p-4 rounded">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white"></div>
              <div className="text-lg font-semibold">
                <div>{item.name}</div>
                <div className="text-sm text-gray-700">{item.contact}</div> {/* Display contact info */}
              </div>
            </div>
            <button onClick={() => handleEditClick(item)} className="bg-white text-black px-4 py-1 rounded shadow">
              Edit
            </button>
          </div>
        ))}
      </div>
      <AdminModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} onDelete={handleDelete} item={selectedItem} />
    </div>
  );
};

export default AdminCard;
