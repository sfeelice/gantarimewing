import React, { useState } from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <p className="text-center mb-4">{message}</p>
        <div className="flex justify-center space-x-4">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded shadow">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded shadow">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminModal = ({ isOpen, onClose, onSave, onDelete, item }) => {
  const [name, setName] = useState(item ? item.name : "");
  const [description, setDescription] = useState(item ? item.description : "");
  const [photo, setPhoto] = useState(null);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState(null);

  const handleSave = () => {
    setConfirmMessage("Are you sure you want to save this item?");
    setConfirmAction(() => () => {
      onSave({ name, description, photo });
      onClose();
      setConfirmOpen(false);
    });
    setConfirmOpen(true);
  };

  const handleDelete = () => {
    setConfirmMessage("Are you sure you want to delete this item?");
    setConfirmAction(() => () => {
      onDelete(item);
      onClose();
      setConfirmOpen(false);
    });
    setConfirmOpen(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{item ? "Edit Item" : "Add New Item"}</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Wisata/Nama Kuliner</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-primary focus:border-primary"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Foto</label>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-primary focus:border-primary" />
          </div>
        </form>
        <div className="flex justify-end mt-6 space-x-4">
          {item && (
            <button type="button" onClick={handleDelete} className="bg-red text-white px-4 py-2 rounded shadow">
              Delete
            </button>
          )}
          <button type="button" onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded shadow">
            Done
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal isOpen={isConfirmOpen} onClose={() => setConfirmOpen(false)} onConfirm={confirmAction} message={confirmMessage} />
    </div>
  );
};

export default AdminModal;
