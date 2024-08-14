import React from 'react'
import Image from 'next/image'

const Card = ({ src, title, onClick }) => {
  return (
    <div
      className="relative h-72 w-72 cursor-pointer overflow-hidden rounded-3xl shadow-xl"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={title}
        width={1080}
        height={1080}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-end p-4">
        <div className="text-lg font-bold text-white">{title}</div>
      </div>
    </div>
  )
}

export default Card
