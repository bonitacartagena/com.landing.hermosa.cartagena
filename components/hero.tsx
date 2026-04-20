import Image from "next/image"
const heroImages = [
  { src: "/hero-islas-del-rosario.jpeg", alt: "Turistas en lancha deportiva rumbo a las Islas del Rosario, Cartagena de Indias" },
  { src: "/hero-isla-paradisiaca.png", alt: "Isla paradisiaca de aguas turquesas en el Caribe colombiano" },
  { src: "/hero-bora-bora-beach-club.jpeg", alt: "Bora Bora Beach Club, el mejor beach club de Cartagena" },
] as const

export function Hero() {
  return (
    <section className="relative z-20 w-full pb-10 md:pb-16">
      <h1 className="sr-only">Bonita Cartagena — Tours y Pasadias en Cartagena de Indias</h1>
      <div className="relative h-72 md:h-[500px] lg:h-[600px] w-full overflow-visible">
        <div className="absolute inset-0 overflow-hidden grid grid-cols-3">
          {heroImages.map((image, index) => (
            <div key={image.src} className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}
        </div>


        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 via-[20%] to-transparent to-[70%]" />

        <div className="absolute -bottom-24 md:-bottom-32 lg:-bottom-36 left-1/2 -translate-x-1/2 z-30">
          <Image
            src="/logo-bonita-cartagena.png"
            alt="Bonita Cartagena Logo"
            width={288}
            height={288}
            className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-28 flex justify-center md:mt-36">
        <span className="text-center text-md font-bold text-muted-foreground md:text-lg">
          RNT: 232342
        </span>
      </div>
    </section>
  )
}
