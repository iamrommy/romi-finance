import React from 'react'

export default function SimpleButton({text}) {
  return (
    <div>
      <button className='h-min rounded px-1 sm:px-4 py-1.5 hover:bg-[#2a2a2a] border border-neutral-400 '>{text}</button>
    </div>
  )
}
