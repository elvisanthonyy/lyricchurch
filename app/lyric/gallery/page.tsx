import GalleryNav from "@/app/components/gallery/GalleryNav";
import GalleryMain from "@/app/components/gallery/GalleryMain";

export const dynamic = "force-dynamic";

const baseURL = process.env.BASE_URL;

export const metadata = {
  title: "Lyric Gallery",
};

const page = async () => {
  const res = await fetch(`${baseURL}/api/gallery/albums`);

  const data = await res.json();
  console.log(data);

  return (
    <div>
      <GalleryNav />
      <GalleryMain albums={data.galleryAlbums} />
    </div>
  );
};

export default page;
