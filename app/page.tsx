import { Hero } from "@/components/hero";
import { CTAButtons } from "@/components/cta-buttons";
import { SocialLinks } from "@/components/social-links";
import { ImageStrip } from "@/components/image-strip";
import { ToursSection } from "@/components/tours-section";
import { ShortsVideoSection } from "@/components/shorts-video-section";
import { Testimonials } from "@/components/testimonials";
import { TestimonialPhotoSlider } from "@/components/testimonial-photo-slider";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const beforeToursImages = [
  {
    src: "/2_1.jpeg",
    alt: "Playa tropical de aguas cristalinas en Cartagena de Indias",
  },
  {
    src: "/2_2.jpeg",
    alt: "Turistas disfrutando una experiencia inolvidable en el Caribe colombiano",
  },
  {
    src: "/2_3.jpeg",
    alt: "Palenqueras con trajes tradicionales y frutas tipicas en el centro historico de Cartagena",
  },
] as const;

const afterToursImages = [
  {
    src: "/3_1.png",
    alt: "Cultura y arte del Caribe colombiano en Cartagena de Indias",
  },
  {
    src: "/3_2.png",
    alt: "Vista iconica de la muralla y bahia de Cartagena de Indias",
  },
  {
    src: "/3_3.png",
    alt: "Visitantes explorando los atractivos turisticos de Cartagena",
  },
] as const;

const afterVideoImages = [
  {
    src: "/testimonio_2.jpeg",
    alt: "Pareja disfrutando una parada junto al mar durante un tour en Cartagena",
  },
  {
    src: "/testimonio_3.jpeg",
    alt: "Pareja disfrutando la playa en Cartagena",
  },
  {
    src: "/testimonio_1.jpeg",
    alt: "Familia posando en el letrero del Oceanario Islas del Rosario durante su experiencia en Cartagena",
  },
  {
    src: "/testimonio_4.jpeg",
    alt: "Familia viviendo una experiencia de snorkel en Cartagena",
  },
  {
    src: "/testimonio_5.jpeg",
    alt: "Grupo de viajeras disfrutando snorkel y mar cristalino en las Islas del Rosario",
  },
  {
    src: "/testimonio_6.jpeg",
    alt: "Viajeros disfrutando la piscina de un beach club en Cartagena",
  },
  {
    src: "/testimonio_7.jpeg",
    alt: "Grupo de viajeras en el ingreso de un beach club en Cartagena",
  },
  {
    src: "/testimonio_8.jpeg",
    alt: "Pareja disfrutando de un beach club en Cartagena",
  },
  {
    src: "/testimonio_9.jpeg",
    alt: "Viajeras disfrutando una parada frente al mar en Cartagena",
  },
  {
    src: "/testimonio_10.jpeg",
    alt: "Pareja haciendo snorkel en aguas transparentes en Cartagena",
  },
  {
    src: "/testimonio_11.jpeg",
    alt: "Pareja haciendo snorkel en aguas transparentes en Cartagena",
  },
  {
    src: "/testimonio_12.jpeg",
    alt: "Visitantes disfrutando su experiencia en Cartagena",
  },
  {
    src: "/testimonio_13.jpeg",
    alt: "Turistas en una parada durante su tour en Cartagena",
  },
  {
    src: "/testimonio_14.jpeg",
    alt: "Viajeros posando durante su experiencia en Cartagena",
  },
  {
    src: "/testimonio_15.jpeg",
    alt: "Grupo disfrutando de las playas de Cartagena",
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <div className="py-8 md:py-12">
        <CTAButtons />
      </div>

      <SocialLinks />

      <ImageStrip images={beforeToursImages} className="py-8 md:py-12" />

      <ToursSection />

      <ImageStrip images={afterToursImages} className="pb-8 md:pb-12" />

      <ShortsVideoSection />

      <TestimonialPhotoSlider
        images={afterVideoImages}
        className="pb-8 md:pb-12"
      />

      <Testimonials />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
