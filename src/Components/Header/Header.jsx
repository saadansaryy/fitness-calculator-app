import React from 'react'

function Header({title,color}) {
  return (
    <div className='font-space-grotesk'>
      <h1 className={` text-2xl md:text-4xl ${color} tracking-wide`}>{title}</h1>
    </div>
  )
}

export default Header
