import React, {useEffect} from 'react'
import Logo from '../assets/Logo.png'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import Needle from '../assets/Needle.svg'
import Wallet from '../assets/Wallet.svg'
import GreenButton from './GreenButton';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const ShowMenu = () =>{
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    line1.classList.remove("h-[1px]");
    line1.classList.add("rotate-45", "translate-y-1", "h-1"); 
    line3.classList.remove("h-[1px]");
    line3.classList.add("-rotate-45", "-translate-y-1", "h-1");
    line2.classList.add("hidden");

    const slider = document.getElementById('slider');
    slider.classList.remove('-translate-x-80');

    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    window.addEventListener('click',(e) => {
        const hamburger = document.getElementById('hamburger');
        if (document.activeElement === hamburger) {
          e.stopPropagation();
        }
        else {
          const line1 = document.getElementById('line1');
          const line2 = document.getElementById('line2');
          const line3 = document.getElementById('line3');
          line1.classList.add("h-[1px]");
          line1.classList.remove("rotate-45", "translate-y-1", "h-1"); 
          line3.classList.add("h-[1px]");
          line3.classList.remove("-rotate-45", "-translate-y-1", "h-1");
          line2.classList.remove("hidden");

          const slider = document.getElementById('slider');
          slider.classList.add('-translate-x-80');
          document.body.style.overflow = "auto";
        }
      },
    );
  }, []);

  const visibleShortMenu = ()=>{
    document.getElementById('shortMenu').removeAttribute('hidden');
  }
  const hideShortMenu = ()=>{
    document.getElementById('shortMenu').setAttribute('hidden', true);
  }

  return (
    <div className='min-w-[320px]'>
      <div id="navbar" className='flex justify-between h-[3.8rem] border-neutral-800 border shadow-l'>
        <div className='flex'>
          <button id="hamburger" className="hamburger inline-block lg:hidden w-[2rem] sm:w-[3.8rem] h-full" onClick={ShowMenu}>
              <div id="line1" className="mx-auto line h-[1px] w-4 bg-slate-300 my-[5px] transition-all"></div>
              <div id="line2" className="mx-auto line h-[1px] w-4 bg-slate-300 my-[5px]"></div>
              <div id="line3" className="mx-auto line h-[1px] w-4 bg-slate-300 my-[5px] transition-all"></div>
          </button>

          <div className='flex items-center justify-center xl:ml-8 hover:cursor-pointer'>
            <div className='scale-75 sm:scale-100 hidden xxsm:inline'>
              <img src={Logo} width="45" alt="Err" />
            </div>
            <h3 className='text-sm xxsm:text-base sm:text-xl  font-orbitron text-white min-w-fit'>Romi Finance</h3>
          </div>
        </div>

        <div className='hidden lg:flex text-[#a7a7a9]'>
          <NavLink to="/"><div className='px-2 xl:px-4 hover:cursor-pointer h-full flex items-center hover:text-white'>Home</div></NavLink>
          <NavLink to="/dashboard"><div className='px-2 xl:px-4 hover:cursor-pointer h-full flex items-center hover:text-white'>Dashboard</div></NavLink>
          <NavLink to="/earn"><div className='px-2 xl:px-4 hover:cursor-pointer h-full flex items-center hover:text-white'>Earn</div></NavLink>
          <NavLink to="/buy"><div className='px-2 xl:px-4 hover:cursor-pointer h-full flex items-center hover:text-white'>Buy</div></NavLink>
          <div className="px-2 xl:px-4 flex items-center relative">
            <div className='hover:cursor-pointer h-full flex items-center hover:text-white' onMouseEnter={visibleShortMenu} onMouseLeave={hideShortMenu}>
              NFT
            </div>
            <div id="shortMenu" className='absolute w-40 p-7 rounded-xl shadow-2xl shadow-black bg-[#191919] space-y-7 top-14' hidden onMouseEnter={visibleShortMenu} onMouseLeave={hideShortMenu}>
              <p className='hover:text-white hover:cursor-pointer'>MINT</p>
              <p className='hover:text-white hover:cursor-pointer'>Stake NFT</p>
            </div>
          </div>
          <div className='px-2 xl:px-4 hover:cursor-pointer h-full flex items-center hover:text-white'>Referrals</div>
          <div className='px-2 xl:px-4 hover:cursor-pointer h-full flex items-center hover:text-white'>Ecosystem</div>
          <div className='px-2 xl:px-4 hover:cursor-pointer h-full flex items-center hover:text-white'>About</div>
        </div>

        <div className='flex text-white items-center space-x-2 xl:space-x-6 mr-2 xl:mr-8'>
          <GreenButton text="Trade"/>
          <div className='h-min rounded text-sm font-medium px-1 sm:px-4 py-1.5 border-gray-600 border hover:bg-[#2a2a2a] flex items-center hover:cursor-pointer'>
            <img className='pr-0.5' src={Wallet} alt="Err" />
            <div className='hidden sm:inline px-1'>Connect Wallet</div>
            <div className='hidden xsm:inline sm:hidden px-1'>Connect</div>
          </div>
          <div className='h-min rounded text-sm font-medium py-2 border-gray-600 border hover:bg-[#2a2a2a] flex hover:cursor-pointer'>
            <div className='border-r border-gray-600'>
              <img className='mx-2' src={Needle} width="20" alt="Err" />
            </div>
            <BsThreeDotsVertical className='text-xl mx-2' />
          </div>
        </div>
      </div>

      <div id='slider' className='absolute inset-0 backdrop-blur-2xl shadow-black shadow-2xl w-80 h-full text-[#b8b8b8] -translate-x-80 transition-all ease-in-out lg:hidden overflow-y-scroll'>
        <div className='flex h-[3.8rem] items-center justify-between'>
          <div className='flex text-base font-orbitron text-white items-center'>
            <img src={Logo} width="45" alt="Err" />
            <h3>Romi Finance</h3>
          </div>
          <div className='p-4'>
            <RxCross1/>        
          </div>
        </div>        
        
        <NavLink to="/"><div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>Home</div></NavLink>
        <NavLink to="/dashboard"><div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>Dashboard</div></NavLink>
        <NavLink to="/earn"><div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>Earn</div></NavLink>
        <NavLink to="/buy"><div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>Buy</div></NavLink>
        <div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>NFT</div>
        <div className='py-4 px-8 flex items-center'>Mint</div>
        <div className='py-4 px-8 flex items-center'>Stake NFT</div>
        <div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>Referrals</div>
        <div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>Ecosystem</div>
        <div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>About</div>        
        <div className='p-3.5 flex items-center active:bg-[#2b2b2f]'>Settings</div>        
      </div>

    </div>
  )
}
