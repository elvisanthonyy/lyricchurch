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
    <div className="pt-4 w-full h-dvh">
      <div className="flex mb-4 bg-gray-100 md:w-170 text-sm overflow-hidden rounded-xl mx-auto items-center w-[90%] h-12">
        <div className="bg-black text-white font-semibold rounded-xl h-full items-center flex justify-center w-[50%]">
          Albums
        </div>
        <div className=" flex justify-center w-[50%]">All</div>
      </div>
      <div className="w-[90%] gap-y-2 gap-x-2 md:gap-y-5 md:gap-x-5 md:w-[80%] place-content-start place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid md:grid-cols-2 py-3 flex  flex-col min-h-190 mx-auto">
        {albums?.map((album) => (
          <div
            className="w-[98%]"
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
