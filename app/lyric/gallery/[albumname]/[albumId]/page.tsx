import GalleryNav from "@/app/components/gallery/GalleryNav";
import AlbumMain from "@/app/components/gallery/AlbumMain";

const baseURL = process.env.BASE_URL;

const page = async ({
  params,
}: {
  params: Promise<{ albumname: string; albumId: string }>;
}) => {
  //get params
  const paramsBody = await params;
  const res = await fetch(`${baseURL}/api/gallery/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/jsom",
    },
    body: JSON.stringify({
      albumId: paramsBody.albumId,
    }),
  });

  const data = await res.json();
  console.log(data);
  return (
    <div>
      <GalleryNav albumName={decodeURI(paramsBody.albumname)} />
      <AlbumMain />
    </div>
  );
};

export default page;
