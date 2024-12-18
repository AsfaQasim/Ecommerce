import React from 'react'
import Image from 'next/image'

const SlugComponent = () => {
  return (
<div>
    <Image
    src = "/shoes.jpeg"
    alt = "shoes"
    width={400}
    height={40}
     className="lg:w-1/2 w-full flex justify-center items-center"
    />
</div>
  )
}

export default SlugComponent