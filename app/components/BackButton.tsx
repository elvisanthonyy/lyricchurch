"use client";
import { useRouter } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";

interface ChildProps {
  mode?: string;
  name?: string;
}

const BackButton = ({ mode, name }: ChildProps) => {
  const router = useRouter();

  return (
    <div
      className={`cursor-pointer ${
        mode === "dark" && name !== "gallery"
          ? "text-white md:text-lyric-gray"
          : "md:text-white"
      }`}
      onClick={() => router.back()}
    >
      <MdChevronLeft className="text-3xl" />
    </div>
  );
};

export default BackButton;
