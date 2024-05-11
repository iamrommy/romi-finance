import React from 'react'
import Tables2 from '../components/Tables2'

const StakeNFT = () => {
  return (
    <div id="trading" className='text-white max-w-7xl mx-auto min-w-[320px] my-14'>
      <div className='px-5 xsm:px-10'>
        <div id="Vest" className='my-14'>
          <div className='flex gap-2'>
            <h1 className='font-poppins text-4xl'>StakeNFT</h1>
          </div>
          <p className='text-neutral-300'>Convert esROMI tokens to $ROMI tokens.</p>
          <div className='text-neutral-300'>
            <span> Please read the </span>
            <span className='underline'>details</span>
            <span> before using the vautls.</span>
          </div>
          <Tables2/>
        </div>
      </div>
    </div>
  )
}

export default StakeNFT
