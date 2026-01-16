"use client";
import { useRouter } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";

interface ChildProps {
  mode?: string;
}

const BackButton = ({ mode }: ChildProps) => {
  const router = useRouter();

  return (
    <div
      className={`cursor-pointer ${
        mode === "dark" && "text-white md:text-lyric-gray"
      }`}
      onClick={() => router.back()}
    >
      <MdChevronLeft className="text-3xl" />
    </div>
  );
};

export default BackButton;
