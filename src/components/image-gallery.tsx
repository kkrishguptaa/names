import type { ImageMetadata } from "astro";
import clsx from "clsx";

export default function ImageGallery({ images }: { images: ImageMetadata[] }) {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="marquee">
      <div className="hover:*:grayscale marquee-track -my-4 flex w-full justify-center gap-5 py-4 sm:gap-8">
        {images.map((image, i) => (
          <div
            key={i}
            className={clsx(
              "hover:grayscale-0! w-max",
              rotations[i % rotations.length]
            )}
          >
            <img
              src={image.src}
              alt=""
              className="h-40 rounded-xl object-cover"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div
            key={i}
            className={clsx(
              "hover:grayscale-0! w-max",
              rotations[i % rotations.length]
            )}
            aria-hidden="true"
          >
            <img
              src={image.src}
              alt=""
              className="h-40 rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
