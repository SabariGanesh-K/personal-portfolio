import { GMAILHREF, INSTAGRAMHREF, LINKEDINHREF, TELEGRAMHREF } from '@/app/config/constants'
import { Divider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { BsMailbox, BsTelegram } from 'react-icons/bs'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <Divider  className='bg-white w-screen'/>
        <h2 className="text-4xl text-center mt-10 mb-10 font-extrabold dark:text-white"> Reach out to me...</h2>
    <div className='flex flex-row justify-evenly flex-wrap'>
<a href={TELEGRAMHREF} className="  inline-flex items-center justify-center p-5 text-base font-medium text-black rounded-lg bg-[#24A1DE] hover:text-gray-900 hover:bg-gray-100 dark:text-black dark:bg-[#24A1DE] dark:hover:bg-gray-700 dark:hover:text-white">
   <BsTelegram size={50}/>                          
    <span className="w-full m-2">Reach out to me on Telegram</span>
    <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a> 
<a href={GMAILHREF} className=" inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-[#d2201a] hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-[#c71610] dark:hover:bg-gray-700 dark:hover:text-white">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
</svg>                     
    <span className="w-full m-2 text-white">Send me an E-Mail </span>
    <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a> 

{/* <Link href={INSTAGRAMHREF}><FaInstagram size={70} /></Link> */}
<a href={INSTAGRAMHREF} className=" inline-flex items-center justify-center p-5 text-base font-medium text-black rounded-lg bg-[#E1306C] hover:text-gray-900 hover:bg-gray-100 dark:text-black dark:bg-[#E1306C] dark:hover:bg-gray-700 dark:hover:text-white">
<FaInstagram size={50}/>                   
    <span className="w-full m-2 text-white">Follow me on Instagram </span>
    <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a> 
{/* <Link href={LINKEDINHREF}><FaLinkedin  size={70} /></Link> */}
<a href={LINKEDINHREF} className=" inline-flex items-center justify-center p-5 text-base font-medium text-black rounded-lg bg-[#0a66c2] hover:text-gray-900 hover:bg-gray-100 dark:text-black dark:bg-[#0a66c2] dark:hover:bg-gray-700 dark:hover:text-white">
<FaLinkedin size={50}/>                   
    <span className="w-full m-2 text-white"> Connect with me on Linkedin</span>
    <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a> 
</div>

</div>
  )
}

export default Footer