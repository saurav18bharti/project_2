import Image from 'next/image'
import React from 'react'
import websitecontent from "/public/services/webapp.svg";
import seotag from "/public/services/seo.svg";
import arvr from "/public/services/arvr.svg"
import mobile from "/public/services/mobile.svg"
import data2 from '../blog/data.json'

const page = () => {
    var data = [
        {
            image: mobile,
            title: "Mobile Applications",
            desc: "The simplest but robust technology to accompany with you",
            color: "bg-webapp",
          },
        {
          image: websitecontent,
          title: "Web Application",
          desc: "Platform independant business solutions for maximum availability",
          color: "bg-mobileapp",
        },
        {
          image: seotag,
          title: "SEO",
          desc: "Let the world find you on top of others",
          color: "bg-services_seo",
        },
        {
          image: arvr,
          title: "AR/VR Solutions",
          desc: "Advanced autonomous technologies to make life simple",
          color: "bg-services_arvr",
        },
       
      ];
  return (
    <div>

    <div className='flex flex-col justify-center items-center bg-footer_background relative pb-[16rem]'>
        <div className='flex flex-col items-center justify-center gap-8 pt-20 '>
     
            <div className='bg-white p-8 rounded-full'>
            <Image src='/services/speaker.jpg' alt="web" width={75} height={200} className='rounded-full' />

            </div>
            <h1 className='text-4xl font-semibold'>Our <span className='text-blue-color'>Services</span></h1>
            <p className='max-w-[390px] text-center text-footer_text_grey_color text-lg leading-loose '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>

        </div>
    <div className='absolute bottom-[-231px]'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20  place-items-center  bg-white py-20 px-36 rounded-xl relative shadow-2xl  shadow-slate-200 ">
            <Image src='/services/smallplant.jpg' alt="web" width={130} height={300} className='absolute rounded-full top-[-4rem] right-[4rem] mix-blend-darken' />
        {data.map((item, i) => (
          <div key={i} className={`flex justify-between items-center gap-8 max-w-[512px] px-10 `}>
            <div className={`${item.color} p-7 rounded-3xl`}>
              <Image src={item.image} alt={item.title} width={60} height={100} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-2xl">{item.title}</h1>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
        </div>
        <div className='flex  items-center app-content2 pb-36 pt-96 px-20 gap-28 bg-white '>
            <div className='flex flex-col gap-12 max-w-[533px]'>
              <h1 className='text-3xl font-semibold opacity-85'> <span className='text-blue-color'>Lorem Ipsum</span> is simply dummy text of the printing. </h1>
              <h3 className='text-footer_text_grey_color text-lg'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </h3>
              <h3 className='text-footer_text_grey_color text-lg'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens</h3>
              <button className='bg-white text-blue-color py-3 px-12 border border-blue-color rounded-lg w-fit'>Contact us</button>
            </div>
            <Image src='/services/servicesboygirl.jpg' alt="web" width={600} height={200} className='' />
        </div>
        <div className='flex relative py-36 px-40 justify-around items-center bg-blue-color z-0'>
          <Image src='/services/line1.svg' alt="web" width={190} height={200} className='absolute left-[18rem] top-[-103px] ' />
          <Image src='/services/bell.svg' alt="web" width={150} height={200} className='absolute right-[18rem] top-[-72px] ' />
          <div className='text-center'>
            <p className='text-8xl text-white'>6</p>
            <h4 className='text-base font-normal text-white'>Happy Clients</h4>
          </div>
          <div className='text-center'>
            <p className='text-8xl text-white'>11</p>
            <h4 className='text-base font-normal text-white'>Completed Projects</h4>
          </div>
          <div className='text-center'>
            <p className='text-8xl text-white'>7M</p>
            <h4 className='text-base font-normal text-white'>Transactions</h4>
          </div>
          <div className='text-center'>
            <p className='text-8xl text-white'>6000+</p>
            <h4 className='text-base font-normal text-white'>Customer</h4>
          </div>
          <Image src='/services/line2.svg' alt="web" width={190} height={200} className='absolute left-0  bottom-[-12px] '/>
          <Image src='/services/smallplant.svg' alt="web" width={130} height={300} className='absolute rounded-full bottom-[-4rem] left-[25rem] z-10' />
          <Image src='/services/line3.png' alt="web" width={300} height={300} className='absolute rounded-full top-[-68px] right-[18rem] ' />
        </div>

        <div className="flex flex-col gap-24 px-20 pt-48 pb-32 pl-72 ">
          <h1 className='text-4xl font-medium'>Ourl Latest Projects</h1>
          <div className='flex  gap-20'>

       
        {data2.slice(0,4).map((item, index) => (
          <div key={index} className="w-fit flex  flex-col gap-10 max-w-[350px] ">
            <Image
              src={item.img1}
              alt="image"
              width={400}
              height={400}
              className="rounded-3xl w-full"
            />

            <h1 className="text-2xl font-bold ">{item.title}</h1>
            <p className="text-gray-600 text-xl  leading-loose">
              {item.description}
            </p>
           
          </div>
        ))}
           </div>
      </div>
    </div>
      
  
  )
}

export default page
