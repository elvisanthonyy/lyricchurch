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
    <div className="py-4 w-full bg-white h-dvh">
      <div className="flex mb-4 bg-gray-100 text-sm overflow-hidden rounded-xl mx-auto items-center w-[90%] h-12">
        <div className="bg-black text-white font-semibold rounded-xl h-full items-center flex justify-center w-[50%]">
          Albums
        </div>
        <div className=" flex justify-center w-[50%]">All</div>
      </div>
      <div className="w-[90%] py-3 flex  flex-col min-h-190 mx-auto">
        {albums?.map((album) => (
          <div
            onClick={() =>
              router.push(
                `/lyric/gallery/${encodeURI(album.name)}/${album._id}`
              )
            }
            key={album._id.toString()}
          >
            <GalleryCategoryComp
              name={album.name}
              thumbnailURL="/nav_body.jpg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryMain;
