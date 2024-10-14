import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>"Easy Exchange Policy - Shop with Confidence"</p>
        <p className='text-gray-400'>"We Offer a Hassle-Free Exchange Policy for Your Convenience"</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>""7-Day Return Policy - Satisfaction Guaranteed""</p>
        <p className='text-gray-400'>""We Provide a 7-Day Free Return Policy for a Worry-Free Shopping Experience""</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>""Best-in-Class Customer Support - We're Here to Help!""</p>
        <p className='text-gray-400'>""We Provide 24/7 Customer Support - Assistance Anytime, Anywhere""</p>
      </div>

    </div>
  )
}

export default Ourpolicy
