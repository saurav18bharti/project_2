import React from 'react'
import star from '@/app/(assests)/Star1.png'
import pai from '@/app/(assests)/paichart1.png'

import Image from 'next/image'


const Footer = () => {
  return (
    <div className='footer_main_container'>

     <div className='border-b-2 border-gray-200 pb-6'>
        <div>
            <Image src={star} alt="star" width={10} />
            <div>
                <Image src={pai} alt="pai" width={10} />
                <h1>Lorem Ipsum is simply dummy text of the printing. </h1>
                <div>
                    <input type="text" placeholder='Enter your email'    />
                    <button    type='submit'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className='py-12 pl-16 flex items-center justify-between gap-12 '>
            <div className='flex-1 flex flex-col gap-4 px-4 '>
                <h1 className='text-blue-900 font-bold text-lg'>LOGO</h1>
                <p className='text-footer_text_grey_color text-xl '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className='text-footer_text_grey_color text-xl'>@lorem</p>
            </div>
            <div className='flex-1 flex flex-col gap-4 justify-center items-center '>
                <h1 className='text-black font-medium text-lg ml-[-24px]'>About us</h1>
                <ul className='text-footer_text_grey_color text-xl flex flex-col gap-2'>
                    <li>Lorem</li>
                    <li>Portfolio</li>
                    <li>Carrers</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='flex-1 flex flex-col gap-4 '>
                <h1 className='text-black font-medium text-lg'>Contact us</h1>
                <p className='text-footer_text_grey_color text-xl pr-8 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur  </p>
                <h3 className='text-footer_text_grey_color text-xl'>+91 123456789</h3>
            </div>
            <div className='flex flex-1 place-self-end gap-2'>
                <Image src={star} alt="star" width={60} className='shadow rounded-full'/>
                <Image src={star} alt="star" width={60} className='shadow rounded-full'/>
                <Image src={star} alt="star" width={60} className='shadow rounded-full'/>
                <Image src={star} alt="star" width={60} className='shadow rounded-full'/>
            </div>
        </div>
     </div>
     <p className='text-center text-footer_text_grey_color py-9'>Copyright ® 2021 Lorem All rights Rcerved</p>
    </div>
  )
}

export default Footer
