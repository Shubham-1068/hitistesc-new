// "use client"
import axios from "axios";
import ImagesGallery from "@/components/ImageGallery";
import { fetchAlbumImages,ImageItem } from "@/utils/fetchAlbumImages";

interface AlbumDetailPageProps {
    params: { albumId: string };
}




export default async function AlbumDetailPage({ params }: AlbumDetailPageProps) {
    const images = await fetchAlbumImages(params.albumId);
    return (
        <div className="my-12 h-[90%]">

            <ImagesGallery images={images} />
            {/* <button
                onClick={() => window.history.back()} // Go back to the previous page (gallery)
                className="absolute top-4 right-4 bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            >
                ✖
            </button> */}
        </div>
    );
}
