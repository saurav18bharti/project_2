import React from "react";
import bigplant from "@/app/assests/bigplant.svg";
import cuboid from "@/app/assests/cuboid.svg";
import sittingman from "@/app/assests/sittingman.png";
import smallplant from "@/app/assests/smallplant.svg";
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
import { BsEmojiSmile } from "react-icons/bs";

const Home = () => {
  const data = [
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


  const data2 = [
   
    {
      subtopic: "Lorem Ipsum is simply dummy text",
      subtopic2:"Lorem Ipsum is simply dummy text",
      image1: mobile,
      image2: sittingman,
      title: "Lorem Ipsum is simply dummy text of the printing. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
      color:"bg-home_first_emoji_color"
    },
 
    {
      subtopic: "Lorem Ipsum is simply dummy text",
      subtopic2:"Lorem Ipsum is simply dummy text",
      image1: daisy,
      image2: sittingman,
      title: "Lorem Ipsum is simply dummy text of the printing. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
      color:"bg-home_second_emoji_color"
    },
 
    {
      subtopic: "Lorem Ipsum is simply dummy text",
      subtopic2:"Lorem Ipsum is simply dummy text",
      image1: vrman,
      image2: sittingman,
      title: "Lorem Ipsum is simply dummy <br/> text of the printing. ",
      desc:"KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
      ,
      color:"bg-home_third_emoji_color"
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
      <div className=" bg-footer_background flex md:flex-col lg:flex-row  justify-around items-center lg:pl-32 md:pl-0 pb-12">
        <div className="flex md:justify-center md:items-center lg:justify-normal lg:items-baseline md:p-8 lg:p-0 flex-1 flex-col gap-10">
          <h1 className="text-5xl font-semibold leading-normal">
            Experienced <span className="text-blue-color">mobile and web </span>{" "}
            <br />
            applications and website <br />
            builders measuring.
          </h1>
          <h5 className="text-footer_text_grey_color text-lg leading-loose">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web{" "}
            <br /> applications and website builders measuring dozens of
            completed projects. <br /> We build and develop mobile applications
            for several top platforms, <br /> including Android & IOS.{" "}
          </h5>
          <div className="flex gap-4 ">
            <button className="py-4 px-16 bg-blue-color text-white rounded-lg text-xl font-normal">
              Contact us
            </button>
            <button className="py-4 px-16 bg-white text-blue-color rounded-lg border border-blue-color text-xl">
              View more
            </button>
          </div>
        </div>
        <div className="flex flex-1 relative md:w-full lg:w-0">
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
          <div className="">

          <Image
            src={sittingman}
            alt="sittingman"
            className="md:w-full lg:w-[40rem] h-[60rem] "
          />
          </div>
          <Image
            width={100}
            src={bigplant}
            alt="bigplant"
            className="h-[15rem] w-[25%] absolute bottom-[3.5rem] left-[33rem]"
          />
        </div>
      </div>
      <div className="flex md:grid md:grid-cols-2 md:place-items-center lg:flex md:p-12 lg:grid-cols-none lg:flex-row items-center py-10 gap-20 justify-center relative border-b-2 border-gray-300">
        <Image
          src={vectorgreen}
          alt="websitecontent"
          className="absolute md:bottom-[312px] lg:bottom-0 left-0"
        />
        {data.map((item, i) => {
          return (
            <div key={i} className="flex md:flex-col lg:flex-row justify-center items-center gap-8">
              <div className={`${item.color} md:p-5 lg:p-7 rounded-3xl`}>
                <Image src={item.image} alt="image" />
              </div>
              <div className="flex flex-col md:justify-center md:items-center lg:justify-normal lg:items-center gap-2">
                <h1 className="font-medium text-xl">{item.title}</h1>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:p-12 md:mb-20 lg:p-24 text-start">
        <h1 className="text-4xl font-semibold py-9 opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <h4 className="text-xl text-gray-400  font-normal leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry
        </h4>
      </div>
      <div className="relative max-w-[1443px] mx-auto">
        <Image src={vectorline} alt="vectorgreen" className="absolute top-[6rem] left-[11.8rem] hidden" />
        {
          data2.map((item, i) => {
            return(
              <>
              <div className={`flex ${i%2 !==0 && 'lg:flex-row-reverse md:flex-col'}  md:flex-col lg:flex-row   md:gap-4 lg:gap-20  items-center  md:pb-28 lg:pb-40 justify-between `}>
             
                <div className=" md:px-12 lg:max-w-[600px]">
                  <div className="flex flex-col md:gap-6 lg:gap-12">
                    <div className="flex items-center gap-4">
                      <div className={`p-6 rounded-full shadow-lg ${item.color}`}>

                    <BsEmojiSmile className="text-2xl text-white" />
                      </div>
                    <p></p>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl font-medium">Lorem Ipsum is simply dummy text</h1>
                      <h3 className="text-gray-400">Lorem Ipsum is simply dummy text</h3>
                    </div>
                    </div>
                    <div className="flex flex-col md:gap-10 lg:gap-14">
                      <p className="text-3xl font-semibold"> <span className="text-blue-color leading-loose ">Lorem Ipsum</span> is simply dummy  text of the printing.</p>
                      <h4 className="text-footer_text_grey_color text-lg leading-relaxed">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders  measuring dozens of completed projects. We build and develop mobile applications for several top platforms,  including Android  & IOS.</h4>
                    </div>
                  </div>
                </div>
                 <Image src={item.image1} alt="image" className="  " /> 
              
              </div>
              </>
            )
          })
        }
    
      <div className="flex md:flex-col lg:flex-row justify-center items-center gap-20 lg:py-12 md:px-12 ">
        {
          data3.map((item, i) => { 
            return(
              <>
              <div className={`relative flex  flex-1 flex-col gap-12 p-16 justify-center items-center ${ i%2 !==0 ? "bg-blue-color" : "bg-home_first_square_bg_color"} rounded-2xl`}>

                {i%2 !==0 ? <Image src={bell} alt="image" className="absolute top-[-5rem] right-[2rem]" /> : ""}
                <h1 className={` ${ i%2 !==0 ? "text-white" : "text-black"} text-3xl opacity-85 font-semibold text-center w-[78%]`}>{item.title}</h1>
                <h3 className={`${ i%2 !==0 ? "text-white" : "text-footer_text_grey_color"} text-lg leading-relaxed text-center  `}>{item.desc}</h3>
                <button className={`py-4 px-10 rounded-lg ${ i%2 !==0 ? "bg-white text-blue-color" : "bg-blue-color text-white"} text-lg w-fit`}>View More</button>
              </div>
              </>
            )
          })
          }
      
      </div>


      <div className="py-40">
        <h1 className="text-center text-3xl font-medium">You will be in good Company</h1>
        <div className="flex flex-wrap md:grid md:grid-cols-2 md:place-items-center lg:flex lg:flex-row justify-between items-center lg:gap-20 md:gap-0 py-6">
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
