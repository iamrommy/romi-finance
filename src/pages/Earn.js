import React from 'react'
import CryptoValues from '../components/CryptoValues.json'
import GreenButton from '../components/GreenButton'

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
          <div className='lg:grid lg:grid-flow-col lg:grid-rows-2 lg:gap-4 space-y-4 lg:space-y-0'>
            {
            CryptoValues.crypto_currencies.map(({name, price, wallet, staked, APR, rewards, multiplier_points_APR, boost_percentage, total_staked, total_supply}, i) =>{
              return <div className='max-w-5xl lg:max-w-[40rem] border border-neutral-600 rounded w-full bg-[#151515]' key={i}>
                <h1 className='h-14 px-5 text-white flex items-center border-b border-neutral-600'>{name}</h1>
                <ul className='space-y-1 text-neutral-400 font-medium'>
                  <li className='flex justify-between px-4 pt-3'>
                    <p>Price</p> <span className='text-white border-b border-dashed border-white'>{price}</span>
                  </li>
                  <li className='flex justify-between px-4'>
                    <p>Wallet</p> <span className='text-white border-b border-dashed border-white'>{wallet}</span>
                  </li>
                  <li className='flex justify-between px-4 border-b border-neutral-600 pb-3'>
                    <p>Staked</p> <span className='text-white border-b border-dashed border-white'>{staked}</span>
                  </li>
                  <li className='flex justify-between px-4 pt-3'>
                    <p>APR</p> <span className='text-white border-b border-dashed border-white'>{APR}</span>
                  </li>
                  <li className='flex justify-between px-4'>
                    <p>Rewards</p> <span className='text-white border-b border-dashed border-white'>{rewards}</span>
                  </li>
                  <li className='flex justify-between px-4'>
                    <p>Multiplier Points APR</p> <span className='text-white border-b border-dashed border-white'>{multiplier_points_APR}</span>
                  </li>
                  <li className='flex justify-between px-4 border-b border-neutral-600 pb-3'>
                    <p>Boost Percentage</p> <span className='text-white border-b border-dashed border-white'>{boost_percentage}</span>
                  </li>
                  <li className='flex justify-between px-4 pt-3'>
                    <p>Total Staked</p> <span className='text-white border-b border-dashed border-white'>{total_staked}</span>
                  </li>
                  <li className='flex justify-between px-4 border-b border-neutral-600 pb-3'>
                    <p>Total Supply</p> <span className='text-white border-b border-dashed border-white'>{total_supply}</span>
                  </li>
                  <li className='text-white px-4 pb-4 pt-3'>
                    <GreenButton text={`Buy ${name}`}/>
                  </li>
                </ul>
              </div>
            })}
            <div className='max-w-5xl lg:max-w-[40rem] lg:h-full border border-neutral-600 rounded w-full bg-[#151515] flex flex-col justify-between'>
              <div>
                <h1 className='h-14 px-5 text-white flex items-center border-b border-neutral-600'>Total Rewards</h1>
                <div className='flex flex-col py-4'>
                  <div className='space-y-1 text-neutral-400 font-medium'>
                    <div className='flex justify-between px-4'>
                      <p>ETH (WETH)</p> <span className='text-white'>...($...)</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>$ROMI</p> <span className='text-white'>...($...)</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Escrowed $ROMI</p> <span className='text-white'>...($...)</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Multiplier Points</p> <span className='text-white'>...</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Stake Multiplier Points</p> <span className='text-white'>...</span>
                    </div>
                    <div className='flex justify-between px-4'>
                      <p>Total</p> <span className='text-white'>$...</span>
                    </div>
                  </div>
                </div>
              </div>              
              <div className='text-white px-4 py-4 border-t border-neutral-600'>
                <GreenButton text="Connect Wallet"/>
              </div>
            </div>
          </div>
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
        </div>

      </div>
    </div>
  )
}
