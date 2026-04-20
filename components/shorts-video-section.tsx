'use client'

import { useEffect, useRef } from "react"

const VIDEO_ID = "yAgV-QQrDD8"

export function ShortsVideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const play = () => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "https://www.youtube.com"
      )
    }

    // Un único retry al cargar, por si el player aún no estaba listo
    const handleLoad = () => window.setTimeout(play, 500)

    // Reproducir cuando el usuario vuelve a la pestaña
    const handleVisibility = () => { if (!document.hidden) play() }

    iframe.addEventListener("load", handleLoad)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      iframe.removeEventListener("load", handleLoad)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-[9/16] w-full">
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&playsinline=1&controls=0&rel=0&enablejsapi=1`}
              title="Bonita Cartagena video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
