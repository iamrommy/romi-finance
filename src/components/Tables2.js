import React from 'react'
import GreenButton from './GreenButton'

const Tables2 = () => {
  return (
    <div className='lg:flex my-8 gap-4'>
            <div className='max-w-5xl lg:max-w-[40rem] lg:h-full border border-neutral-600 rounded w-full bg-[#151515] flex flex-col justify-between'>
              <div>
                <h1 className='h-14 px-5 text-white flex items-center border-b border-neutral-600'>$ROMI Vault</h1>
                <div className='flex flex-col py-4'>
                  <div className='space-y-1 text-neutral-400 font-medium'>
                    <div className='flex justify-between px-4'>
                      <p>Staked Tokens</p> <span className='text-white'>...</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Reserved for Vesting</p> <span className='text-white'>0.00 / ...</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Vesting Status</p> <span className='text-white'>0.0000 / 0.0000</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Claimable</p> <span className='text-white'>0.000 $ROMI</span>
                    </div>
                  </div>
                </div>
              </div>              
              
              <div className='text-white px-4 py-4 border-t border-neutral-600'>
                <GreenButton text="Connect Wallet"/>
              </div>
            </div>

            <div className='max-w-5xl lg:max-w-[40rem] lg:h-full border border-neutral-600 rounded w-full bg-[#151515] flex flex-col justify-between'>
              <div>
                <h1 className='h-14 px-5 text-white flex items-center border-b border-neutral-600'>$RLP Vault</h1>
                <div className='flex flex-col py-4'>
                  <div className='space-y-1 text-neutral-400 font-medium'>
                    <div className='flex justify-between px-4'>
                      <p>Staked Tokens</p> <span className='text-white'>...$RLP</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Reserved for Vesting</p> <span className='text-white'>0.00 / ...</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Vesting Status</p> <span className='text-white'>0.0000 / 0.0000</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Claimable</p> <span className='text-white'>0.000 $ROMI</span>
                    </div>
                  </div>
                </div>
              </div>              
              
              <div className='text-white px-4 py-4 border-t border-neutral-600'>
                <GreenButton text="Connect Wallet"/>
              </div>
            </div>

            

          </div>
  )
}

export default Tables2
