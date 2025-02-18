// "use client"
import axios from "axios";
import ImagesGallery from "@/components/ImageGallery";
interface ImageItem {
    original: string;
    thumbnail: string;
}

interface AlbumDetailPageProps {
    params: { albumId: string };
}

// Function to fetch images for a specific album
export const fetchAlbumImages = async (albumId: string): Promise<ImageItem[]> => {
    try {
        const response = await axios.get<string[]>(
            `https://google-photos-album-demo2.glitch.me/${albumId}`
        );

        const images = response.data?.map((url) => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
        })) || [];

          console.log("Fetched images:", images); // Debugging

        return images;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};


export default async function AlbumDetailPage({ params }: AlbumDetailPageProps) {
    const images = await fetchAlbumImages(params.albumId);
    return (
        <div className="p-12">

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
