import { Palmtree, Star, MessageCircle, ShoppingBag, MapPin } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/573244617670"
const CATALOG_URL = "https://wa.me/c/573244617670"

export function CTAButtons() {
  return (
    <section className="relative z-0 w-full max-w-sm md:max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 md:justify-center">
        <a
          href={CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Tours | Pasadias</span>
          <Palmtree className="w-6 h-6" />
        </a>

        <a
          href="https://drive.google.com/file/d/18xv_JHgElslp9sHsyassqZ4a-PrvioiZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Islas Privadas</span>
          <Star className="w-6 h-6 fill-current" />
        </a>

        <a
          href="https://drive.google.com/file/d/1y0crVW7_PpfZXstU8FXR9mgkXjLAqJBk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Descubre Barú</span>
          <MapPin className="w-6 h-6" />
        </a>

        <a
          href="https://drive.google.com/file/d/1LTHVPTW5x2v8vpNiJEtCKSm95-4Q46g0/view?fbclid=PAdGRleARR411leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafbAR_G-bBV-yoeltrJvLUwK8qoKfAG6bsCysUgIYxsJkSJnqQ5WHPyDZkMXA_aem_HVUF5muSPkVKR2DJvVCkeQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">English Catalog</span>
          <ShoppingBag className="w-6 h-6" />
        </a>

        <a
          href="https://drive.google.com/file/d/1HBbBebX5BgEfzcqkFhHPLxtadyvQFYyn/view?fbclid=PAdGRleARR43ZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacTOtANy0YdNiURwf3fbryNS0_zoDlSfIIS7E9KObgUIEtG-1sVUZ6Wpi8GSA_aem_P4Jh2cDpamj1GIXdNofI9Q"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">Catálogo do Passeios</span>
          <ShoppingBag className="w-6 h-6" />
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-6 md:px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/30 md:min-w-[200px]"
        >
          <span className="text-lg">RESERVA AHORA</span>
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}
