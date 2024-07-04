import { Facebook, Instagram, Linkedin, Twitter } from "@/app/icons/reacticons";
import Image from "next/image";
import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const page = () => {
  return (
    <div className="contact_main_container">
      <div className="flex flex-col md:px-8 lg:px-32">
        <div className="flex items-center justify-between md:flex-col lg:flex-row md:gap-28 lg:gap-0 md:p-12 lg:p-20">
          <div className="flex flex-col md:justify-center md:items-center lg:justify-normal lg:items-baseline gap-10">
            <div className="bg-women_bg_color w-fit rounded-full p-4">
              <Image
                src="/contact/women.svg"
                alt="star"
                width={50}
                height={100}
                className=""
              />
            </div>

            <h1 className="text-5xl font-semibold">Let s Collaborate</h1>
            <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </div>
          <Image
            src="/contact/map.jpg"
            alt="star"
            width={900}
            height={100}
            className=""
          />
 
        </div>
        <div className="three_item flex justify-between items-center md:py-20 lg:py-12 md:px-0 lg:px-20">
          <div className="flex flex-col md:justify-center md:items-center lg:justify-normal lg:items-center md:gap-6 lg:gap-0 ">
            <p className="text-lg font-normal p-3">Follow us</p>
            <ul className="flex flex-1  gap-4">
              <li className="text-lg rounded-3xl p-3 shadow-xl border-gray-400">
                <Facebook />
              </li>
              <li className="text-lg rounded-3xl p-3 shadow-lg">
                {" "}
                <Instagram />
              </li>
              <li className="text-lg rounded-3xl p-3 shadow-lg">
                {" "}
                <Twitter />
              </li>
              <li className="text-lg rounded-3xl p-3 shadow-lg">
                {" "}
                <Linkedin />
              </li>
            </ul>
          </div>
          <div className="empty_border h-[114px] border border-r-0 border-gray-300 "></div>
          <div className="flex md:flex-col lg:flex-row justify-center items-center gap-8">
            <PiPhoneCallFill className="text-4xl" />
            <p className="md:text-base lg:text-xl font-light">+94 123344555</p>
          </div>
          <div className="empty_border h-[114px] border border-r-0 border-gray-300 "></div>
          <div className="flex md:flex-col lg:flex-row justify-center items-center gap-8 max-w-[400px]">
            <FaLocationDot className="text-4xl" />
            <p className="md:text-base lg:text-xl font-light">
              but also the leap into electronic typesetting
            </p>
          </div>
        </div>
      </div>
      <div className="bg-footer_background py-20">
        <div className=" flex flex-col justify-center items-center">
          
          
            <div className="text-center">
              <h1 className="text-3xl font-normal p-4">Say hello</h1>
              <p className="text-sm text-footer_text_grey_color">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div className="flex flex-col items-end">
            <form className=" flex flex-col gap-12 py-20">
              <div className="flex justify-center items-center gap-12">
                <div className="flex flex-col gap-2">
                  <h3 className="text-footer_text_grey_color font-medium">
                    First Name
                  </h3>
                  <input
                    type="text"
                    className="max-w-[400px] py-4 px-16 rounded-md outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-footer_text_grey_color font-medium">
                    Last Name
                  </h3>
                  <input
                    type="text"
                    className="max-w-[400px] py-4 px-16 rounded-md outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-footer_text_grey_color font-medium outline-none">
                  Email Address
                </h3>
                <input
                  type="text"
                  className="max-w-[800px] py-4 px-16 rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-footer_text_grey_color font-medium">
                  Message
                </h3>
                <textarea className="w-full min-h-52 p-3 outline-none rounded-md"></textarea>
              </div>
            </form>
            <button className="py-3 px-12 rounded-lg bg-blue-color text-white text-base font-light ">Get in touch</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
