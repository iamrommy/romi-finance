import React from 'react'
import Needle2 from '../assets/Needle2.svg'
import {RiArrowDropDownLine} from 'react-icons/ri'

export default function CryptoTable({ data }) {
    return (
        <div className='mt-3 w-full'>
            <div className='hidden lg:block border border-neutral-600 rounded w-full bg-[#151515]'>

                <div className='h-14 px-5 flex items-center border-b border-neutral-600 gap-x-2'>
                    <h1>$RLP Index Composition</h1>
                    <img src={Needle2} width="17" alt="Err" />
                </div>

                <table className='w-full'>
                    <thead>
                        <tr className='h-14 text-neutral-400 text-lg font-normal'>
                            <th>
                                TOKEN
                            </th>
                            <th>
                                PRICE
                            </th>
                            <th>
                                POOL
                            </th>
                            <th>
                                WEIGHT
                            </th>
                            <th>
                                UTILIZATION
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {
                        data.map(({name, shortform, price, pool, weight, utilization}, index)=>{
                            return <tr className='h-14' key={index}>
                                <th className='flex justify-center gap-2'>
                                    <div>
                                        <h1 className='text-lg font-normal'>{name}</h1>
                                        <p className='text-neutral-500 text-[0.7rem] text-start'>{shortform}</p>
                                    </div>
                                    <div className='text-3xl hover:cursor-pointer opacity-60 hover:opacity-100'>
                                        <RiArrowDropDownLine/>
                                    </div>
                                </th>    
                                <th className='font-normal'>{price}</th>    
                                <th className='font-normal'>{pool}</th>    
                                <th className='font-normal'>{weight}</th>    
                                <th className='font-normal'>{utilization}</th>    
                            </tr>
                        })
                    }   
                    </tbody>
                </table>
            </div>
            

            <div className='lg:hidden grid grid-flow-col grid-rows-4 sm:grid-rows-2 gap-4'>
                {
                    data.map(({shortform, price, pool, weight, utilization}, index)=>{
                        return <div className='border border-neutral-600 rounded bg-[#15151515]' key={index}>
                                <div className='h-14 px-5 items-center border-b border-neutral-600 flex'>
                                    <h1 className='ml-2'>{shortform}</h1>
                                    <div className='text-4xl opacity-60 hover:cursor-pointer hover:opacity-100'>
                                        <RiArrowDropDownLine/>
                                    </div>
                                </div>
                                <ul className='space-y-1 px-4 py-2.5 text-neutral-400 font-medium'>
                                    <li className='flex justify-between'>
                                    <p>Price</p> <span className='text-white border-b border-dashed border-white'>{price}</span>
                                    </li>
                                    <li className='flex justify-between'>
                                    <p>Pool</p> <span className='text-white border-b border-dashed border-white'>{pool}</span>
                                    </li>
                                    <li className='flex justify-between'>
                                    <p>Weight</p> <span className='text-white border-b border-dashed border-white'>{weight}</span>
                                    </li>
                                    <li className='flex justify-between'>
                                    <p>Utilization</p> <span className='text-white border-b border-dashed border-white'>{utilization}</span>
                                    </li>
                                    <li className='flex justify-between'>
                                    <p>Short Positions</p> <span className='text-white border-b border-dashed border-white'>$0</span>
                                    </li>
                                </ul>
                            </div>
                    })
                }
            </div>
        </div>
    )
}
