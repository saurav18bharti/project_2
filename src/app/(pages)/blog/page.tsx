import React from "react";
import data from "./data.json";
import Image from "next/image";

const Blog = () => {
  var button = [
    {
      button: "Read More",
    },
    {
      button: "Read More",
    },
    {
      button: "Read More",
    },
    {
      button: "Read More",
    },
    {
      button: "Read More",
    },
  ];
  return (
    <div className="blog_main_container">
      <div className="text-center flex flex-col gap-10 py-24 justify-center items-center">
        <h1 className="text-5xl font-bold">Latest News</h1>
        <h1 className="text-5xl font-bold text-blue-color">Updates</h1>
        <p className="text-gray-500 text-2xl font-medium w-[23%] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <input
          type="text"
          placeholder="Search"
          className="text-text_color p-3 text-lg  w-[23%] leading-relaxed outline-none bg-gray-100 rounded-lg"
        />
        <div className="flex justify-center items-center gap-10 py-8">
          {button.map((item, index) => {
            return (
              <>
                {index !== 4 ? (
                  <button
                    className="py-3 px-10 bg-button_color text-blue-color rounded-3xl  text-base outline-none font-normal"
                    key={index}
                  >
                    {item.button}
                  </button>
                ) : (
                  <button
                    className="py-3 px-10 bg-blue-color text-white rounded-3xl  text-base outline-none font-normal"
                    key={index}
                  >
                    {item.button}
                  </button>
                )}
              </>
            );
          })}
        </div>
      </div>

      <div className="flex  items-center gap-20 px-40">
        <Image
          src={data[0].img1}
          alt="image"
          width={600}
          height={300}
          className=""
        />
        <div className="flex gap-12 flex-col max-w-2xl">

      

        <h1 className="text-4xl font-semibold ">
          Lorem Ipsum is simply dummy text of the printing.
        </h1>
        <p className="text-gray-600 text-lg  leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
       
        <div className="flex justify-between  items-center ">
          <div className="flex items-center gap-6">
            <Image
              src={data[0].img2}
              alt="image"
              width={60}
              height={60}
              className="rounded-full h-16 w-16"
            />
            <div>
              <h1 className="text-lg font-semibold">Name here</h1>
              <p className="text-gray-500">20.12.2020</p>
            </div>
          </div>
          <p className="text-blue-color">Read More</p>
        </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 p-40 ">
        {data.map((item, index) => (
          <div key={index} className="w-fit flex flex-col gap-10 ">
            <Image
              src={item.img1}
              alt="image"
              width={400}
              height={400}
              className="rounded-3xl"
            />

            <h1 className="text-2xl font-bold ">{item.title}</h1>
            <p className="text-gray-600 text-xl  leading-loose">
              {item.description}
            </p>
            <div className="flex  items-center gap-6">
              <Image
                src={item.img2}
                alt="image"
                width={60}
                height={60}
                className="rounded-full h-16 w-16"
              />
              <div>
                <h1 className="text-lg font-semibold">{item.name}</h1>
                <p className="text-gray-500">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
