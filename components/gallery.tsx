"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "/galeria-mariposas-garcia-marquez.jpeg",
    alt: "Mariposas amarillas inspiradas en el arte de Gabriel Garcia Marquez en Cartagena",
  },
  {
    src: "/castillo-san-felipe-aerea.png",
    alt: "Vista aerea del Castillo San Felipe de Barajas, fortaleza historica de Cartagena de Indias",
  },
  {
    src: "/escultura-palenquera-cartagena.jpeg",
    alt: "Escultura de palenquera, icono cultural del arte urbano de Cartagena",
  },
  {
    src: "/flamingos-manglar-cartagena.png",
    alt: "Flamingos rosados en el manglar de las Islas del Rosario, Cartagena",
  },
  {
    src: "/bote-aguas-cristalinas-cartagena.jpeg",
    alt: "Paseo en bote deportivo por las aguas cristalinas del Caribe colombiano",
  },
  {
    src: "/nado-delfines-cartagena.png",
    alt: "Experiencia de nado con delfines en Cartagena de Indias",
  },
]

export function Gallery() {
  return (
    <section className="w-full py-6 md:py-12">
      <h2 className="text-center text-xl md:text-3xl font-bold text-foreground mb-4 md:mb-8">
        Descubre Cartagena
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 md:px-4 lg:px-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden md:rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
