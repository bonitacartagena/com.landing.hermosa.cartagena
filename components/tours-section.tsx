"use client"

import { useEffect, useState } from "react"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TourCard } from "./tour-card"

const tours = [
  {
    id: "5islas",
    title: "5 ISLAS VIP",
    description: "Vive una experiencia unica y completa con nuestro tour 5 Islas VIP! Realiza las actividades mas geniales e increibles durante tu viaje en las hermosas Islas del Rosario.",
    image: "/tour-5-islas-vip.jpeg",
    duration: "",
    includes: [
      "Recogida en zona hotelera",
      "Guia abordo",
      "Transporte en bote deportivo",
      "Actividad de snorkel",
      "Visita avioneta Pablo Escobar",
      "Almuerzo tipico (3 opciones)",
      "Plancton nocturno",
      "Snack incluido",
      "Retorno en bus climatizado",
      "Seguro de asistencia medica"
    ]
  },
  {
    id: "chiva",
    title: "CHIVA RUMBERA",
    description: "Visita los lugares mas emblematicos de Cartagena mientras te la pasas genial a bordo de nuestra increible chiva rumbera. Recorrido panoramico por Bocagrande, Laguito y la Bahia.",
    image: "/tour-chiva-rumbera.jpeg",
    duration: "2 horas (7-9 PM o 9-11 PM)",
    includes: [
      "Recorrido en Chiva Rumbera",
      "Ruta por Bocagrande y Laguito",
      "Torre del Reloj",
      "Castillo San Felipe",
      "India Catalina",
      "Muelle de los Pegasos",
      "Parada en Zapatos Viejos",
      "Letras de CARTAGENA",
      "Cover ingreso a discoteca"
    ]
  },
  {
    id: "getsemani",
    title: "TOUR GETSEMANI",
    description: "Recorre Getsemani, el barrio mas colorido de Cartagena y descubre su increible historia. Reconocido como el 4to mejor barrio del mundo por la revista Forbes.",
    image: "/tour-getsemani.jpeg",
    duration: "1-2 horas",
    includes: [
      "Guia local profesional",
      "Murales artisticos 📷🎨",
      "Calle de la Serpiente",
      "Plaza de la Trinidad",
      "Calle Lomba",
      "Callejon Angosto y Ancho",
      "Calle Tripita y Media",
      "Otras visitas especiales"
    ]
  },
  {
    id: "borabora",
    title: "BORA BORA BEACH CLUB",
    description: "Te mereces algo unico! Visita el mejor beach club de Cartagena y el Caribe. BORA BORA te espera con las mejores instalaciones y vistas al mar.",
    image: "/tour-bora-bora-beach-club.jpeg",
    duration: "Hasta las 3:00 PM",
    includes: [
      "Transporte en lancha deportiva",
      "Coctel de bienvenida 🍹🍸",
      "Cama de playa o asoleadora",
      "Almuerzo a la carta (12+ opciones)"
    ]
  },
  {
    id: "volcan-totumo",
    title: "VOLCAN DEL TOTUMO",
    description: "Disfruta la tranquilidad de sumergirte en este increíble spa natural, ¡El gran volcan del totumo te espera!",
    image: "/volcan_totumo.JPG.jpeg",
    duration: "",
    includes: [
      "Recogida en Hotel",
      "Traslado via terrestre",
      "Baño Volcán del Totumo",
      "Visita a nuestro hotel",
      "Coctel de bienvenida",
      "Almuerzo Típico Caribeño",
      "Servicio de Piscina",
      "Acceso a la playa",
      "Retorno al hotel 3pm"
    ]
  },
  {
    id: "atardecer-sibarita",
    title: "ATARDECER SIBARITA MASTER",
    description: "Disfruta tu aventura con el mágico atardecer por la bahía de Cartagena en el exclusivo sibarita Master",
    image: "/atardecer.JPG.jpeg",
    duration: "2 horas (Salida 5:00 PM)",
    includes: [
      "Salida - 5:00 PM",
      "Recorrido por 2 horas",
      "Barra libre en licores",
      "Menú de bebidas premium y pasabocas a bordo con costo"
    ]
  },
  {
    id: "city-tour",
    title: "CITY TOUR CARTAGENA",
    description: "Recorre los lugares mas emblemáticos de la ciudad y vive la historia detras de la Hermosa Cartagena",
    image: "/city_tour_cartagena.JPG.jpeg",
    duration: "",
    includes: [
      "Recogida en el hotel",
      "Recorrido Bocagrande, laguito y castillo grande",
      "Visita Bahía de Cartagena",
      "Torre del Reloj",
      "India Catalina",
      "Muelle de los Pegazos",
      "Castillo de San Felipe",
      "Letras de CARTAGENA",
      "Visita a las botas viejas",
      "Retorno al Hotel"
    ]
  },
  {
    id: "ibbiza",
    title: "IBBIZA",
    description: "Un paraíso de aguas cristalinas en las islas del rosario que te hará vivir un día de confort, tranquilidad y aventuras. ¡Ibbiza te espera!",
    image: "/ibbiza_tour.JPG.jpeg",
    duration: "",
    includes: [
      "Transporte en bote deportivo",
      "Cóctel de bienvenida",
      "Almuerzo típico caribeño",
      "Uso de instalaciones"
    ]
  },
  {
    id: "isla-palma",
    title: "ISLA PALMA",
    description: "Te mereces lo mejor, ven y vive una experiencia única, en la isla mas exclusiva que encontraras en el caribe",
    image: "/isla_palma.jpeg",
    duration: "",
    includes: [
      "Recogida en el hotel",
      "Aperitivo o snack",
      "Transporte en bote",
      "Cóctel de bienvenida",
      "Almuerzo tipo buffet",
      "Uso de instalaciones",
      "Actividades en la playa",
      "Retorno al muelle"
    ]
  },
  {
    id: "luxury",
    title: "LUXURY",
    description: "Vive un grandioso día de playa en islas del rosario, disfruta de este atractivo lugar con aguas cristalinas",
    image: "/luxury.JPG.jpeg",
    duration: "",
    includes: [
      "Transporte en bote deportivo",
      "Almuerzo típico caribeño",
      "Open bar",
      "Uso de instalaciones"
    ]
  },
  {
    id: "oceanario",
    title: "OCEANARIO",
    description: "Recorre las Islas del rosario, contempla sus hermosos paisajes, visita el oceanario y descubre la variedad marina que el caribe tiene para ti!",
    image: "/oceanario.JPG.jpeg",
    duration: "",
    includes: [
      "Recogida en Hotel",
      "Recorrido islas del rosario",
      "Visita al Oceanario",
      "Almuerzo Típico Caribeño",
      "Retorno al Hotel"
    ]
  },
  {
    id: "rosario-del-mar",
    title: "ROSARIO DEL MAR",
    description: "Un rincón paradisíaco perfecto para desconectarte de la rutina, rodeado de aguas cristalinas y la mejor vibra que tu cuerpo necesita!",
    image: "/rosario_mar.jpeg",
    duration: "",
    includes: [
      "Transporte en bote deportivo",
      "Cóctel de bienvenida",
      "Almuerzo típico caribeño",
      "Uso de instalaciones"
    ]
  }
]

const touristTripSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tours Destacados — Bonita Cartagena',
  itemListElement: tours.map((tour, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'TouristTrip',
      name: tour.title,
      description: tour.description,
      url: `https://bonitacartagena.com/#${tour.id}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Bonita Cartagena',
        telephone: '+573113410983',
      },
      touristType: 'Leisure',
      itinerary: {
        '@type': 'ItemList',
        itemListElement: tour.includes.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item,
        })),
      },
    },
  })),
}

export function ToursSection() {
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
    }, 3000)

    return () => window.clearInterval(interval)
  }, [api])

  return (
    <section id="tours" className="w-full py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12">
        Tours Destacados
      </h2>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="mx-auto max-w-7xl"
      >
        <CarouselContent className="-ml-4">
          {tours.map((tour) => (
            <CarouselItem
              key={tour.id}
              className="pl-4 basis-[85vw] sm:basis-[60%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <TourCard {...tour} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/15 bg-background/85 text-foreground backdrop-blur disabled:opacity-35" />
        <CarouselNext className="right-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/15 bg-background/85 text-foreground backdrop-blur disabled:opacity-35" />
      </Carousel>
    </section>
  )
}
