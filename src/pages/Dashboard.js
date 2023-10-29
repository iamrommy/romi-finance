import React from 'react'
import Needle2 from '../assets/Needle2.svg'
import Boxed from '../assets/Boxed.png'
import Circled from '../assets/Circled.png'
import {RiArrowDropDownLine} from 'react-icons/ri'
import currencies from '../components/Currencies.json'

import{
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2';
import CryptoTable from '../components/CryptoTable'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {

  const data = {
    labels: ['94% in liquidity', '6% not staked'],
    datasets: [{
      label: 'Distribution',
      data: [94, 6],
      backgroundColor: ['#0598fa', '#5c0af5'],
      borderColor: ['#151515'],
      hoverOffset: 4
    }],
  }

  const data2 = {
    labels: ['50.49% ETH', '49.5% USDC'],
    datasets: [{
      label: '$RLP Pool',
      data: [50.49, 49.5],
      backgroundColor: ['#6062a6', '#2775ca'],
      borderColor: ['#151515'],
      hoverOffset: 4
    }]
  }

  var options = {        
    hoverBorderColor: [
      '#2BB3FF',
      '#59DDAA',
      '#FDC23C',
      '#FF622D',
      '#AB6CFE',
      '#C4C7CF',
      '#F67CF2',
    ],
    cutout: 65,
  };

  return (
    <div id="trading" className='text-white max-w-7xl mx-auto min-w-[320px]'>
      <div className='px-5 xsm:px-10'>

        <section id="Stats" className='my-12'>
          <div className='my-6'>
            <div className='flex gap-2 my-3'>
              <h1 className='font-poppins text-4xl'>Stats</h1>
              <img src={Needle2} alt="Err" />
            </div>
            <p className='text-neutral-300'>Ethereum Total Stats start from 06 Jan 2022.</p>
            <p className='text-neutral-300'>For detailed stats:</p>
          </div>

          <div className='flex flex-col md:flex-row gap-x-3 gap-y-4'>
            <div className='md:max-w-[38rem] border border-neutral-600 rounded w-full bg-[#151515]'>
              <h1 className='h-14 px-5 flex items-center border-b border-neutral-600'>Overview</h1>
              <ul className='space-y-1 px-4 py-2.5 text-neutral-400 font-medium'>
                <li className='flex justify-between'>
                  <p>AUM</p> <span className='text-white border-b border-dashed border-white'>$34</span>
                </li>
                <li className='flex justify-between'>
                  <p>$RLP Pool</p> <span className='text-white border-b border-dashed border-white'>$34</span>
                </li>
                <li className='flex justify-between'>
                  <p>24h Volume</p> <span className='text-white border-b border-dashed border-white'>$0</span>
                </li>
                <li className='flex justify-between'>
                  <p>Long Positions</p> <span className='text-white border-b border-dashed border-white'>$0</span>
                </li>
                <li className='flex justify-between'>
                  <p>Short Positions</p> <span className='text-white border-b border-dashed border-white'>$0</span>
                </li>
              </ul>
            </div>

            <div className='md:max-w-[38rem] border border-neutral-600 rounded w-full bg-[#151515]'>
              <h1 className='h-14 px-5 flex items-center border-b border-neutral-600'>Total Stats</h1>
              <ul className='space-y-1 px-4 py-2.5 text-neutral-400 font-medium'>
                <li className='flex justify-between'>
                  <p>Total Fees</p> <span className='text-white border-b border-dashed border-white'>$34</span>
                </li>
                <li className='flex justify-between'>
                  <p>Total Volume</p> <span className='text-white border-b border-dashed border-white'>$34</span>
                </li>
                <li className='flex justify-between'>
                  <p>Floor Price Fund</p> <span className='text-white border-b border-dashed border-white'>$0</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="Tokens">
          <div className='my-6'>
            <div className='flex gap-2 my-3'>
              <h1 className='font-poppins text-4xl'>Tokens</h1>
              <img src={Needle2} alt="Err" />
            </div>
            <p className='text-neutral-300'>Platform and $RLP index tokens.</p>
          </div>

          <div className='flex flex-col lg:flex-row gap-x-3 gap-y-4'>
            <div className='lg:max-w-[38rem] border border-neutral-600 rounded w-full bg-[#151515] flex flex-col sm:flex-row'>
              <div className='w-full'>
                <div className='flex border-b border-neutral-600 p-3 gap-x-2'>
                  <img src={Boxed} width="40" alt="Err" />
                  <div>
                    <h1 className='text-base font-medium flex items-center'>$ROMI</h1>
                    <p className='text-xs flex items-center text-neutral-400'>$ROMI</p>
                  </div>
                  <RiArrowDropDownLine className='text-4xl hover:cursor-pointer opacity-60 hover:opacity-100'/>
                </div>
                <ul className='space-y-1 px-4 py-2.5 text-neutral-400 font-medium'>
                  <li className='flex justify-between'>
                    <p>Price</p> <span className='text-white border-b border-dashed border-white'>$0.00</span>
                  </li>
                  <li className='flex justify-between'>
                    <p>Supply</p> <span className='text-white border-white'>10,000$ROMI</span>
                  </li>
                  <li className='flex justify-between'>
                    <p>Total Staked</p> <span className='text-white border-b border-dashed border-white'>$0</span>
                  </li>
                  <li className='flex justify-between'>
                    <p>Market Cap</p> <span className='text-white border-white'>$10</span>
                  </li>
                </ul>
              </div>
              <div className='w-52 my-5 mx-auto'> 
                <Doughnut data = {data} options = {options}></Doughnut>
              </div>
            </div>

            <div className='lg:max-w-[38rem] border border-neutral-600 rounded w-full bg-[#151515] flex flex-col sm:flex-row'>
              <div className='w-full'>
                <div className='flex border-b border-neutral-600 p-3 gap-x-2'>
                  <div className='relative'>
                    <img src={Circled} width="40" alt="Err" />
                    <p className='absolute right-0 bottom-[0.1rem]'><img className='rounded-full' src={Needle2} width="17" alt="Err" /></p>
                  </div>
                  <div>
                    <h1 className='text-base font-medium flex items-center'>$RLP</h1>
                    <p className='text-xs flex items-center text-neutral-400'>$RLP</p>
                  </div>
                  <RiArrowDropDownLine className='text-4xl hover:cursor-pointer opacity-60 hover:opacity-100'/>
                </div>
                <ul className='space-y-1 px-4 py-2.5 text-neutral-400 font-medium'>
                  <li className='flex justify-between'>
                    <p>Price</p> <span className='text-white border-b border-dashed border-white'>$1.137</span>
                  </li>
                  <li className='flex justify-between'>
                    <p>Supply</p> <span className='text-white border-b border-dashed border-white'>29 $RLP</span>
                  </li>
                  <li className='flex justify-between'>
                    <p>Total Staked</p> <span className='text-white border-b border-dashed border-white'>$34</span>
                  </li>
                  <li className='flex justify-between'>
                    <p>Market Caped</p> <span className='text-white border-b border-dashed border-white'>$34</span>
                  </li>
                  <li className='flex justify-between'>
                    <p>Stablecoin Percentage</p> <span className='text-white border-b border-dashed border-white'>$49.50</span>
                  </li>
                </ul>
              </div>
              <div className='w-52 my-5 mx-auto'> 
                <Doughnut data = {data2} options={options}></Doughnut>
              </div>
            </div>
          </div>
        </section>

        <CryptoTable data = {currencies.currencies}/>

      </div>
    </div>

  )
}
