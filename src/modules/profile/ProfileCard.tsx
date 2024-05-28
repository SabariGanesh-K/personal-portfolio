"use client"
import React, { useState } from 'react'
import MusicAlbumTemplate from './MusicAlbumTemplate'
import { SocialButtons } from './SocialButtons'

const ProfileCard = () => {

  return (
    <div  className='w-[80%]  rounded-2xl bg-[#3f59e4]'>
      <div className='flex flex-row justify-center'>
  <MusicAlbumTemplate/>
  </div>
  <SocialButtons/>
  </div>
  )
}

export default ProfileCard


