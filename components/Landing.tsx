"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaPlayCircle,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";
import man from "@/public/assets/images/men.jpg";
import Image from "next/image";
import { useState } from "react";

const Landing = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="px-5 pt-5 sm:px-0 md:px-20 shadow pb-1 bg-white">
      <div className="flex flex-col md:flex-row justify-around items-center h-full px-5">
        {/* left side */}
        <div className="flex flex-col justify-center items-center py-10 gap-5">
          <span className="bg-blue-100  text-blue-600 px-5 py-1 rounded-xl w-fit uppercase font-semibold">
            we are expert in this field
          </span>
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold sm:w-[100%] lg:w-[450px] py-3 capitalize text-center">
            get a smart way for your business
          </h2>

          <p className="text-gray-400 text-sm w-[80%] md:[500px] text-center">
            Agilos helps you to convert your data into a stategic asset and top
            notch business insights minddestmentor.
          </p>

          <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-evenly md:justify-between w-full md:w-[400px] lg:w-[90%] py-2">
            <Link
              href="/"
              className="bg-blue-600 px-4 py-2 rounded-lg inline-flex items-center gap-3 text-white uppercase font-semibold hover:bg-blue-800 transition text-xs lg:text-base"
            >
              Our Services
              <FaArrowRight
                size={30}
                className="p-2 bg-blue-800  rounded-full"
              />{" "}
            </Link>

            <div className="text-blue-600">
              <FaPlayCircle size={30} />
            </div>

            <div>
              <span
                className="capitalize underline hover:no-underline cursor-pointer font-semibold text-gray-800"
                onClick={() => setShowVideo(!showVideo)}
              >
                Watch the video
              </span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1   items-center justify-center hidden lg:flex">
          <Image
            src={man}
            className="w-full h-full md:h-[490px] md:w-[350px] md:mt-10"
            alt="man"
          />
        </div>

        {showVideo && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setShowVideo(!showVideo)}
          >
            <div
              className="absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] h-[75%] w-full md:h-[380px] md:w-[450px] p-2 bg-[#f1f1f1] rounded-md border flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <FaTimes
                size={22}
                className="absolute right-1 top-1 cursor-pointer"
                onClick={() => setShowVideo(!showVideo)}
              />
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FVHspnpHPmM?si=tJDrHe1sn4IfhWye"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
