import logo from '../assets/logo.svg';
import one from '../assets/one.svg';
import two from '../assets/two.svg';
import hm from '../assets/output.png';
import output from '../assets/output (1).png';
import output1 from '../assets/output (2).png';
import output2 from '../assets/output (3).png';
import output3 from '../assets/output (4).png';
import output4 from '../assets/output (5).png';
import pimg from '../assets/pimg.svg';
import ptwo from '../assets/ptwo.svg';
import pthree from '../assets/pthree.svg';
import yellowing from '../assets/yellowimg.svg';
import hig from '../assets/hig.svg';
import React from "react";
import phone from '../assets/phone.svg';
import android from '../assets/android.svg';
import apple from '../assets/apple.svg';
import kig from '../assets/kig.svg';
import { useState } from 'react';
/* import {motion} from '' */
import '../App.css';
function Nav() {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
    return(
   <>
       <nav class=" w-full flex items-center justify-between flex-wrap bg-white  px-3 md:px-[4rem]">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
  <img src={logo} alt="logo" />
  </div>
  <div class="block lg:hidden">
    <button onClick={toggle} class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div  className={`${open? "block": "hidden"} w-full block  lg:flex lg:gap-5 lg:w-auto lg:items-center `}>
    <div class="text-sm lg:flex-grow ">
      <a href="#responsive-header" class="block font-medium mt-4 text-[22px] lg:inline-block lg:mt-0 text-black hover:text-[#E5C643] mr-4">
      CATALOGUE
      </a>
      <a href="#responsive-header" class="block font-medium mt-4 text-[22px] lg:inline-block lg:mt-0  text-black hover:text-[#E5C643] mr-4">
      FASHION
      </a>
      <a href="#responsive-header" class="block font-medium mt-4 text-[22px] lg:inline-block lg:mt-0 text-black hover:text-[#E5C643] mr-4">
      FAVOURITE
      </a>
      <a href="#responsive-header" class="block font-medium mt-4 text-[22px] lg:inline-block lg:mt-0 text-black hover:text-[#E5C643] mr-4">
      LIFESTYLE
      </a>
    
    </div>
 
   <div className=' relative flex justify-end align-top    w-24'>
      <span class="absolute flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C643] opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-[#E5C643]"></span>
</span>
<button class="btn max-h-16 font-medium inline-block text-sm px-4 py-2 leading-none border text-[22px] text-[#FEFEFE] bg-black  rounded-[7px] border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
  
   SIGN UP   
   </button>
   </div>
   
  

  </div>
</nav>
    
    <section className='bg-[#F4F6F5] flex flex-col md:flex-row mx-3 md:mx-[4rem] my-[2rem] gap-12 md:gap-0 rounded-[20px] lg:rounded-[59px] md:p-12 p-6 items-center'>
      <div className='lg:grid lg:grid-cols-1 '>
             <div className=' grid grid-cols-4'>
        <img className=' col-span-2 ' src={one} alt="" />
      </div>
      <p className='font-normal  text-[#191818]'>Live for Influential and Innovative fashion!</p>
      <div className='flex gap-4 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="190" height="32" viewBox="0 0 190 32" fill="none">
  <path d="M0 30.6152C48 -11.7848 146.667 -1.05149 190 9.61518C176.4 33.6152 57.6667 33.6152 0 30.6152Z" fill="#EBD96B"/>
</svg>
<div className=' relative flex justify-end align-top   w-fit'>
      <span class="absolute flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C643] opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-[#E5C643]"></span>
</span>
<button class="btn max-h-16 font-medium inline-block text-sm px-4 py-2 leading-none border text-[22px] text-[#FEFEFE] bg-black  rounded-[7px] border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
  
Shop Now 
   </button>
   </div>

      </div>
      </div>
 
      <div>
      <img src={two} alt="" />
    </div>
    </section>


    <section className='bg-[#EBD96B] grid grid-cols-3 lg:grid-cols-6 p-6 py-[2rem]   lg:px-[4rem]'>
   
      <img src={hm} alt="" />
      <img src={output} alt="" />
      <img src={output1} alt="" />
      <img src={output2} alt="" />
      <img src={output3} alt="" />
      <img src={output4} alt="" />
    </section>
    

    <section className='m-6 lg:m-12'>
      <div className='font-black text-4xl lg:text-[48px] m-auto  lg:m-0 w-fit z-[-4px] relative my-12 '><h1 className='z-20'>NEW ARRIVALS </h1> <div className=' z-[-1]  absolute bottom-0 right-0'>
     <svg  width="186" height="35" viewBox="0 0 186 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z" fill="#EBD96B"/>
</svg>   </div>
</div>
<div className=' py-6 lg:grid lg:grid-cols-3 flex flex-col items-center   gap-12'>
  <div className='w-fit '>
    <span>
      <img src={pimg} alt="" />
    </span>
    <span className='flex items-center w-full justify-between'>
      <div>
        <h4 className='text[#191919] font-medium text-2xl lg:text-[32px]'>Hoodies & Sweetshirt</h4>
      <p className='text-[#7F7F7F] text-[24px]'>Explore Now!</p>
      </div>
      <p><svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979"/>
</svg>
</p>
    </span>
  </div>
  <div className='w-fit'>
    <span>
      <img src={ptwo} alt="" />
    </span>
    <span className='flex items-center w-full justify-between'>
      <div>
        <h4 className='text[#191919] font-medium text-2xl lg:text-[32px]'>Coats & Parkas</h4>
      <p className='text-[#7F7F7F] text-[24px]'>Explore Now!</p>
      </div>
      <p><svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979"/>
</svg>
</p>
    </span>
  </div>
  <div className='w-fit '>
    <span>
      <img src={pthree} alt="" />
    </span>
    <span className='flex items-center w-full justify-between'>
      <div>
        <h4 className='text[#191919] text-2xl font-medium lg:text-[32px]'>Tees & T-Shirt</h4>
      <p className='text-[#7F7F7F] text-[24px]'>Explore Now!</p>
      </div>
      <p><svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979"/>
</svg>
</p>
    </span>
  </div>
</div>
    </section>


    <section className='lg:grid lg:grid-cols-2 gap-9 bg-gradient-to-t from-amber-300 via-amber-300 to-amber-300' >
<div>
  <img src={yellowing} alt="" />
</div>
<div className=' gap-5 p-6 flex flex-col justify-center '>
<div >
<svg className='max-w-[100%]' width="612" height="258" viewBox="0 0 612 258" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="541.428" height="130.373" transform="matrix(0.999393 -0.034827 0.0349721 0.999388 0.199707 18.9744)" fill="white"/>
<path d="M93.7018 67.846C93.7018 72.8312 92.5485 77.3699 90.2419 81.4622C87.9354 85.4801 84.5127 88.6796 79.974 91.0605C75.5096 93.4415 70.078 94.632 63.6791 94.632H53.8576V119.744H29.0805V40.7252H63.6791C73.3519 40.7252 80.7552 43.1805 85.8892 48.0913C91.0976 53.0021 93.7018 59.587 93.7018 67.846ZM60.8889 75.1005C66.0229 75.1005 68.5899 72.6824 68.5899 67.846C68.5899 63.0096 66.0229 60.5914 60.8889 60.5914H53.8576V75.1005H60.8889ZM152.231 107.802H125.891L121.985 119.744H95.9802L124.887 40.7252H153.459L182.253 119.744H156.137L152.231 107.802ZM146.204 89.1632L139.061 67.1763L131.918 89.1632H146.204ZM263.776 40.7252L235.428 95.7481V119.744H210.651V95.7481L182.302 40.7252H210.651L223.263 68.7389L235.874 40.7252H263.776ZM302.334 40.7252C310.593 40.7252 317.81 42.3993 323.986 45.7475C330.236 49.0958 335.035 53.7461 338.383 59.6986C341.731 65.651 343.406 72.4219 343.406 80.0113C343.406 87.5263 341.731 94.2972 338.383 100.324C335.035 106.351 330.236 111.113 323.986 114.61C317.81 118.033 310.593 119.744 302.334 119.744H269.409V40.7252H302.334ZM300.101 97.6454C305.682 97.6454 310.109 96.1201 313.383 93.0695C316.657 90.0189 318.294 85.6661 318.294 80.0113C318.294 74.3565 316.657 70.0038 313.383 66.9531C310.109 63.9025 305.682 62.3772 300.101 62.3772H294.186V97.6454H300.101ZM403.023 107.802H376.683L372.777 119.744H346.772L375.679 40.7252H404.25L433.045 119.744H406.929L403.023 107.802ZM396.996 89.1632L389.853 67.1763L382.71 89.1632H396.996ZM514.568 40.7252L486.22 95.7481V119.744H461.443V95.7481L433.094 40.7252H461.443L474.054 68.7389L486.666 40.7252H514.568ZM59.9961 257.525C50.5466 257.525 42.734 255.33 36.5583 250.94C30.457 246.476 27.146 239.965 26.6252 231.409H52.9647C53.3368 235.948 55.3457 238.217 58.9916 238.217C60.3309 238.217 61.447 237.919 62.3398 237.324C63.3071 236.654 63.7908 235.65 63.7908 234.311C63.7908 232.45 62.7863 230.962 60.7773 229.846C58.7684 228.656 55.6433 227.316 51.4022 225.828C46.3426 224.043 42.1387 222.294 38.7905 220.583C35.5166 218.871 32.6892 216.379 30.3082 213.105C27.9273 209.831 26.774 205.627 26.8484 200.493C26.8484 195.359 28.1505 191.007 30.7547 187.435C33.4333 183.789 37.0419 181.036 41.5807 179.176C46.1938 177.316 51.365 176.386 57.0943 176.386C66.767 176.386 74.4308 178.618 80.0856 183.082C85.8148 187.547 88.8282 193.834 89.1259 201.944H62.4515C62.377 199.712 61.819 198.112 60.7773 197.145C59.7356 196.178 58.4708 195.694 56.9826 195.694C55.941 195.694 55.0853 196.066 54.4156 196.81C53.746 197.48 53.4112 198.447 53.4112 199.712C53.4112 201.498 54.3784 202.986 56.313 204.176C58.3219 205.292 61.4842 206.669 65.7997 208.306C70.7849 210.166 74.8772 211.952 78.0766 213.663C81.3505 215.374 84.1779 217.755 86.5589 220.806C88.9398 223.857 90.1303 227.689 90.1303 232.302C90.1303 237.138 88.9398 241.491 86.5589 245.36C84.1779 249.155 80.718 252.131 76.1793 254.289C71.6405 256.446 66.2461 257.525 59.9961 257.525ZM149.506 244.802H123.166L119.26 256.744H93.2554L122.162 177.725H150.734L179.529 256.744H153.412L149.506 244.802ZM143.479 226.163L136.336 204.176L129.193 226.163H143.479ZM209.935 237.994H233.819V256.744H185.158V177.725H209.935V237.994ZM266.393 197.48V207.19H290.947V225.828H266.393V236.989H294.295V256.744H241.616V177.725H294.295V197.48H266.393ZM398.38 256.744H373.603L347.375 217.011V256.744H322.598V177.725H347.375L373.603 218.127V177.725H398.38V256.744ZM448.078 257.525C440.638 257.525 433.793 255.777 427.543 252.28C421.367 248.782 416.456 243.946 412.81 237.77C409.164 231.595 407.341 224.638 407.341 216.9C407.341 209.162 409.164 202.205 412.81 196.029C416.456 189.853 421.367 185.054 427.543 181.631C433.793 178.134 440.638 176.386 448.078 176.386C455.519 176.386 462.327 178.134 468.503 181.631C474.678 185.054 479.552 189.853 483.124 196.029C486.769 202.205 488.592 209.162 488.592 216.9C488.592 224.638 486.769 231.595 483.124 237.77C479.552 243.946 474.641 248.782 468.391 252.28C462.216 255.777 455.445 257.525 448.078 257.525ZM448.078 234.422C452.989 234.422 456.784 232.86 459.463 229.735C462.141 226.535 463.48 222.257 463.48 216.9C463.48 211.468 462.141 207.19 459.463 204.065C456.784 200.865 452.989 199.266 448.078 199.266C443.093 199.266 439.261 200.865 436.583 204.065C433.904 207.19 432.565 211.468 432.565 216.9C432.565 222.257 433.904 226.535 436.583 229.735C439.261 232.86 443.093 234.422 448.078 234.422ZM611.371 177.725L593.291 256.744H562.487L553.335 211.877L544.183 256.744H513.379L495.298 177.725H521.973L529.116 227.502L539.83 177.725H566.839L577.554 227.502L584.697 177.725H611.371Z" fill="black"/>
</svg>

</div>
<p className='text[#231300] font-medium text-3xl lg:text-[36.04px]'>
Spend minimal $100 get 30% off
voucher code for your next purchase
</p>
<p className='lg:text-[2.5rem] text-2xl   font-bold'>1 June - 10 June 2021</p>
<p className='lg:text-[36.04px] text-2xl font-normal' >*Terms & Conditions apply</p>
<div className=' relative flex justify-end align-top  w-fit'>
      <span class="absolute flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C643] opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-[#E5C643]"></span>
</span>
<button class="btn max-h-16 font-medium inline-block text-sm px-4 py-2 leading-none border-none text-[22px] text-[#FEFEFE] bg-black  rounded-[7px] border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
  
Sign Up!
   </button>
   </div>
</div>
 </section>
 <section className=' mx-6 lg:mx-[4rem] '>
   <div className='font-black text-4xl lg:text-[48px] w-fit z-[-4px] relative my-12 '><h1 className='z-20'>Young’s Favourite</h1> <div className=' z-[-1]  absolute bottom-0 right-0'>
     <svg  width="186" height="35" viewBox="0 0 186 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z" fill="#EBD96B"/>
</svg>   </div>
</div>
<div className='lg:grid flex flex-col gap-4 grid-cols-2 lg;gap-8 '>

<div className='w-fit '>
    <span>
      <img src={hig} alt="" />
    </span>
    <span className='flex items-center w-full justify-between'>
      <div>
        <h4 className='text[#191919] font-medium text-[32px]'>Coats & Parkas</h4>
      <p className='text-[#7F7F7F] text-[24px]'>Explore Now!</p>
      </div>
      <p><svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979"/>
</svg>
</p>
    </span>
  </div>
<div className='w-fit '>
    <span>
      <img src={kig} alt="" />
    </span>
    <span className='flex items-center w-full justify-between'>
      <div>
        <h4 className='text[#191919] font-medium text-[32px]'>Coats & Parkas</h4>
      <p className='text-[#7F7F7F] text-[24px]'>Explore Now!</p>
      </div>
      <p><svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z" fill="#797979"/>
</svg>
</p>
    </span>
  </div>


</div>
 </section>


<section className=' m-6 lg:mx-[4rem] grid  grid-cols-5 gap-9 lg:gap-0  col-span-2  '>
  <div className=' flex flex-col justify-center gap-9  col-span-5  lg:col-span-2'>
    <h1 className='font-black text-3xl lgtext-5xl'>
    DOWNLOAD APP &
GET THE VOUCHER!
    </h1>
    <p className='my-4 font-medium text-[#7C7C7C] text-xl lg:text-2xl'>
    Get 30% off for first transaction using
Rondovision mobile app for now.
    </p>
    <div className='grid-cols-2 gap-1 grid'>
      <img src={android} alt="" />
  <img src={apple} alt="" />
    </div>
  </div>
  <div className='col-span-5   lg:col-span-3'>
    <img src={phone} alt="" />
  </div>
</section>
  <section className='bg-[#E5C643] text-white flex justify-center flex-col items-center p-6 lg:p-[4rem] '>
    <h1 className='font-black lg:text-5xl text-center col-span-2'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
    <p className='text-center font-normal lg:text-3xl col-span-2'>Type your email down below and be young wild generation</p>
    <div>
      
    </div>

    <div className='flex p-4 w-full lg:w-2/4 justify-center items-center flex-col lg:flex-row  gap-3 '>
       <input className='placeholder-[#767676] w-full border rounded-lg focus:border-none focus:outline-none text-black  m-auto p-2' type="text" placeholder='Add your email here' />
       <div className='  flex  items-top justify-end w-fit'>
      <span class=" absolute flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C643] opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-[#E5C643]"></span>
</span>
<button class="btn max-h-16   font-medium inline-block text-sm px-4 py-2 leading-none  text-[22px] text-[#FEFEFE] bg-black  rounded-[7px]  hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">

Send
   </button>
   </div>
    </div>

  </section>
  

  <footer className='bg-black grid grid-cols-5 p-6 lg:p-[4rem]'>
    <div className='col-span-5 lg:col-span-2 flex flex-col gap-7 '>
    <div class="font-black lg:text-4xl text-white ">
    FASHION
  </div>
  <p className='text-[#8E8E8E] font-normal '>Complete your style with awesome clothes from us.</p>
  <div className='grid-cols-6 gap-4 lg:grid-cols-7 grid w-'>
  <svg className=' animate-bounce' width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.395996" width="52" height="52" rx="15" fill="#EBD96B"/>
<path d="M31.5122 27.4585L32.2065 22.9341H27.8652V19.998C27.8652 18.7603 28.4717 17.5537 30.416 17.5537H32.3896V13.7017C32.3896 13.7017 30.5986 13.396 28.8862 13.396C25.311 13.396 22.9741 15.563 22.9741 19.4858V22.9341H19V27.4585H22.9741V38.396H27.8652V27.4585H31.5122Z" fill="black"/>
</svg>
<svg className=' animate-bounce' xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
  <rect y="0.395996" width="52" height="52" rx="15" fill="#EBD96B"/>
  <path d="M25.946 20.7268C22.8406 20.7268 20.3357 23.2317 20.3357 26.3372C20.3357 29.4426 22.8406 31.9475 25.946 31.9475C29.0515 31.9475 31.5564 29.4426 31.5564 26.3372C31.5564 23.2317 29.0515 20.7268 25.946 20.7268ZM25.946 29.9846C23.9392 29.9846 22.2986 28.3489 22.2986 26.3372C22.2986 24.3254 23.9343 22.6897 25.946 22.6897C27.9578 22.6897 29.5935 24.3254 29.5935 26.3372C29.5935 28.3489 27.9529 29.9846 25.946 29.9846ZM33.0945 20.4973C33.0945 21.2249 32.5085 21.8059 31.7859 21.8059C31.0584 21.8059 30.4773 21.22 30.4773 20.4973C30.4773 19.7747 31.0632 19.1887 31.7859 19.1887C32.5085 19.1887 33.0945 19.7747 33.0945 20.4973ZM36.8103 21.8254C36.7273 20.0725 36.3269 18.5198 35.0427 17.2405C33.7634 15.9612 32.2107 15.5608 30.4578 15.4729C28.6511 15.3704 23.2361 15.3704 21.4294 15.4729C19.6814 15.5559 18.1287 15.9563 16.8445 17.2356C15.5603 18.5149 15.1648 20.0676 15.0769 21.8206C14.9744 23.6272 14.9744 29.0422 15.0769 30.8489C15.1599 32.6018 15.5603 34.1545 16.8445 35.4338C18.1287 36.7131 19.6765 37.1135 21.4294 37.2014C23.2361 37.304 28.6511 37.304 30.4578 37.2014C32.2107 37.1184 33.7634 36.718 35.0427 35.4338C36.322 34.1545 36.7224 32.6018 36.8103 30.8489C36.9128 29.0422 36.9128 23.6321 36.8103 21.8254ZM34.4763 32.7874C34.0955 33.7444 33.3582 34.4817 32.3962 34.8674C30.9558 35.4387 27.5378 35.3069 25.946 35.3069C24.3542 35.3069 20.9314 35.4338 19.4958 34.8674C18.5388 34.4866 17.8015 33.7493 17.4158 32.7874C16.8445 31.3469 16.9763 27.929 16.9763 26.3372C16.9763 24.7454 16.8494 21.3225 17.4158 19.887C17.7966 18.9299 18.5339 18.1926 19.4958 17.8069C20.9363 17.2356 24.3542 17.3674 25.946 17.3674C27.5378 17.3674 30.9607 17.2405 32.3962 17.8069C33.3533 18.1877 34.0906 18.925 34.4763 19.887C35.0476 21.3274 34.9158 24.7454 34.9158 26.3372C34.9158 27.929 35.0476 31.3518 34.4763 32.7874Z" fill="black"/>
</svg>
<svg className=' animate-bounce' xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
  <rect y="0.395996" width="52" height="52" rx="15" fill="#EBD96B"/>
  <path d="M38.4302 21.4563C38.446 21.6783 38.446 21.9004 38.446 22.1225C38.446 28.8959 33.2906 36.7005 23.868 36.7005C20.9651 36.7005 18.2684 35.8598 16 34.4004C16.4125 34.448 16.809 34.4639 17.2373 34.4639C19.6326 34.4639 21.8375 33.6549 23.5983 32.2748C21.3458 32.2272 19.4581 30.752 18.8077 28.7215C19.125 28.769 19.4422 28.8008 19.7754 28.8008C20.2354 28.8008 20.6955 28.7373 21.1237 28.6263C18.776 28.1504 17.0152 26.0882 17.0152 23.5978V23.5343C17.6973 23.915 18.4905 24.153 19.3312 24.1847C17.9511 23.2646 17.0469 21.6942 17.0469 19.9175C17.0469 18.9658 17.3007 18.0933 17.7449 17.3319C20.2671 20.441 24.0583 22.4714 28.3096 22.6936C28.2303 22.3128 28.1827 21.9163 28.1827 21.5197C28.1827 18.6961 30.4669 16.396 33.3064 16.396C34.7816 16.396 36.1141 17.0146 37.05 18.014C38.208 17.7919 39.3184 17.3636 40.302 16.7767C39.9212 17.9665 39.1122 18.9658 38.0494 19.6003C39.0805 19.4893 40.0799 19.2037 40.9999 18.8072C40.302 19.8224 39.4295 20.7265 38.4302 21.4563Z" fill="black"/>
</svg>
<svg className=' animate-bounce' width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.395996" width="52" height="52" rx="15" fill="#EBD96B"/>
<path d="M20.875 34.396H17.4766V21.7163H20.875V34.396ZM17.2773 18.4351C17.2773 17.9272 17.4453 17.5093 17.7812 17.1812C18.125 16.853 18.5898 16.689 19.1758 16.689C19.7539 16.689 20.2148 16.853 20.5586 17.1812C20.9023 17.5093 21.0742 17.9272 21.0742 18.4351C21.0742 18.9507 20.8984 19.3726 20.5469 19.7007C20.2031 20.0288 19.7461 20.1929 19.1758 20.1929C18.6055 20.1929 18.1445 20.0288 17.793 19.7007C17.4492 19.3726 17.2773 18.9507 17.2773 18.4351ZM27.273 21.7163L27.3784 23.1812C28.2847 22.0483 29.4995 21.4819 31.023 21.4819C32.3667 21.4819 33.3667 21.8765 34.023 22.6655C34.6792 23.4546 35.0152 24.6343 35.0308 26.2046V34.396H31.6441V26.2866C31.6441 25.5679 31.4878 25.0483 31.1753 24.728C30.8628 24.3999 30.3433 24.2358 29.6167 24.2358C28.6636 24.2358 27.9488 24.6421 27.4722 25.4546V34.396H24.0855V21.7163H27.273Z" fill="black"/>
</svg>


  </div>

    </div>
    <div className='col-span-5 lg:col-span-3 lg:grid-cols-3 gap-5 grid'>
      <div className='text-[#8E8E8E] flex flex-col gap-6'>
<p className='font-medium text-white'><b>Company</b></p>
<p className='hover:text-[#E5C643] hover:text-lg'>About</p>
<p className='hover:text-[#E5C643] hover:text-lg'>Contact us</p>
<p className='hover:text-[#E5C643] hover:text-lg'>Support</p>
<p className='hover:text-[#E5C643] hover:text-lg'>Careers</p>
      </div>
      <div className='text-[#8E8E8E] flex flex-col gap-6'>
<p className='font-medium text-white'><b>Quick Link</b></p>
<p className='hover:text-[#E5C643] hover:text-lg'>Share Location</p>
<p className='hover:text-[#E5C643] hover:text-lg'>Orders Tracking</p>
<p className='hover:text-[#E5C643] hover:text-lg'>Size Guide</p>
<p className='hover:text-[#E5C643] hover:text-lg'>FAQs</p>
      </div>
      <div className='text-[#8E8E8E] flex flex-col gap-6'>
<p className='font-medium text-white'><b>Legal</b></p>
<p className='hover:text-[#E5C643] hover:text-lg'>Terms & conditions</p>
<p className='hover:text-[#E5C643] hover:text-lg'>Privacy Policy</p>

      </div>
    </div>
  </footer>
   </>
   
    );
}
export default Nav