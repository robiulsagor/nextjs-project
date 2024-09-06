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
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div className="h-[500px]  w-full flex bg-white relative">
      {/* left side */}
      <div className="flex-1 flex flex-col items-center justify-center  gap-5  ">
        <span className="bg-blue-400 bg-opacity-20 text-blue-700 px-2 py-1 rounded-lg w-max uppercase font-semibold">
          we are expert in this field
        </span>
        <h2 className="text-4xl font-bold max-w-[50%] capitalize text-center">
          get a smart way for your business
        </h2>

        <p className="text-gray-400 text-sm max-w-[50%] text-center">
          Agilos helps you to convert your data into a stategic asset and top
          notch business insights minddestmentor.
        </p>

        <div className="flex items-center justify-around w-full md:w-2/3">
          <Link
            href="/"
            className="bg-blue-600 px-4 py-2 rounded-lg inline-flex items-center gap-3 text-white uppercase font-semibold hover:bg-blue-800 transition "
          >
            Our Services{" "}
            <FaArrowRight size={30} className="p-2 bg-blue-800  rounded-full" />{" "}
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
      <div className="flex-1  flex items-center justify-center">
        <Image
          src={man}
          width={390}
          height={500}
          className="w-[350px] h-[500px]"
          alt="man"
        />
      </div>

      {showVideo && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setShowVideo(!showVideo)}
        >
          <div
            className="absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] h-[380px] w-[450px] p-2 bg-[#f1f1f1] rounded-md border flex items-center justify-center"
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
  );
};

export default Landing;
