import React from "react";
import bigplant from "@/app/assests/bigplant.png";
import cuboid from "@/app/assests/cuboid.png";
import sittingman from "@/app/assests/sittingman.png";
import smallplant from "@/app/assests/smallplant.png";
import vectorblue from "@/app/assests/vectorblue.png";
import websitecontent from "@/app/assests/websitecontent.png";
import seotag from "@/app/assests/seotag.png";
import coding from "@/app/assests/coding.png";
import arvr from "@/app/assests/arvrsolution.png";
import vectorgreen from "@/app/assests/vectorgreen.png";
import mobile from "@/app/assests/mobile.png";
import daisy from "@/app/assests/daisy.png";
import vrman from "@/app/assests/vrman.png";
import leotrippi from "@/app/assests/leotrippi.png";
import hypergrid from "@/app/assests/hypergrid.png";
import beneoshop from "@/app/assests/beneoshop.png";
import caspio from "@/app/assests/caspio.png";
import bell from "@/app/assests/bell.png";
import vectorline from "@/app/assests/vectorline.png";

import Image from "next/image";
import { title } from "process";

const Home = () => {
  var data = [
    {
      image: websitecontent,
      title: "Web Application",
      desc: "Lorem Ipsum is simply",
      color: "bg-webapp",
    },
    {
      image: seotag,
      title: "SEO",
      desc: "Lorem Ipsum is simply",
      color: "bg-seo",
    },
    {
      image: arvr,
      title: "AR/VR Solutions",
      desc: "Lorem Ipsum is simply",
      color: "bg-arvr",
    },
    {
      image: coding,
      title: "Mobile Applications",
      desc: "Lorem Ipsum is simply",
      color: "bg-mobileapp",
    },
  ];


  var data2 = [
   
    {
      subtopic: "Lorem Ipsum is simply dummy text",
      subtopic2:"Lorem Ipsum is simply dummy text",
      image1: mobile,
      image2: sittingman,
      title: "Lorem Ipsum is simply dummy text of the printing. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
    },
 
    {
      subtopic: "Lorem Ipsum is simply dummy text",
      subtopic2:"Lorem Ipsum is simply dummy text",
      image1: daisy,
      image2: sittingman,
      title: "Lorem Ipsum is simply dummy text of the printing. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
    },
 
    {
      subtopic: "Lorem Ipsum is simply dummy text",
      subtopic2:"Lorem Ipsum is simply dummy text",
      image1: vrman,
      image2: sittingman,
      title: "Lorem Ipsum is simply dummy <br/> text of the printing. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
    },
 
   
  ];

  var data3 = [
    {
      title: "Lorem Ipsum is simply dummy text. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
    },
    {
      title: "Lorem Ipsum is simply dummy text. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
    },
  ]

  return (
    <div className="home_main_container">
      <div className=" bg-footer_background flex  justify-around items-center pl-32 pb-12">
        <div className="flex flex-1 flex-col gap-10">
          <h1 className="text-5xl font-semibold leading-normal">
            Experienced <span className="text-blue-color">mobile and web </span>{" "}
            <br />
            applications and website <br />
            builders measuring.
          </h1>
          <h5 className="text-footer_text_grey_color text-xl leading-loose">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web{" "}
            <br /> applications and website builders measuring dozens of
            completed projects. <br /> We build and develop mobile applications
            for several top platforms, <br /> including Android & IOS.{" "}
          </h5>
          <div className="flex gap-4 ">
            <button className="py-4 px-16 bg-blue-color text-white rounded-xl text-xl font-normal">
              Contact us
            </button>
            <button className="py-4 px-16 bg-white text-blue-color rounded-xl border border-blue-color text-xl">
              View more
            </button>
          </div>
        </div>
        <div className="flex flex-1 relative">
          <Image
            width={150}
            height={500}
            src={cuboid}
            alt="cuboid"
            className="absolute right-[6.4rem] top-[9rem]"
          />
          <Image
            src={vectorblue}
            alt="vectorblue"
            className="h-fit w-[5%] absolute right-0 top-[16rem]"
          />
          <Image
            src={smallplant}
            alt="smallplant"
            className="w-[10%] h-fit absolute top-[18rem]"
          />
          <Image
            src={sittingman}
            alt="sittingman"
            className="w-[40rem] h-[60rem]"
          />
          <Image
            width={100}
            src={bigplant}
            alt="bigplant"
            className="h-[15rem] w-[25%] absolute bottom-[3.5rem] left-[33rem]"
          />
        </div>
      </div>
      <div className="flex items-center py-10 gap-20 justify-center relative border-b-2 border-gray-300">
        <Image
          src={vectorgreen}
          alt="websitecontent"
          className="absolute bottom-0 left-0"
        />
        {data.map((item, i) => {
          return (
            <div key={i} className="flex justify-center items-center gap-8">
              <div className={`${item.color} p-7 rounded-3xl`}>
                <Image src={item.image} alt="image" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-medium text-xl">{item.title}</h1>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-24 text-center">
        <h1 className="text-4xl font-semibold py-9 opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <h4 className="text-xl text-gray-400  font-normal leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry
        </h4>
      </div>
      <div className="relative app-content">
        <Image src={vectorline} alt="vectorgreen" className="absolute top-[6rem] left-[11.8rem]" />
        {
          data2.map((item, i) => {
            return(
              <>
              <div className="flex  gap-20  items-center  pb-40 justify-between ">
              {i%2 !==0 && <Image src={item.image1} alt="image" className=" " /> }
             
                <div className="">
                  <div className="flex flex-col gap-12">
                    <div className="flex items-center gap-4">
                    <Image width={55} height={10} src={item.image2} alt="image" className="p-4 rounded-full shadow-lg" />
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl font-medium">Lorem Ipsum is simply dummy text</h1>
                      <h3 className="text-gray-400">Lorem Ipsum is simply dummy text</h3>
                    </div>
                    </div>
                    <div className="flex flex-col gap-14">
                      <p className="text-4xl font-semibold"> <span className="text-blue-color leading-loose ">Lorem Ipsum</span> is simply dummy <br/> text of the printing.</p>
                      <h4 className="text-footer_text_grey_color text-xl leading-relaxed">KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br/> mobile and web applications and website builders <br/> measuring dozens of completed projects. We build and <br/> develop mobile applications for several top platforms, <br/> including Android  & IOS.</h4>
                    </div>
                  </div>
                </div>
                {i%2 ===0 && <Image src={item.image1} alt="image" className="  " /> } 
              
              </div>
              </>
            )
          })
        }
    
      <div className="flex justify-center items-center gap-20 py-12 ">
        {
          data3.map((item, i) => { 
            return(
              <>
              <div className={`relative flex flex-1 flex-col gap-12 p-16 justify-center items-center ${ i%2 !==0 ? "bg-blue-color" : "bg-gray-300"} rounded-2xl`}>

                {i%2 !==0 ? <Image src={bell} alt="image" className="absolute top-[-5rem] right-[2rem]" /> : ""}
                <h1 className={` ${ i%2 !==0 ? "text-white" : "text-black"} text-3xl font-semibold text-center w-[78%]`}>{item.title}</h1>
                <h3 className={`${ i%2 !==0 ? "text-white" : "text-footer_text_grey_color"} text-xl leading-relaxed text-center  `}>{item.desc}</h3>
                <button className={`py-4 px-10 rounded-lg ${ i%2 !==0 ? "bg-white text-blue-color" : "bg-blue-color text-white"} text-xl w-fit`}>View More</button>
              </div>
              </>
            )
          })
          }
      
      </div>


      <div className="py-40">
        <h1 className="text-center text-3xl font-medium">You will be in good Company</h1>
        <div className="flex justify-between items-center gap-20 py-6">
          <Image src={beneoshop} alt="sittingman" />
          <Image src={caspio} alt="sittingman" />
          <Image src={hypergrid} alt="sittingman" />
          <Image src={leotrippi} alt="sittingman" />

        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
