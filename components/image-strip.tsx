import Image from "next/image"

type StripImage = {
  src: string
  alt: string
}

interface ImageStripProps {
  images: [StripImage, StripImage, StripImage]
  className?: string
}

export function ImageStrip({ images, className = "" }: ImageStripProps) {
  return (
    <section className={`w-full ${className}`.trim()}>
      <div className="grid grid-cols-3">
        {images.map((image) => (
          <div
            key={`${image.src}-${image.alt}`}
            className="group relative h-72 overflow-hidden md:h-[28rem] lg:h-[34rem]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  )
}
