import Link from "next/link";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import man from "@/public/assets/images/men.jpg";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="h-[500px]  w-full flex bg-white">
      <div className="flex-1 flex flex-col items-center justify-center  gap-5">
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
            <span className="capitalize underline hover:no-underline cursor-pointer font-semibold text-gray-800">
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
    </div>
  );
};

export default Landing;
