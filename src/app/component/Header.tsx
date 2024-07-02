import Link from 'next/link'
import React from 'react'

const Header = () => {

  return (
    <div className='header_main_content font-poppins flex justify-between p-8 border-b-2'>
      <p className='Logo_name font-bold text-blue-color text-4xl md:text-3xl'>LOGO</p>
      <div className='flex justify-center items-center gap-12'>

    
      <ul className='justify-center items-center gap-12 font-medium hidden lg:flex'>

       <Link href="/"><li className='relative'>Home<p className='absolute bg-bindi-color w-2 h-2 top-[-4px] left-[-4px] rounded-md'></p></li></Link> 
       <Link href="/about"><li>About us</li></Link> 
       <Link href={"/services"}> <li >Services</li></Link>
       <Link href="/blog"><li>Blog</li></Link> 
     
      </ul>
      <button className='bg-blue-color text-white py-3 px-6 rounded-md'>Contact us</button>
      </div>
    </div>
  )
}

export default Header
