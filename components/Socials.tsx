import Image from 'next/image'
import React from 'react'

interface Props {
  imageSrc: string
  alt: string
}

const Socials: React.FC<Props> = ({ alt, imageSrc, children }) => {
  return (
    <div className="flex flex-row justify-start gap-5 h-7 items-center mb-4">
      <Image
        src={imageSrc}
        alt={alt}
        width={30}
        height={30}
        priority
        className=""
      />
      {children}
    </div>
  )
}

export default Socials
