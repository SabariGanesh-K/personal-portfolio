import Link from 'next/link';
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export const SocialButtons = () => {
  return (
    <div className='flex flex-row justify-evenly mt-10 mb-10'>
        <Link href=""><FaInstagram size={70} /></Link>
        <Link href=""><FaLinkedin  size={70} /></Link>
        <Link href=""><FaGithub   size={70} /></Link>


    </div>
  )
}
