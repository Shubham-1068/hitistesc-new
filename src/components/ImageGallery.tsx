import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface ImagesGalleryProps {
  images: { original: string }[];
}

export default function ImagesGallery({ images }: ImagesGalleryProps) {
  return (
    <PhotoProvider maskOpacity={0.9}>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((img, index) => (
          <PhotoView key={index} src={img.original}>
            <img
              src={img.original}
              alt="Gallery Image"
              className="w-[250px] h-[250px] object-cover rounded-lg cursor-pointer"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
