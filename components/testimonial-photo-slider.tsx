"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type SliderImage = {
  src: string
  alt: string
}

interface TestimonialPhotoSliderProps {
  images: readonly SliderImage[]
  className?: string
}

export function TestimonialPhotoSlider({
  images,
  className = "",
}: TestimonialPhotoSliderProps) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
        return
      }

      api.scrollTo(0)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [api])

  return (
    <section className={`w-full px-4 md:px-8 lg:px-16 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 md:mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-400">
            Testimonios Reales
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-4xl">
            Asi viven nuestros viajeros la experiencia
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {images.map((image) => (
              <CarouselItem
                key={image.src}
                className="pl-3 basis-[82%] sm:basis-[58%] md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 768px) 58vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/15 bg-background/85 text-foreground backdrop-blur disabled:opacity-35" />
          <CarouselNext className="right-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/15 bg-background/85 text-foreground backdrop-blur disabled:opacity-35" />
        </Carousel>
      </div>
    </section>
  )
}
