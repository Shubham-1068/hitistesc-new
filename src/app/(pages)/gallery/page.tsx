"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AlbumCard from "@/components/AlbumCard";
import ImagesGallery from "@/components/ImageGallery";
import { fetchAlbums } from "@/hooks/useFetchAlbums";

interface Album {
  id: number;
  title: string;
  images: { id: number; imageUrl: string }[];
}

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { data: albums, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-purple-900/30 via-black/50 to-blue-900/30 backdrop-blur-xl p-8"
    >
      <motion.div
        className="max-w-7xl mx-auto mt-16"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Memories from Past
        </motion.h1>

        {isLoading && (
          <div className="fixed inset-0 h-screen flex items-center justify-center">
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </motion.div>
          </div>
        )}

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence>
            {albums?.map((album: Album, index: number) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Dialog
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
                  <DialogContent className="max-w-4xl p-6 max-h-[90vh] overflow-y-auto bg-black/80 backdrop-blur-xl text-white border border-white/20 rounded-xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <h2 className="text-2xl font-semibold text-center mb-6">
                        {selectedAlbum?.title}
                      </h2>
                      {selectedAlbum?.images.length ? (
                        <div className="flex justify-center">
                          <ImagesGallery images={selectedAlbum.images.map(img => ({ original: img.imageUrl }))} />
                        </div>
                      ) : (
                        <p className="text-center text-gray-300">No images available.</p>
                      )}
                    </motion.div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;