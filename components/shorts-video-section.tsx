const VIMEO_EMBED_URL =
  "https://player.vimeo.com/video/1184823111?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&playsinline=1&responsive=1&title=0&byline=0&portrait=0"

export function ShortsVideoSection() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={VIMEO_EMBED_URL}
              title="Hermosa Cartagena video"
              className="absolute inset-0"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
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
