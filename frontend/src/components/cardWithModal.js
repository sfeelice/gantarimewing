"use client";
import React, { useState } from "react";
import Card from "./Card";
import Image from "next/image";

const CardWithModal = ({ src, title, description }) => {
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  return (
    <div>
      <Card src={src} title={title} onClick={openModal} />

      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-w-md max-h-[90vh] overflow-auto">
            <div className="relative w-full h-48">
              <Image src={src} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <h3 className="font-bold text-lg mt-4">{title}</h3>
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
        <dialog id="contact_modal" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Contact Information</h3>
            <p className="py-4">
              You can contact us at:
              <br /> +123 456 7890.
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
};

export default CardWithModal;
