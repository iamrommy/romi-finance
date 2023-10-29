import React from 'react'
import GreenButton from '../components/GreenButton'
import TradingArrows from'../assets/TradingArrows.svg'
import UpArrow from'../assets/UpArrow.svg'
import Users from'../assets/Users.svg'
import Arrows from'../assets/Arrows.svg'
import Drops from'../assets/Drops.svg'
import Flags from'../assets/Flags.svg'
import Boxed from '../assets/Boxed.png'
import Circled from '../assets/Circled.png'

export default function Home() {
  return (
    <div>
        <div id="trading" className='text-white max-w-7xl mx-auto min-w-[320px]'>
            <div className='px-5 xsm:px-10'>
                <div className='my-16'>
                    <h1 className='font-poppins text-3xl xxsm:text-[2.7rem] xsm:text-[3.5rem] max-w-2xl flex flex-wrap leading-tight'>Decentralized Perpetual Exchange</h1>
                    <h4 className='text-base xsm:text-xl max-w-sm leading-tight my-4 text-slate-300'>Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</h4>
                    <div className='my-7'>
                        <GreenButton text="Launch Exchange"/>
                    </div>
                </div>

                <div id="tradingDetails" className='flex flex-wrap w-full gap-y-8 justify-between'>
                    <div className='flex border-neutral-700 border max-w-sm w-full h-28 items-center rounded '>
                        <img className='mx-5 xsm:mx-10' src={TradingArrows} width="50" alt="Err" />
                        <div className='flex flex-col'>
                            <p className='text-slate-300'>Total Trading Volume</p>
                            <p className='font-semibold text-3xl'>$0</p>
                        </div>
                    </div>
                    <div className='flex border-neutral-700 border max-w-sm w-full h-28 items-center rounded '>
                        <img className='mx-5 xsm:mx-10' src={UpArrow} width="50" alt="Err" />
                        <div className='flex flex-col'>
                            <p className='text-slate-300'>Open Interests</p>
                            <p className='font-semibold text-3xl'>$0</p>
                        </div>
                    </div>
                    <div className='flex border-neutral-700 border max-w-sm w-full h-28 items-center rounded '>
                        <img className='mx-5 xsm:mx-10' src={Users} width="50" alt="Err" />
                        <div className='flex flex-col'>
                            <p className='text-slate-300'>Total Users</p>
                            <p className='font-semibold text-3xl'>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="Break" className='w-full border-b border-neutral-500 mt-24 mb-16 min-w-[320px]'></div>
        
        <div id="Tokens" className='text-white max-w-7xl mx-auto min-w-[320px]'>
            <div className='px-5 xsm:px-10'>

                <div id="details" className='flex flex-wrap w-full gap-y-8 justify-between mb-24'>
                    <div className='flex flex-col max-w-xs '>
                        <div className='flex h-16 items-center'>
                            <img className='mr-4' src={Drops} width="40" alt="Err" />
                            <h2 className='text-2xl'>Reduce Liquidation Risks</h2>
                        </div>
                        <p className='text-lg text-slate-300 leading-tight'>
                            An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.
                        </p>
                    </div>
                    <div className='flex flex-col max-w-xs'>
                        <div className='flex h-16 items-center'>
                            <img className='mr-4' src={Flags} width="40" alt="Err" />
                            <h2 className='text-2xl'>Save on Costs</h2>
                        </div>
                        <p className='text-lg text-slate-300 leading-tight'>
                        Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.
                        </p>
                    </div>
                    <div className='flex flex-col max-w-xs'>
                        <div className='flex h-16 items-center'>
                            <img className='mr-4' src={Arrows} width="40" alt="Err" />
                            <h2 className='text-2xl'>Simple Swaps</h2>
                        </div>
                        <p className='text-lg text-slate-300 leading-tight'>
                        Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.
                        </p>
                    </div>
                </div> 

                <div className='mt-5'>
                    <h1 className='font-poppins font-medium text-4xl max-w-sm flex flex-wrap leading-tight '>Two tokens create our ecosystem</h1>
                    <div className='flex flex-col my-8 gap-4 md:flex-row'>
                        <div className='max-w-[38rem] border border-neutral-500 rounded-lg p-5 shadow-2xl shadow-black'>
                            <div className='flex text-2xl items-center h-12 gap-x-2'>
                                <img src={Boxed} width="40" alt="Err" />
                                <h2>$ROMI</h2>
                            </div>
                            <h4 className='text-lg'>$ROMI is the utility and governance token. Accrues 30% of the platform's generated fees.</h4>
                            <p className='py-4 text-neutral-300'>Ethereum APR: 0.00%</p>
                            <div className='flex gap-4 flex-col lg:flex-row w-full'>
                                <button className='h-min rounded px-1 sm:px-4 py-1.5 bg-[#3eb489] hover:bg-[#207a59]'>Buy</button>
                                <button className='h-min rounded px-1 sm:px-4 py-1.5 hover:bg-[#2a2a2a] border border-neutral-400'>Read More</button>
                            </div>
                        </div>
                        <div className='max-w-[38rem] border border-neutral-500 rounded-lg p-5 shadow-2xl shadow-black'>
                            <div className='flex text-2xl items-center h-12 gap-x-2'>
                                <img src={Circled} width="40" alt="Err" />
                                <h2>$RLP</h2>
                            </div>
                            <h4 className='text-lg'>$RLP is the liquidity provider token. Accrues 70% of the platform's generated fees.</h4>
                            <p className='py-4 text-neutral-300'>Ethereum APR: 1,654,087,530.54%</p>
                            <div className='flex gap-4 flex-col lg:flex-row w-full'>
                                <button className='h-min rounded px-1 sm:px-4 py-1.5 bg-[#3eb489] hover:bg-[#207a59]'>Buy</button>
                                <button className='h-min rounded px-1 sm:px-4 py-1.5 hover:bg-[#2a2a2a] border border-neutral-400'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}
