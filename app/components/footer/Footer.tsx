"use client";
import { FaInstagram, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full text-sm text-center py-10  min-h-100 p-5 text-white bg-lyric-gray mt-20">
      <div>
        <div className="mb-3 text-xl font-semibold">Lyric Church</div>
        <div className="text-sm my-7 text-lyric-lightgray">
          Lyric Church Accronym for{" "}
          <span className=" mr-1 font-semibold">
            LIVING YOUR REALITY IN CHRIST
          </span>
          Is a youth church with the sole aim of creating the pace for you to
          experience God no matter your State we do this via the word and
          contemporary worship .. We have a mandate to Reintroduce God to our
          generation Love for God Love for Soul Spirit Filled Living are our
          core values
        </div>
        <Link href={"/us/partner"}>
          <div className="w-50 text-md cursor-pointer mx-auto h-13 rounded-4xl flex justify-center items-center border">
            Partner
          </div>
        </Link>
      </div>
      <div className="my-10 text-lyric-lightgray">
        <div className="my-3">Home</div>
        <div>Gallery</div>
        <div></div>
      </div>
      <div className="flex px-5 my-7 text-2xl w-full justify-between">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <FaTelegram />
      </div>
      <div className="my-5 font-extralight text-lyric-lightgray text-sm">
        &copy; 2026 Lyric Church. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
