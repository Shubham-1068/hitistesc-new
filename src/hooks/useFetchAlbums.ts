const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyclXq_8YbOW7amK-lX-7xC7EaIizEZYnT6YXvPB2KLYIrvR_KvRPEorX_l2f6uchdTeg/exec";

export async function fetchAlbums() {
  try {
    const response = await fetch(SCRIPT_URL);
    const data = await response.json();

    // Preload images before returning data
    await Promise.all(
      data.flatMap((album: any) =>
        album.images.map((img: any) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = img.imageUrl;
            image.onload = resolve;
            image.onerror = resolve;
          });
        })
      )
    );

    return data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
}
