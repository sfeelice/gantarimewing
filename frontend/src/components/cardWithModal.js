"use client";
import React, { useState } from "react";
import Card from "./Card";
import Image from "next/image";

const CardWithModal = ({ src, title, description }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
              <a href="/contact-us" className="btn btn-primary">
                Contact
              </a>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CardWithModal;
