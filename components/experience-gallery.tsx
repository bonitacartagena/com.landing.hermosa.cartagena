"use client"

import Image from "next/image"

const experiences = [
  {
    src: "/snorkel-islas-cartagena.jpeg",
    alt: "Grupo de turistas haciendo snorkel en las aguas turquesas de las Islas del Rosario",
  },
  {
    src: "/turistas-snorkel-cartagena.jpeg",
    alt: "Turistas disfrutando de snorkel en el Caribe colombiano",
  },
  {
    src: "/amigas-mar-cristalino-cartagena.jpeg",
    alt: "Amigas bañandose en el mar cristalino de las islas de Cartagena",
  },
  {
    src: "/familia-oceanario-cartagena.jpeg",
    alt: "Familia disfrutando del Oceanario en las Islas del Rosario, Cartagena",
  },
  {
    src: "/amigas-playa-turquesa-cartagena.jpeg",
    alt: "Amigas posando en la playa turquesa del Caribe en Cartagena",
  },
  {
    src: "/turistas-islas-del-rosario.jpeg",
    alt: "Turistas explorando las hermosas Islas del Rosario, Cartagena de Indias",
  },
  {
    src: "/tour-murales-getsemani.jpeg",
    alt: "Tour por los famosos murales del barrio Getsemani, Cartagena",
  },
]

export function ExperienceGallery() {
  return (
    <section className="w-full py-6 md:py-12">
      <h2 className="text-center text-xl md:text-3xl font-bold text-foreground mb-4 md:mb-8">
        Vive la Experiencia
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1 md:gap-2 md:px-4 lg:px-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative aspect-square overflow-hidden md:rounded-lg group">
            <Image
              src={exp.src}
              alt={exp.alt}
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
