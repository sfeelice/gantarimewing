'use client'
import React, { useState } from 'react'
import Card from './card'
import Image from 'next/image'

const CardWithModal = ({ src, title, description, contact }) => {
  const [showModal, setShowModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const openContactModal = () => setShowContactModal(true)
  const closeContactModal = () => setShowContactModal(false)

  return (
    <div>
      <Card src={src} title={title} onClick={openModal} />

      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-md overflow-auto">
            <div className="relative h-48 w-full">
              <Image
                src={src}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="py-4">{description}</p>
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

      {showContactModal && (
        <dialog id="contact_modal" className="modal bg-black bg-opacity-50" open>
          <div className="modal-box max-w-sm shadow-xl">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <p className="py-4">
              {contact ? (
                <>
                  You can contact us at:
                  <br /> {contact}
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
  )
}

export default CardWithModal