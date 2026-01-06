"use client";
import { useEffect, useState } from "react";
import Menu from "../image/Menu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "../BackButton";

interface ChildProps {
  name?: string;
}

const NavBar = ({ name }: ChildProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex z-20 h-auto w-full absolute top-0 ">
      <Menu isMenuOpen={isMenuOpen} />
      <div className="mt-5 mx-auto rounded-4xl z-30 flex  items-center justify-between left px-8 w-[90%] h-16 bg-white">
        {name === "home" && (
          <div className="flex items-center">
            <div className="flex mr-3 justify-start items-center">
              <Image src={"/lyriclogo.png"} alt="logo" height={30} width={30} />
            </div>
            <div className="text-lg text-lyric-gray font-semibold">
              Lyric Church
            </div>
          </div>
        )}
        {name !== "home" && <BackButton />}
        <div
          onClick={() =>
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
          }
          className="flex z-30  cursor-pointer flex-col justify-center items-center w-10 h-auto "
        >
          <span
            className={`transition-all duration-400 ease-in w-5 m-1 ${
              isMenuOpen ? "-rotate-45 translate-y-1" : ""
            } rounded-2xl h-0.5 bg-lyric-gray block`}
          ></span>
          <span
            className={`transition-all duration-400 ease-in w-5 mb-1 ${
              isMenuOpen ? "opacity-0" : ""
            } rounded-2xl h-0.5 bg-lyric-gray block`}
          ></span>
          <span
            className={`transition-all duration-400 ease-in w-5 mb-1 ${
              isMenuOpen ? "rotate-45 -translate-y-2" : ""
            } rounded-2xl h-0.5 bg-lyric-gray block`}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
