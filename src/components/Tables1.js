import React from 'react'
import CryptoValues from '../components/CryptoValues.json'
import GreenButton from './GreenButton'

const Tables1 = () => {
  return (
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
  )
}

export default Tables1
