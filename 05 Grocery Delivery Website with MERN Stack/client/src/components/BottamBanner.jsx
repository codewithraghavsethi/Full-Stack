import React from 'react'
import { assets } from '../assets/greencart_assets/assets'

const BottamBanner = () => {
  return (
    <div className='relative mt-24'>
       <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block'/> 
       <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden'/> 
    </div>
  )
}

export default BottamBanner