"use client";

import React from "react";

interface AlbumCardProps {
  id: string;
  title: string;
  coverImage: string;
}

export default function AlbumCard({ id, title, coverImage }: AlbumCardProps) {
  return (
    <div className="relative border rounded-lg pb-4 shadow-md cursor-pointer hover:shadow-lg transition w-[250px]">
      <img
        src={coverImage}
        alt={title}
        className="w-full h-[160px] object-cover rounded-t-md"
      />
      <div className="flex justify-between m-2">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
}
