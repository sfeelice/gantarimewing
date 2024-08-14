'use client'
import React, { useState, useEffect } from 'react'
import Card from './card'
import Image from 'next/image'
import axios from 'axios'

const CardWithModal = ({ adminStatus, type }) => {
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Determine the endpoint based on adminStatus and type
        const endpoint =
          adminStatus === 'Baha'
            ? `http://localhost:5000/${type}Baha`
            : `http://localhost:5000/${type}Sobangan`

        const response = await axios.get(endpoint)
        setItems(response.data)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    }

    fetchItems()
  }, [adminStatus, type]);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);
  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  return (
    <div>
      {items.map((item) => (
        <Card
          key={item._id}           // Assuming `item._id` is the unique identifier
          src={item.image.data}    // Assuming `item.image.data` contains the image URL
          title={item.title}       // Assuming `item.title` contains the title
          onClick={() => openModal(item)} // Pass the entire `item` to openModal
        />
      ))}
  
      {showModal && selectedItem && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-md overflow-auto">
            <div className="relative h-48 w-full">
              <Image
                src={selectedItem.image.data}    // Use `selectedItem` to get the image URL
                alt={selectedItem.title}         // Use `selectedItem` to get the title
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">{selectedItem.title}</h3>
            <p className="py-4">{selectedItem.description}</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
              <button className="btn btn-primary" onClick={openContactModal}>
                Contact
              </button>
            </div>
          </div>
        </dialog>
      )}
  
      {showContactModal && selectedItem && (
        <dialog id="contact_modal" className="modal bg-black bg-opacity-50" open>
          <div className="modal-box max-w-sm shadow-xl">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <p className="py-4">
              {selectedItem.kontak ? (
                <>
                  You can contact us at:
                  <br /> {selectedItem.kontak}
                </>
              ) : (
                'No contact information available.'
              )}
            </p>
            <div className="modal-action">
              <button className="btn btn-primary" onClick={closeContactModal}>
                OK
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default CardWithModal;