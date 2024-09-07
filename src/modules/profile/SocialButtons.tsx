import { GITHUBHREF, INSTAGRAMHREF, LINKEDINHREF, TWITTERHREF } from '@/app/config/constants';
import Link from 'next/link';
import React from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export const SocialButtons = () => {
  return (
    <div className='flex flex-row justify-evenly mt-10 mb-10'>
        <Link          target="_blank" rel="noopener" href={INSTAGRAMHREF}><FaInstagram size={70} /></Link>
        <Link          target="_blank" rel="noopener" href={LINKEDINHREF}><FaLinkedin  size={70} /></Link>
        <Link          target="_blank" rel="noopener" href={GITHUBHREF}><FaGithub   size={70} /></Link>
        <Link          target="_blank" rel="noopener" href={TWITTERHREF}><BsTwitterX   size={70} /></Link>

    </div>
  )
}
