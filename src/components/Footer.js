import React from 'react'
import Logo from '../assets/Logo.png'
import Twitter from '../assets/socialMedia/Twitter.svg'
import Github from '../assets/socialMedia/Github.svg'
import Medium from '../assets/socialMedia/Medium.svg'
import Discord from '../assets/socialMedia/Discord.svg'
import Telegram from '../assets/socialMedia/Telegram.svg'

export default function Footer() {
  return (
    <div className='mt-20 w-full min-w-[320px] bg-[#151515]'>
        <div id='break' className='w-full border-b border-neutral-500'></div>
        <div className='max-w-7xl mx-auto w-max'>
            <div className='flex w-full justify-center items-center my-8 cursor-default'>
                <img src={Logo} width="45" alt="Err" />
                <h3 className='text-2xl font-orbitron text-white min-w-fit'>Romi Finance</h3>
            </div>
            <div className='icons flex gap-7 sm:gap-10 md:gap-16 w-full items-center justify-center my-6'>
                <img src={Twitter} alt="Err" />
                <img src={Medium} alt="Err" />
                <img src={Github} alt="Err" />
                <img src={Telegram} alt="Err" />
                <img src={Discord} alt="Err" />
            </div>
            <div className='flex flex-col sm:flex-row text-base font-semibold gap-4 text-neutral-300 mt-5 pb-5 items-center justify-center'>
                <p className='hover:text-white hover:cursor-pointer'>Terms and Conditions</p>
                <p className='hover:text-white hover:cursor-pointer'>Referral Terms</p>
                <p className='hover:text-white hover:cursor-pointer'>Media Kit</p>
            </div>
        </div>
        
    </div>
  )
}
