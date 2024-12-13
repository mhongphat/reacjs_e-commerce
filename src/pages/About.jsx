import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>  
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Shop Forever is a dynamic and trendy online store dedicated to providing the latest fashion, beauty, and lifestyle products. Our mission is to offer high-quality, stylish products that cater to a wide range of customer preferences, ensuring everyone can find something they love. With a focus on customer satisfaction, we provide a seamless shopping experience, from easy navigation to secure transactions.</p>
              <p>At Shop Forever, we believe in offering the best value with a commitment to authenticity. Our collections are carefully curated to ensure every item reflects the latest trends while maintaining affordability. We also offer a hassle-free 7-day return and exchange policy, along with 24/7 customer support, ensuring a worry-free shopping experience for our customers. Shop with us today and discover products that are as timeless as they are trendy!</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Shop Forever, our mission is to provide our customers with an exceptional shopping experience by offering a curated selection of high-quality, stylish products that cater to diverse tastes and preferences. We strive to inspire confidence and self-expression through fashion, beauty, and lifestyle products that make our customers feel empowered.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>At Shop Forever, we prioritize quality in every aspect of our business. Our Quality Assurance commitment ensures that all products meet the highest standards before reaching our customers</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At Shop Forever, we understand that our customers lead busy lives and appreciate the value of convenience. Our shopping experience is designed with your needs in mind, making it easy to find and purchase your favorite products without any hassle. With a user-friendly website and mobile app, you can browse our extensive range of items anytime and anywhere.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At Shop Forever, your satisfaction is our top priority. Our 24/7 support team is here to assist you with any questions, from product inquiries to order tracking and returns. We aim to provide fast, personalized, and helpful service to ensure your shopping experience is seamless and enjoyable.</p>
          </div>
      </div>  

      <NewletterBox />    
    </div> 
  )
}

export default About
