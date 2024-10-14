import React from 'react'

const NewletterBox = () => {

    const onSubmitHandler = (event) =>{
      event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>"Subscribe Now & Get 20% Off Your First Purchase!"</p>
      <p className='text-gray-400 mt-3'>
      "Subscribe now and get 20% off your first purchase! Don't miss out on exclusive deals, updates, and more."     
       </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewletterBox
