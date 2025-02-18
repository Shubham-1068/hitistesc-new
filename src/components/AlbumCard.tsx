"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface AlbumCardProps {
  id: string;
  title: string;
  coverImage: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title, coverImage }) => {
  const router = useRouter();

  return (
    <div
      className="relative border rounded-lg pb-4 shadow-md cursor-pointer hover:shadow-lg transition"
      onClick={() => router.push(`/gallery/${id}`)}
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full h-auto object-cover rounded-t-md" // Maintains aspect ratio
      />
      <div className="flex justify-between m-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          className="group relative overflow-hidden rounded-md border border-b-2 border-gray-400 bg-gray-950 px-2 py-1 font-medium text-[#FFF8E3] outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75"
          onClick={() => router.push(`/gallery/${id}`)}
        >
          <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-gray-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-gray-400 duration-500 group-hover:top-[150%]"></span>
          view 🏹
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
