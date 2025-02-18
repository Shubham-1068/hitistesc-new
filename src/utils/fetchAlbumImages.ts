import axios from "axios";

export interface ImageItem {
  original: string;
  thumbnail: string;
}

// Function to fetch images for a specific album
export const fetchAlbumImages = async (albumId: string): Promise<ImageItem[]> => {
  try {
    const response = await axios.get<string[]>(
      `https://google-photos-album-demo2.glitch.me/${albumId}`
    );

    return response.data?.map((url) => ({
      original: `${url}=w1024`,
      thumbnail: `${url}=w100`,
    })) || [];
  } catch (error) {
    console.error("Error fetching album images:", error);
    return [];
  }
};
