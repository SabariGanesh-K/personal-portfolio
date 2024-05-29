"use client"
import React, { useState } from 'react'
import MusicAlbumTemplate from './MusicAlbumTemplate'
import { SocialButtons } from './SocialButtons'

const ProfileCard = () => {

  return (
    <div  className='md:w-[80%] xs:w-screen  rounded-2xl bg-[#3f59e4]'>
      <div className='flex flex-row justify-center'>
  <MusicAlbumTemplate/>
  </div>
  <SocialButtons/>
  </div>
  )
}

export default ProfileCard


