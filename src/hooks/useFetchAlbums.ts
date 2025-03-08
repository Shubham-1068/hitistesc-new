const SCRIPT_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiKOr_5HekyQouj2ZMAbeuwCULwLJ2ZfGIORJejYLwDQwt6T4q0fhfL0O1WDrjleNNvbIyh816DoEL-0dZv5miRId8dwMUaEJXJ8iGoXk91L2E2WDLEJC-6t83Sc_K3vdPFXM33QdlxokvAcyW30DraLr7vsCJ8nx4B48ASMND8Aco_R7TgKgNvSUZooXcSEQ0RfdRQeuZkjiiAS1fOoIbiITRAbbW_oHW1J86_s9TNDbjS9BtTf_HaMnOVEumpIyUXWTJEaCuwwxfSodZZBPyBRQRUic1tovtS84QU&lib=MOpcFF-xq-2OIsK3Z6Wvnaq13UpjZ4oie";

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
