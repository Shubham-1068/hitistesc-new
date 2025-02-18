import AlbumCard from "@/components/AlbumCard";

interface Album {
  id: string;
  title: string;
  coverImage: string;
}

// Sample album data
const albums: Album[] = [
  {
    id: "KxepJGFEeXVy2Pzt6", // Your Google Photos album
    title: "Sports",
    coverImage: "https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg", 
  },
//   {
//     id: "album2",
//     title: "Family Memories",
//     coverImage: "https://via.placeholder.com/300",
//   },
];

export default function GalleryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Photo Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
