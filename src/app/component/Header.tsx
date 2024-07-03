'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  const pathname = usePathname();

  const route = [
    {name:'Home',path:'/'},
    {name:'About us',path:'/about'},
    {name:'Services',path:'/services'},
    {name:'Blog',path:'/blog'},
  ]

  return (
    <div className='header_main_content font-poppins flex justify-between p-8 border-b-2'>
      <p className='Logo_name font-bold text-blue-color text-4xl md:text-3xl'>LOGO</p>
      <div className='flex justify-center items-center gap-12'>

    
      <ul className='justify-center items-center gap-12 font-medium hidden lg:flex'>
        {
          route.map(({name,path})=>{
            return <Link href={path} key={path}><li className={`relative ${pathname === path ? 'text-blue-color' : ''}`} >{name} { pathname === path ? <p className='absolute bg-bindi-color w-2 h-2 top-[-4px] left-[-4px] rounded-md'></p>:""}</li></Link>
          })



        }


     
      </ul>
     <Link href={'/contact'}><button className={`bg-blue-color text-white py-3 px-6 rounded-md hover:text-black ${pathname === '/contact' ? 'text-white font-bold' : ''}`}>Contact us</button></Link> 
      </div>
    </div>
  )
}

export default Header
