import React from "react";
import websitecontent from "/public/services/webapp.svg";
import seotag from "/public/services/seo.svg";
import arvrcloud from "/public/about/cloud.svg";
import mobile from "/public/services/mobile.svg";
import frame from "/public/about/frame.png";
import vectorgreen from "/public/about/vectorgreen.svg";
import vectorblue from "/public/about/vectorblue.svg";
import Image from "next/image";
import EmblaCarousel from "./(embala-crousel)/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./(embala-crousel)/embla.css";

const OPTIONS: EmblaOptionsType = { containScroll: undefined };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
  const crousel_data = [
    {
      img: "https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg",
      name: "John Doe",
      role: "CEO",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg",
      name: "John Doe",
      role: "CEO",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg",
      name: "John Doe",
      role: "CEO",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg",
      name: "John Doe",
      role: "CEO",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg",
      name: "John Doe",
      role: "CEO",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg",
      name: "John Doe",
      role: "CEO",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg",
      name: "John Doe",
      role: "CEO",
    },
  ];

  return (
    <div className="about_main_container py-64 ">
      <div className="md:pl-0 lg:pl-24 flex flex-col gap-16 relative ">
        <div className="flex gap-16 items-center px-16 relative ">
          <Image
            src={vectorgreen}
            alt="green"
            width={100}
            height={50}
            className="absolute bottom-[186px] right-0"
          />
          <div className="pt-16">
            <Image
              src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg"
              alt="arvrcloud"
              width={350}
              height={100}
              className=" h-[380px] rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg"
              alt="arvrcloud"
              width={400}
              height={100}
              className="rounded-3xl h-[450px]"
            />
          </div>

          <div className="flex flex-col gap-8 max-w-[600px]">
            <h1 className="text-2xl font-base text-blue-color">About us </h1>
            <p className="text-4xl font-bold opacity-85 leading-loose">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="text-about_text_grey_color opacity-80 text-xl leading-loose">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              fugit rerum debitis nihil.
            </p>
          </div>
        </div>
        <div className="flex md:flex-col lg:flex-row justify-center items-center gap-12 relative">
          <Image
            src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg"
            alt="arvrcloud"
            width={700}
            height={200}
            className="rounded-3xl"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2023/07/18/07/17/pineapple-8134236_1280.jpg"
            alt="arvrcloud"
            width={700}
            height={200}
            className="rounded-3xl "
          />

          <Image
            src={frame}
            width={500}
            alt="frame"
            height={100}
            className="absolute md:top-[675px] md:right-[9px] lg:top-[160px] right-[90px] z-[-1]"
          />
        </div>
        <Image
          src={vectorblue}
          alt="blue"
          width={90}
          height={30}
          className="absolute bottom-[-293px] left-0 z-50"
        />
      </div>
      <div className="md:pl-12 lg:pl-32 max-w-[1200px] flex flex-col gap-8 pt-80 pb-40">
        <h1 className="md:text-4xl lg:text-5xl font-bold text-blue-color leading-loose ">
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </h1>
        <p className="text-about_text_grey_color md:text-xl lg:text-2xl">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS. We build and develop mobile
          applications for several top platforms, including Android & IOS.{" "}
        </p>
      </div>
      <div className="md:pl-12 lg:pl-32  pb-40 flex md:flex-col lg:flex-row justify-between items-center">
        <div className=" lg:pl-0 lg:max-w-[613px] flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="empty_border bg-violet-800 h-[6px] w-14"></div>

            <h1 className="text-3xl font-bold">
              Lorem Ipsum is simply dummy text of the printing.{" "}
            </h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:grid-items-center    bg-white py-20 md:p-8 lg:pl-24   shadow-2xl  shadow-slate-300 md:mt-16 lg:mt-0 ">
          {data.map((item, i) => (
            <div
              key={i}
              className={`flex md:flex-col lg:flex-rows  items-center gap-8  max-w-fit `}
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
                <h1 className="font-medium text-2xl text-about_text_color whitespace-nowrap">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:pl-12 lg:pl-32 flex flex-col gap-20 md:overflow-hidden lg:overflow-visible">
        <p className="text-2xl font-medium">Our Team</p>
        <EmblaCarousel slides={crousel_data} options={OPTIONS} />
      </div>
    </div>
  );
};

export default page;
