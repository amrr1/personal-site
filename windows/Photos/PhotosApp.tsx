import Image from "next/image";
import { photosData } from "./photos.data";

export function PhotosApp() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 text-sm sm:grid-cols-3">
      {photosData.map((photo) => (
        <figure
          key={photo.id}
          className="overflow-hidden rounded-md border border-neutral-200"
        >
          <div className="relative aspect-square bg-neutral-100">
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
          </div>
          {photo.caption && (
            <figcaption className="p-2 text-xs text-neutral-500">
              {photo.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
