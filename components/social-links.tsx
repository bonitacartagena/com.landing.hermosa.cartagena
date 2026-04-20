import { Facebook, Instagram } from "lucide-react"

import { WhatsAppIcon } from "@/components/whatsapp-icon"

// TikTok icon component
function TikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function SocialLinks() {
  return (
    <section className="flex flex-col items-center gap-4 py-6 w-full max-w-sm md:max-w-4xl mx-auto px-4">
      <p className="w-full text-muted-foreground text-sm text-center leading-relaxed">
        Únete a nuestra comunidad de <strong>+200.000 viajeros</strong><br />
        Descubre experiencias <strong>únicas</strong>, momentos <strong>inolvidables</strong> 🌴✨
      </p>
      <div className="flex gap-6">
        <a
          href="https://www.facebook.com/share/1BXzpEvBLz/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-10 h-10" />
        </a>
        <a
          href="https://www.instagram.com/hermosacartagena?igsh=d282NmZkNjdudTd2&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-10 h-10" />
        </a>
        <a
          href="https://www.tiktok.com/@hermosacartagena?_r=1&_t=ZS-95fqG1sbicO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
          aria-label="TikTok"
        >
          <TikTok className="w-10 h-10" />
        </a>
        <a
          href="https://wa.me/573244617670"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-green-500 transition-colors"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-10 h-10" />
        </a>
      </div>
    </section>
  )
}
