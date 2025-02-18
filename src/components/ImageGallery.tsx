"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageItem {
  original: string;
  thumbnail: string;
}

interface ImagesGalleryProps {
  images: ImageItem[];
}

const ImagesGallery: React.FC<ImagesGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) return <p>No images available.</p>;

  return <ImageGallery items={images} />;
};

export default ImagesGallery;
