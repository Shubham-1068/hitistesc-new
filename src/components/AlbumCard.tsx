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
      className="border rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition"
      onClick={() => router.push(`/gallery/${id}`)}
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
    </div>
  );
};

export default AlbumCard;
