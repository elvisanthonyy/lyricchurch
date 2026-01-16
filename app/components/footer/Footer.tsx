"use client";
import { FaInstagram, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col w-full md:px-[15%] text-sm text-center py-10  min-h-100 p-5 text-white bg-lyric-gray mt-20">
      <div>
        <div className="mb-3 text-xl font-semibold">Lyric Church</div>
        <div className="text-sm my-7 md:w-[50%] mx-auto text-lyric-lightgray">
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
          <div className="w-50 md:w-90 transition-all ease-in duration-500 hover:bg-white hover:text-black text-md cursor-pointer mx-auto h-13 rounded-4xl flex justify-center items-center border">
            Partner
          </div>
        </Link>
      </div>
      <div className="flex md:justify-center items-center flex-col md:flex-row mx-auto my-10 text-lyric-lightgray">
        <Link href={"/"}>
          <div className="my-3 transition-all ease-in duration-500 hover:text-green-400 md:mr-10">
            Home
          </div>
        </Link>

        <Link href={"/lyric/gallery"}>
          <div className="transition-all md:mr-10 md:mb-0 mb-3 ease-in hover:text-green-600 duration-400">
            Gallery
          </div>
        </Link>
        <Link href={"admin"}>
          <div className="transition-all ease-in hover:text-green-600 duration-400">
            admin
          </div>
        </Link>

        <div></div>
      </div>
      <div className="text-lyric-lightgray">
        jeremiahemmanuelofficial@gmail.com
      </div>
      <div className="flex px-5 my-7 md:w-[50%] mx-auto text-2xl w-full justify-between">
        <Link href={"https://www.facebook.com/Lyrichurch"} target="_blank">
          <FaFacebook />
        </Link>
        <Link
          href={
            "https://www.instagram.com/lyricchurch_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          }
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link href={"https://www.facebook.com/Lyrichurch"} target="_blank">
          <FaYoutube />
        </Link>

        <Link href={"https://t.me/SermonsLyricLibary"} target="_blank">
          <FaTelegram />
        </Link>
      </div>

      <div className="my-5 font-extralight text-lyric-lightgray text-sm">
        &copy; 2026 Lyric Church. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
