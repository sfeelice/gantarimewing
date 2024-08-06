import React from "react";
import Image from "next/image";

const Card = ({ src, title, onClick }) => {
  return (
    <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-xl cursor-pointer" onClick={onClick}>
      <Image src={src} alt={title} width={1080} height={1080} className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-end p-4">
        <div className="text-white text-lg font-bold">{title}</div>
      </div>
    </div>
  );
};

export default Card;
