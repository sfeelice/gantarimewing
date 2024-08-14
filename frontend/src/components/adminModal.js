import React, { useState } from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <p className="mb-4 text-center">{message}</p>
        <div className="flex justify-center space-x-4">
          <button onClick={onClose} className="rounded bg-lightgrey px-4 py-2 text-black shadow">
            Cancel
          </button>
          <button onClick={onConfirm} className="rounded bg-primary px-4 py-2 text-white shadow">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminModal = ({ isOpen, onClose, onSave, onDelete, item }) => {
  const [title, setTitle] = useState(item ? item.title : '');
  const [description, setDescription] = useState(item ? item.description : '');
  const [kontak, setkontak] = useState(item ? item.kontak : '');
  const [harga, setHarga] = useState(item ? item.harga : ''); 
  const [image, setImage] = useState(null);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmAction, setConfirmAction] = useState(null);

  const handleSave = () => {
    setConfirmMessage('Are you sure you want to save this item?');
    setConfirmAction(() => () => {
      onSave({ title, description, kontak, harga, image }); 
      onClose();
      setConfirmOpen(false);
    });
    setConfirmOpen(true);
  };

  const handleDelete = () => {
    setConfirmMessage('Are you sure you want to delete this item?');
    setConfirmAction(() => () => {
      onDelete(item);
      onClose();
      setConfirmOpen(false);
    });
    setConfirmOpen(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl text-lightgrey hover:text-darkgrey"
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-bold">{item ? 'Edit Item' : 'Add New Item'}</h2>
        <form className="space-y-4">
          <div>
            <label className="text-gray-700 block text-sm font-medium">
              Nama Wisata/Nama Kuliner
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 block text-sm font-medium">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 block text-sm font-medium">Contact</label>
            <input
              type="text"
              value={kontak}
              onChange={(e) => setkontak(e.target.value)}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 block text-sm font-medium">Harga</label>
            <input
              type="text"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 block text-sm font-medium">Foto</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-end space-x-4">
          {item && (
            <button
              type="button"
              onClick={handleDelete}
              className="rounded bg-red px-4 py-2 text-white shadow"
            >
              Delete
            </button>
          )}
          <button
            type="button"
            onClick={handleSave}
            className="rounded bg-primary px-4 py-2 text-white shadow"
          >
            Done
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isConfirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmAction}
        message={confirmMessage}
      />
    </div>
  );
};

export default AdminModal;
