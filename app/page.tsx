"use client";
import NavBar from "./components/nav/NavBar";
import { useRef, useEffect, useState, Children } from "react";
import Image from "next/image";
import ImageComp from "./components/image/ImageComp";
import { IImage } from "@/models/image";
import { ILeader } from "@/models/leader";
import { IService } from "@/models/service";
import Link from "next/link";
import Footer from "./components/footer/Footer";
import api from "@/libs/api";
import {
  FaUser,
  FaCalendar,
  FaMapMarkerAlt,
  FaBook,
  FaTelegram,
  FaYoutube,
  FaClock,
  FaImage,
  FaAngleUp,
  FaPause,
  FaBackward,
  FaForward,
} from "react-icons/fa";
import ImagePrevComp from "./components/image/ImagePrevComp";

export default function Home() {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [isBlessingOpoen, setIsBlessingOpen] = useState(false);
  const [images, setImage] = useState<IImage[] | []>([]);
  const [leaders, setLeaders] = useState<ILeader[] | []>([]);
  const [services, setServices] = useState<IService[] | []>([]);
  const slides = [1, 2, 3, 4];
  const [inView, setInView] = useState(false);

  const checkInView = () => {
    if (!slideRef.current) return;

    const rect = slideRef.current?.getBoundingClientRect();
    setInView(rect.top < window.innerHeight && rect.bottom > 0);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get("/api/images")
      .then((res) => {
        setImage(res.data.images);
      })
      .catch((err) => {
        console.error("Error", err);
      });
    api
      .get("/api/leaders")
      .then((res) => {
        setLeaders(res.data.leaders);
      })
      .catch((err) => {
        console.error("Error", err);
      });
    api
      .get("/api/services")
      .then((res) => {
        setServices(res.data.services);
      })
      .catch((err) => {
        console.error("Error", err);
      });
    window.addEventListener("scroll", checkInView);
    checkInView();
    return () => window.removeEventListener("scroll", checkInView);
  }, []);

  return (
    <div className="relative">
      <NavBar name="home" />
      <div className="flex relative overflow-hidden text-white text-5xl justify-center items-center w-full h-140 bg-black">
        <div className="absolute w-[88%] rounded-2xl h-40 bg-white/30 backdrop-blur-xs border"></div>
        <div className="absolute text-3xl hub-text text-center left-[50%] top-[50%] -translate-[50%]">
          Lyric Church
        </div>
        <Image
          src={"/nav_body.jpg"}
          alt="laptop image"
          height={500}
          width={350}
          className="w-full object-fill"
        />
        <Link
          className="flex cursor-pointer w-auto h-auto absolute bottom-15"
          href={"/auth/login"}
        ></Link>
      </div>
      <div className="w-full  mx-auto overflow-hidden text-sm flex justify-start items-center text-white h-12 bg-black border-white border-b-2">
        <div className="shrink-0 text-white font-semibold flex w-auto slide-animation mr-5">
          <div className=" flex shrink-0 mx-5">
            January Series - Apostles, Prophets and Faith
          </div>
          <div className="flex shrink-0 mx-5">2026 - Bold</div>
          <div className=" flex shrink-0 mx-5">
            January Series - Apostles, Prophets and Faith
          </div>
          <div className="flex shrink-0 mx-5">2026 - Bold</div>
          <div className=" flex shrink-0 mx-5">
            January Series - Apostles, Prophets and Faith
          </div>
          <div className="flex shrink-0 mx-5">2026 - Bold</div>

          <div className=" flex shrink-0 mx-5">
            January Series - Apostles, Prophets and Faith
          </div>
          <div className="flex shrink-0 mx-5">2026 - Bold</div>
          <div className=" flex shrink-0 mx-5">
            January Series - Apostles, Prophets and Faith
          </div>
          <div className="flex shrink-0 mx-5">2026 - Bold</div>
          <div className=" flex shrink-0 mx-5">
            January Series - Apostles, Prophets and Faith
          </div>
          <div className="flex shrink-0 mx-5">2026 - Bold</div>
        </div>
      </div>
      <div className="relative text-2xl flex justify-center items-center overflow-hidden w-[95%] h-60 rounded-2xl bg-white/20 border mx-auto my-7">
        <Image
          src={"/confeti.svg"}
          height={200}
          width={300}
          alt="confeti image"
          className="z-10 w-[120%] opacity-90 scale-270 absolute top-50 left-0"
        />
        <div className="z-5 absolute px-4 rounded-2xl h-15 flex justify-center items-center  font-bold text-3xl ">
          Welcome to 2026
        </div>
      </div>
      <div>
        {images.map((image) => (
          <div key={image._id.toString()}>
            <ImageComp image={image} />
          </div>
        ))}
      </div>
      <div className="relative px-20 flex text-center justify-center items-center overflow-hidden w-[95%] h-30 rounded-2xl bg-white border mx-auto my-7">
        For Information on merch, contact 09165534410
      </div>
      <div className="relative flex justify-center items-center overflow-hidden w-[95%] min-h-60 max-h-85 rounded-2xl bg-white mx-auto my-4">
        <Image
          src={"/hillsong.jpg"}
          height={300}
          width={300}
          alt="song of the month image"
          className="w-full"
        />
        <div className="absolute border border-white flex justify-between px-10 text-white items-center bottom-10 w-[80%] h-15 rounded-2xl bg-white/10 backdrop-blur-lg">
          <FaBackward /> <FaPause className="text-2xl" /> <FaForward />
        </div>
      </div>
      <div className="relative px-5 py-5 flex flex-col text-center justify-center  overflow-hidden w-[95%] min-h-30 h-auto rounded-2xl bg-white border mx-auto my-7">
        <div className="flex flex-col mb-8 justify-center items-center font-bold my-5">
          <FaMapMarkerAlt className=" mb-5 text-lg" />
          <div className="text-sm">
            Oasis KD @Visa bakery Kudenda, Kaduna, Nigeria.
          </div>
        </div>
        <div className="flex justify-center items-center font-bold mb-7">
          <FaClock className="mr-5 text-lg" />
          Service Time
        </div>
        <div className="w-full g-red-400 shrink-0  flex justify-center flex-col">
          {services.map((service) => (
            <div
              className="flex justify-center h-auto rounded-4xl px-5 py-5 w-full mb-5 bg-gray-100"
              key={service._id.toString()}
            >
              <div className="flex text-sm">{`${service.name} ${service.description}`}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto mb-5 w-[95%]  rounded-2xl border text-center  bg-white py-10">
        <div className="flex items-center mb-5 font-semibold text-lg">
          <FaBook className="mr-5 text-lg" />
          Sermon Library
        </div>

        <div className="w-[80%] mb-8">
          Get updated on every of our sermons via Telegram Channel
        </div>
        <button className="flex cursor-pointer justify-center items-center w-[90%] h-15 bg-black text-white rounded-2xl">
          <FaTelegram className="mr-3 text-2xl" /> Telegram
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto mb-5 w-[95%]  rounded-2xl border text-center  bg-white py-10">
        <div className="w-[80%] font-semibold my-8">
          Follow us on YouTube and stay updated
        </div>
        <button className="flex cursor-pointer justify-center items-center w-[90%] h-15 bg-red-600 text-white rounded-2xl">
          <FaYoutube className="mr-3 text-2xl" /> Youtube
        </button>
      </div>
      <div className="flex justify-center items-center mx-auto mb-5 w-[95%] font-semibold rounded-2xl border text-center text-lg bg-white py-5">
        <div className="flex items-center">
          <FaCalendar className="mr-5 text-lg" />
          Event Calender
        </div>
      </div>
      <div className="relative flex justify-center items-center overflow-hidden w-[95%] rounded-2xl bg-white mx-auto my-4">
        <Image
          src={"/blessings.jpg"}
          height={500}
          width={500}
          alt="song of the month image"
          className="w-full"
        />
        <div
          className={`py-5 pb-8 flex-col absolute border transition-all duration-300 ease-in ${
            isBlessingOpoen ? "h-80" : "h-30"
          }  border-white flex justify-center items-center bottom-5 w-[90%] rounded-2xl bg-white/10 backdrop-blur-lg`}
        >
          <div
            onClick={() =>
              isBlessingOpoen
                ? setIsBlessingOpen(false)
                : setIsBlessingOpen(true)
            }
          >
            <FaAngleUp
              className={`${
                isBlessingOpoen ? "rotate-180" : "rotate-0"
              } text-white mb-4 text-2xl duration-400 transition-all ease-in`}
            />
          </div>
          <div className="text-white font-bold text-xl">Meet the Blessing</div>
          <div
            className={` ${
              isBlessingOpoen ? "opacity-100 flex" : "opacity-0 hidden"
            } text-white transition-all ease-in-out text-md mt-5 mb-3 w-[90%] text-center`}
          >
            This is the worship ministry of The Lyric church Creating the pace
            for you to experience God via Contemporary music and the Gospel
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden bg-blue-50 flex-col justify-center min-h-90 items-center mx-auto mb-5 w-[95%] font-semibold rounded-2xl border text-center text-lg  py-5">
        <div className="relative box-border  -top-10 w-full flex justify-center items-center h-60 overflow-hidden">
          <Image
            src="/partner.svg"
            height={500}
            width={500}
            alt="partner image"
            className="w-full "
          />
        </div>
        <div className="flex shrink-0 mb-5 cursor-pointer justify-center items-center w-[90%] h-14 bg-black rounded-2xl text-white">
          <Link href={"/us/partner"}>Partner with us</Link>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto mb-5 w-[95%] font-semibold rounded-2xl border text-center text-lg bg-white py-5">
        <FaUser className="mr-5 text-lg" />
        Meet Our Leader
      </div>
      <div>
        {leaders.map((leader) => (
          <div
            key={leader._id.toString()}
            className="w-[95%] mb-5 rounded-2xl overflow-hidden h-fit bg-white mx-auto"
          >
            <div className="p-5">
              <div className="font-bold text-lg mb-2">{leader.name}</div>
              <div className="mb-5">{leader.description}</div>
            </div>

            <div className="bg-black w-full h-fit">
              <Image
                src={leader.imageURL}
                height={300}
                width={300}
                alt={leader.name}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mx-auto mb-5 w-[95%]  text-center  bg-white py-10">
        <div className="flex cursor-pointer justify-center items-center w-[90%] h-15 text-black rounded-2xl">
          <FaImage className="mr-3 text-2xl" /> Photo Gallery
        </div>
        <div className="grid grid-cols-2 w-[90%] font-semibold my-8">
          <ImagePrevComp imageURL="/blessings.jpg" />
          <ImagePrevComp imageURL="/Jerryy.jpg" />
          <ImagePrevComp imageURL="/nav_body.jpg" />
          <ImagePrevComp imageURL="/Emma.jpg" />
        </div>

        <button className="flex cursor-pointer justify-center items-center w-[90%] h-15 bg-black text-white rounded-2xl">
          <Link href={"/lyric/gallery"}>See Gallery</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}
