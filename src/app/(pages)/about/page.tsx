import React from "react";
import websitecontent from "/public/services/webapp.svg";
import seotag from "/public/services/seo.svg";
import arvrcloud from "/public/about/cloud.svg";
import mobile from "/public/services/mobile.svg";
import frame from '/public/about/frame.png'
import Image from "next/image";

const page = () => {
  const data = [
      {
        image: websitecontent,
        title: "Web Application",
        color: "bg-mobileapp",
      },
      {
        image: seotag,
        title: "SEO",
        color: "bg-services_seo",
      },
    {
      image: mobile,
      title: "Mobile Applications",
      color: "bg-webapp",
    },
    {
      image: arvrcloud,
      title: "AR/VR Solutions",
      color: "bg-services_arvr",
    },
  ];

  return (
    <div className="about_main_container py-64 ">
        <div className="px-24 flex flex-col gap-16">
            <div className="flex">
                <Image src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg" alt="arvrcloud" width={300} height={100} className=" "/>
                <Image src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg" alt="arvrcloud" width={200} height={1000} className=""/>
         
            <div className="flex flex-col gap-4">
                 <h1 className="text-2xl font-base text-blue-color">About us  </h1>
                 <p className="text-4xl font-bold opacity-85">Lorem Ipsum is simply dummy text of the printing.</p>
                 <p className="text-about_text_grey_color opacity-80 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta fugit rerum debitis nihil.</p>
                 </div>
                 </div>
                 <div className="flex justify-center items-center gap-12 relative">
                 <Image src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg" alt="arvrcloud" width={500} height={200} className="rounded-3xl"/>
                 <Image src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg" alt="arvrcloud" width={500} height={200} className="rounded-3xl "/>
                 <Image src ={frame} width={300} alt="frame" height={100} className="absolute top-[154px] right-[272px] z-[-1]"/>

                 </div>
        </div>
        <div className="pl-32 max-w-[1200px] flex flex-col gap-8 py-40">
            <h1 className="text-5xl font-bold text-blue-color leading-relaxed">Lorem Ipsum is simply dummy text of the printing. </h1>
            <p className="text-about_text_grey_color text-2xl leading-loose">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            </div>
      <div className="pl-32 pb-40 flex justify-between items-center">
        <div className="max-w-[613px] flex flex-col gap-16" >
            <div className="flex flex-col gap-8">
            <div className="empty_border bg-violet-800 h-[6px] w-14"></div>

        <h1 className="text-3xl font-bold">Lorem Ipsum is simply dummy text of the printing. </h1>
            </div>
        <p className="text-about_text_grey_color text-xl ">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects.
        </p>
        <button className="bg-white text-blue-color py-3 px-12 rounded-md border w-fit border-blue-color">
          Contact us
        </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20   bg-white py-20 pl-24   shadow-2xl  shadow-slate-200 ">
          {data.map((item, i) => (
            <div
              key={i}
              className={`flex  items-center gap-8  max-w-fit `}
            >
              <div className={`${item.color} p-6 rounded-3xl`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={100}
                  className="min-w-10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-medium text-2xl text-about_text_color whitespace-nowrap">{item.title}</h1>
        
              </div>
            </div>
          ))}
        </div>

     
       
      </div>
    </div>
  );
};

export default page;
