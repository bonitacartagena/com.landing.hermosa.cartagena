"use client"

import Image from "next/image"
import { Clock, Check, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const WHATSAPP_NUMBER = "573113410983"

interface TourCardProps {
  id: string
  title: string
  description: string
  image: string
  duration?: string
  includes: string[]
}

export function TourCard({ id, title, description, image, duration, includes }: TourCardProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Me interesa el tour: ${title}`)}`
  const [showAll, setShowAll] = useState(false)
  const VISIBLE_COUNT = 6
  const visibleIncludes = showAll ? includes : includes.slice(0, VISIBLE_COUNT)

  return (
    <article id={id} className="w-full bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Tour Image */}
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="w-full h-auto"
        />
      </div>

      {/* Tour Details */}
      <div className="p-4 md:p-5 space-y-3">
        <h3 className="text-lg md:text-xl font-bold text-foreground tracking-wide">
          {title}
        </h3>
        {duration ? (
          <div className="flex items-center gap-2 text-teal-400">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-medium">{duration}</span>
          </div>
        ) : null}

        <p className="text-muted-foreground leading-relaxed text-xs md:text-sm line-clamp-3">{description}</p>

        {/* Includes */}
        <div className="space-y-2">
          <h4 className="text-teal-400 font-semibold flex items-center gap-2 text-sm">
            <Check className="w-4 h-4" />
            Incluye
          </h4>
          <ul className="space-y-1">
            {visibleIncludes.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="w-3 h-3 text-teal-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
            {includes.length > VISIBLE_COUNT && (
              <li>
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-1 text-xs text-teal-400 font-medium hover:text-teal-300 transition-colors mt-1"
                >
                  {showAll ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      Ver menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      +{includes.length - VISIBLE_COUNT} mas
                    </>
                  )}
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-semibold py-3 px-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/30 mt-3 text-sm"
        >
          Reservar Ahora
        </a>
      </div>
    </article>
  )
}
