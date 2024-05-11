import React from 'react'
import Tables1 from '../components/Tables1'
import Tables2 from '../components/Tables2'

export default function Earn() {
  return (
    <div id="trading" className='text-white max-w-7xl mx-auto min-w-[320px] my-14'>
      <div className='px-5 xsm:px-10'>
        <div id="Earn" >
          <div className='my-6'>
              <div className='flex gap-2 my-3'>
                <h1 className='font-poppins text-4xl'>Earn</h1>
              </div>
              <p className='text-neutral-300'>Stake $ROMI and $RLP to earn rewards.</p>
          </div>
          <Tables1/>
        </div>

        <div id="Vest" className='my-14'>
          <div className='flex gap-2'>
            <h1 className='font-poppins text-4xl'>Vest</h1>
          </div>
          <p className='text-neutral-300'>Convert esROMI tokens to $ROMI tokens.</p>
          <div className='text-neutral-300'>
            <span> Please read the </span>
            <span className='underline'>vesting details</span>
            <span> before using the vautls.</span>
          </div>

          <Tables2/>
        </div>

      </div>
    </div>
  )
}
