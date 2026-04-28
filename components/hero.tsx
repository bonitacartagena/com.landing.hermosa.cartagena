import Image from "next/image";
import { Check } from "lucide-react";
const heroImages = [
  {
    src: "/1.jpeg?v=2",
    alt: "Turistas en lancha deportiva rumbo a las Islas del Rosario, Cartagena de Indias",
  },
  {
    src: "/2.jpeg?v=2",
    alt: "Isla paradisiaca de aguas turquesas en el Caribe colombiano",
  },
  {
    src: "/3.jpeg?v=2",
    alt: "Bora Bora Beach Club, el mejor beach club de Cartagena",
  },
] as const;

export function Hero() {
  return (
    <section className="relative z-20 w-full pb-10 md:pb-16">
      <h1 className="sr-only">
        Hermosa Cartagena — Tours y Pasadias en Cartagena de Indias
      </h1>
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

        <div
          className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 z-30 md:w-[26rem] md:h-[26rem] lg:w-[34rem] lg:h-[34rem]"
          style={{ width: "18rem", height: "18rem" }}
        >
          <Image
            src="/logo-hermosa-cartagena.png?v=2"
            alt="Hermosa Cartagena Logo"
            width={512}
            height={512}
            className="h-full w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-1 md:mt-8"
        style={{ marginTop: "5rem" }}
      >
        <p className="mb-2 text-center text-lg font-bold leading-none italic text-white md:text-xl md:leading-[0.95]">
          <span className="block">☀️ Líderes en experiencias</span>
          <span className="block text-white">&nbsp;&nbsp;&nbsp;Turísticas en Cartagena 🌴</span>
        </p>
        <p className="text-center text-base md:text-lg font-bold italic text-white/90">
          +100.000 historias felices nos respaldan 🤍
        </p>
        <span className="mt-1 inline-flex items-center gap-1 text-center text-md font-bold text-muted-foreground md:text-lg">
          RNT: 205217
          <Check className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
