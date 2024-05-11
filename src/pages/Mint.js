import React from 'react'
import Tables1 from '../components/Tables1'

const Mint = () => {
  return (
    <div id="trading" className='text-white max-w-7xl mx-auto min-w-[320px] my-14'>
      <div className='px-5 xsm:px-10'>
        <div id="Earn" >
          <div className='my-6'>
              <div className='flex gap-2 my-3'>
                <h1 className='font-poppins text-4xl'>Mint</h1>
              </div>
              <p className='text-neutral-300'>Stake $ROMI and $RLP to earn rewards.</p>
          </div>
          <Tables1/>
        </div>
      </div>
    </div>
  )
}

export default Mint
