import { Instagram, MessageCircle, Phone, Facebook, MapPin } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/573113410983"

// TikTok icon component
function TikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="w-full bg-secondary py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-bold text-foreground">Contacto</h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Escribenos por WhatsApp
            </a>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+57 311 341 0983</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Cartagena de Indias, Colombia</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-bold text-foreground">Siguenos</h3>
            <a
              href="https://www.instagram.com/bonitacartagena?igsh=MXNpcmF0MGRsM3lmeg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground py-2 px-4 rounded-full transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              @BONITACARTAGENA
            </a>

            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/1832eSoeLA/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/bonitacartagena?igsh=MXNpcmF0MGRsM3lmeg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@bonitacartagena?_r=1&_t=ZS-94nnG45L5Pz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-400 transition-colors"
                aria-label="TikTok"
              >
                <TikTok className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
            <h3 className="text-2xl font-bold text-foreground">Bonita Cartagena</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Tours y experiencias inolvidables en el Caribe colombiano. Vive la magia de Cartagena.
            </p>
            <p className="text-muted-foreground text-xs">
              RNT: 232342
            </p>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center pt-8 mt-8 border-t border-border">
          <p className="text-muted-foreground/60 text-xs">
            {new Date().getFullYear()} Bonita Cartagena. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
