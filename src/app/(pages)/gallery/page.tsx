import AlbumCard from "@/components/AlbumCard";

interface Album {
  id: string;
  title: string;
  coverImage: string;
}

// Sample album data
const albums: Album[] = [
  {
    id: "KxepJGFEeXVy2Pzt6",
    title: "Sports",
    coverImage: "https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg",
  },
  {
    id: "WWHo7qNLT3MQr4KM8",
    title: "Core Team 2025",
    coverImage:
      "https://res.cloudinary.com/dqs4ncrqj/image/upload/v1739885081/448171728_829929378557166_2086437918609803086_n_qrxidf.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="mt-24 mx-12 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Memories from Past</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            title={album.title}
            coverImage={album.coverImage}
          />
        ))}
      </div>
    </div>
  );
}
