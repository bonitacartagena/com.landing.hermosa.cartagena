"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, Brasil 🇧🇷",
    rating: 5,
    text: "Experiência simplesmente perfeita! 😍 As ilhas são lindas e o atendimento foi impecável do início ao fim. Me senti muito bem cuidado pela equipe. Foi inesquecível! Kkkkkkk",
    avatar: "C"
  },
  {
    name: "Jessica Brown",
    location: "Miami, USA 🇺🇸",
    rating: 5,
    text: "Everything was smooth and well organized. The team made us feel comfortable the whole time. This wasn't just a tour, it felt like a full experience. We kill it!",
    avatar: "J"
  },
  {
    name: "Luis Hernández",
    location: "Ciudad de México, México 🇲🇽",
    rating: 5,
    text: "Realizamos el 5 islas VIP, el tour estuvo chingon y los lugares que visitamos en Cartagena una completa chulada. Destaco mucho la atención de los guías, siempre al pendiente de nosotros.",
    avatar: "L"
  },
  {
    name: "Miguel Santos",
    location: "Santo Domingo, República Dominicana 🇩🇴",
    rating: 5,
    text: "🔥🔥🔥 Una locura vivir la Chiva rumbera! Conoces pila de lugares y al finalizar se forma el verdadero Teteo en la discoteca RD, Ay mi madreeee",
    avatar: "M"
  },
  {
    name: "Valentina Rojas",
    location: "Buenos Aires, Argentina 🇦🇷",
    rating: 5,
    text: "Che, si podes anda a Isla Palma, es un paraíso total, la pasamos re piola, Gracias a Hermosa Cartagena nos llevamos un recuerdo inolvidable.",
    avatar: "V"
  },
  {
    name: "Sebastián Torres",
    location: "Santiago, Chile 🇨🇱",
    rating: 4,
    text: "Bonita experiencia, las playas hermosas y el ambiente muy entretenido. El acompañamiento fue muy bueno, podria mejorar el tramo a Baru.",
    avatar: "S"
  },
  {
    name: "Diego Ramírez",
    location: "Lima, Perú 🇵🇪",
    rating: 5,
    text: "Todo salió perfecto 🙌 Desde la reserva hasta el regreso. El equipo siempre pendiente, se nota el profesionalismo de Hermosa Cartagena.",
    avatar: "D"
  },
  {
    name: "Camille Dubois",
    location: "Paris, France 🇫🇷",
    rating: 5,
    text: "Une expérience incroyable! L'équipe était très attentionnée. Merci à Hermosa Cartagena pour ce moment inoubliable.",
    avatar: "C"
  },
  {
    name: "Rafael Costa",
    location: "Rio de Janeiro, Brasil 🇧🇷",
    rating: 4,
    text: "Muito bom passeio! As águas são lindas 😎 e o atendimento foi excelente. Se forem a Cholon, tomem cuidado com seus pertences.",
    avatar: "R"
  },
  {
    name: "Anthony Jackson",
    location: "New York, USA 🇺🇸",
    rating: 5,
    text: "Amazing experience! The guides were super friendly and the whole team made sure we were safe and having fun.",
    avatar: "A"
  },
  {
    name: "Fernanda López",
    location: "Guadalajara, México 🇲🇽",
    rating: 5,
    text: "Una experiencia inolvidable 😍 Todo súper bien organizado, pero lo mejor fue el trato humano. Gracias a Hermosa Cartagena por tanto.",
    avatar: "F"
  },
  {
    name: "José Martínez",
    location: "Punta Cana, República Dominicana 🇩🇴",
    rating: 4,
    text: "Buen servicio y excelente ambiente. Siempre atentos a nosotros y muy buena energía durante todo el tour.",
    avatar: "J"
  },
  {
    name: "Bruno Alves",
    location: "Recife, Brasil 🇧🇷",
    rating: 5,
    text: "Cartagena é incrível! 🌴💙 O atendimento foi perfeito e a experiência com Hermosa Cartagena foi inesquecível!",
    avatar: "B"
  },
  {
    name: "Kevin Williams",
    location: "Houston, USA 🇺🇸",
    rating: 4,
    text: "Great tour overall. Beautiful locations and good energy. Everything was well handled and organized.",
    avatar: "K"
  },
  {
    name: "Martina Pérez",
    location: "Córdoba, Argentina 🇦🇷",
    rating: 5,
    text: "Una experiencia única! 👏✨ La atención fue espectacular. Juan estuvo pendiente en todo momento y eso hizo la diferencia. Gracias a Hermosa Cartagena.",
    avatar: "M"
  }
]

export function Testimonials() {
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
    <section className="w-full py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-secondary/30">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-12">
        Lo Que Dicen Nuestros Viajeros
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
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/2 xl:basis-1/3"
            >
              <div className="h-full bg-card backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border/50 hover:border-amber-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/15 bg-background/85 text-foreground backdrop-blur disabled:opacity-35" />
        <CarouselNext className="right-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/15 bg-background/85 text-foreground backdrop-blur disabled:opacity-35" />
      </Carousel>
    </section>
  )
}
