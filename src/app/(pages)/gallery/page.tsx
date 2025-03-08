"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AlbumCard from "@/components/AlbumCard";
import ImagesGallery from "@/components/ImageGallery";
import { fetchAlbums } from "@/hooks/useFetchAlbums";
import { useQuery } from "@tanstack/react-query";

interface Album {
  id: number;
  title: string;
  images: { id: number; imageUrl: string }[];
}

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch albums with TanStack Query
  const { data: albums, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  return (
    <div className="mt-24 mx-12">
      <h1 className="text-2xl font-bold mb-4 text-center">Memories from Past</h1>

      {/* Loading State */}
      {isLoading && <p className="text-center">Loading albums...</p>}

      {/* Album Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums?.map((album: Album) => (
          <Dialog
            key={album.id}
            open={isOpen && selectedAlbum?.id === album.id}
            onOpenChange={setIsOpen}
          >
            <DialogTrigger asChild>
              <div onClick={() => { setSelectedAlbum(album); setIsOpen(true); }}>
                <AlbumCard
                  id={String(album.id)}
                  title={album.title}
                  coverImage={album.images[0]?.imageUrl || ""}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-6 max-h-[80vh] overflow-y-auto bg-gray-900 text-white border border-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold text-center mb-4">
                {selectedAlbum?.title}
              </h2>
              {selectedAlbum?.images.length ? (
                <div className="flex justify-center">
                  <ImagesGallery images={selectedAlbum.images.map(img => ({ original: img.imageUrl }))} />
                </div>
              ) : (
                <p className="text-center">No images available.</p>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
