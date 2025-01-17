"use client";
import React from "react";
import star from "@/app/assests/Star1.png";
import pai from "@/app/assests/paichart1.png";
import { Facebook, Instagram, Twitter, Linkedin } from "../icons/reacticons";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="footer_main_container">
      <div className="border-b-2 border-gray-200 pb-6 ">
        {pathname !== "/contact" && (
          <div className="flex justify-center items-center relative bg-footer_background">
            <Image
              src={star}
              alt="star"
              width={90}
              className="absolute top-[-48px] left-[165px]"
            />
            <div className="py-44 w-full relative">
              <Image
                src={pai}
                alt="pai"
                width={60}
                className="absolute top-[6rem] md:right-[5rem] lg:right-[43rem]"
              />
              <h1 className="font-semibold text-black md:text-3xl lg:text-4xl text-center py-4 ">
                Lorem Ipsum is simply dummy{" "}
                <p className="py-6">text of the printing.</p>{" "}
              </h1>
              <div className="flex md:flex-col lg:flex-row justify-center items-center md:gap-8 lg:gap-4 py-12">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="md:w-[70%] lg:w-[30%] p-6 outline-none bg-white text-about_text_grey_color rounded-lg text-base"
                />
                <button
                  type="submit"
                  className="py-6 px-12 rounded-lg bg-black text-white text-base"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="py-12 md:px-12 lg:pl-16 flex md:grid md:grid-cols-3 md:place-items-center lg:place-items-baseline lg:flex lg:flex-row items-center justify-between md:gap-4 lg:gap-12 ">
          <div className="flex-1 flex flex-col gap-4 px-4 ">
            <h1 className="text-blue-900 font-bold md:text-2xl lg:text-lg">LOGO</h1>
            <p className="text-footer_text_grey_color text-base opacity-90 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-footer_text_grey_color md:text-base lg:text-lg">@lorem</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 justify-center items-center ">
            <h1 className="text-black font-medium text-lg ml-[-24px]">
              About us
            </h1>
            <ul className="text-footer_text_grey_color md:text-base lg:text-lg flex flex-col gap-2">
              <li>Lorem</li>
              <li>Portfolio</li>
              <li>Carrers</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-4 ">
            <h1 className="text-black font-medium text-lg">Contact us</h1>
            <p className="text-footer_text_grey_color md:text-base lg:text-lg pr-8 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet consectetur{" "}
            </p>
            <h3 className="text-footer_text_grey_color md:text-base lg:text-lg">
              +91 123456789
            </h3>
          </div>
          <div className="flex flex-1 place-self-end">
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
        </div>
      </div>
      <p className="text-center text-footer_text_grey_color py-9">
        Copyright ® 2021 Lorem All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
