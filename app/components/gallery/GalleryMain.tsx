"use client";
import GalleryCategoryComp from "./GalleryCategoryComp";
import { IGalleryAlbum } from "@/models/galleryAlbum";
import { useRouter } from "next/navigation";

interface ChildProps {
  albums: IGalleryAlbum[];
}

const GalleryMain = ({ albums }: ChildProps) => {
  const router = useRouter();
  return (
    <div className="py-5 w-full bg-white h-dvh">
      <div className="flex mb-4 overflow-hidden rounded-xl mx-auto items-center w-[95%] h-15">
        <div className="bg-gray-200 font-semibold rounded-xl h-full items-center flex justify-center w-[50%]">
          Albums
        </div>
        <div className=" flex justify-center w-[50%]">All</div>
      </div>
      <div className="w-[90%] py-5 flex  flex-col min-h-190 mx-auto">
        {albums?.map((album) => (
          <div
            onClick={() =>
              router.push(
                `/lyric/gallery/${encodeURI(album.name)}/${album._id}`
              )
            }
            key={album._id.toString()}
          >
            <GalleryCategoryComp name={album.name} thumbnailURL="/Jerryy.jpg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryMain;
