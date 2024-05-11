import React from 'react'

export default function GreenButton({text}) {
  return (
    <div>
      <button className='h-min rounded px-1 sm:px-4 py-1.5 bg-[#3eb489] hover:bg-[#207a59]'>{text}</button>
    </div>
  )
}
