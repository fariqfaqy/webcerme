import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowUpRight } from 'lucide-react'
import { PHOTO_PLACEHOLDER_PATH } from '../models/umkm.js'

export default function HeroMarquee({ umkms = [] }) {
  const handlePhotoError = useCallback((event) => {
    const image = event.currentTarget
    const currentSource = image.getAttribute('src') || ''
    const alternateSource = currentSource.replace(/\.jpe?g(?=\?|#|$)/i, (match) =>
      match.toLowerCase() === '.jpg' ? '.jpeg' : '.jpg'
    )

    if (alternateSource !== currentSource && !image.dataset.triedAlternateFormat) {
      image.dataset.triedAlternateFormat = 'true'
      image.src = alternateSource
      return
    }

    image.src = PHOTO_PLACEHOLDER_PATH
  }, [])

  // Collect ONLY 1 main photo per UMKM
  const photoList = (umkms || []).map((u, idx) => {
    const mainPhoto = Array.isArray(u?.foto) && u.foto.length > 0 ? u.foto[0] : PHOTO_PLACEHOLDER_PATH
    return {
      photo: mainPhoto,
      id: u.id || '',
      nama: u.nama || 'UMKM Cerme',
      kategori: u.kategori || 'Produk',
      alamat: u.alamat || 'Desa Cerme',
      uniqueId: `${u.id || 'umkm'}-${idx}`,
    }
  })

  // Ensure there's always at least something to show
  const finalPhotos =
    photoList.length > 0
      ? photoList
      : [
          {
            photo: PHOTO_PLACEHOLDER_PATH,
            id: '',
            nama: 'UMKM Cerme',
            kategori: 'Produk',
            alamat: 'Desa Cerme',
            uniqueId: 'fallback-0',
          },
        ]

  // Duplicate photo list for 100% seamless infinite loop animation
  const loopList = [...finalPhotos, ...finalPhotos]

  return (
    <div
      className="relative w-full max-w-full overflow-hidden rounded-[1.75rem] border p-3 shadow-xl transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
      }}
    >
      {/* Top Header Badge */}
      <div className="mb-2.5 flex items-center justify-between px-1">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
          <Sparkles className="h-3 w-3 animate-spin-slow" />
          <span>Usaha Desa Cerme</span>
        </div>
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-theme-muted">
          Galeri Berjalan
        </span>
      </div>

      {/* Marquee Track Container */}
      <div className="group relative flex w-full overflow-hidden rounded-[1.25rem] bg-slate-900/5 dark:bg-black/20 py-1">
        {/* Left & Right Gradient Overlay for Smooth Edge Transitions */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--bg-card)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--bg-card)] to-transparent" />

        <div className="flex w-max animate-marquee-left gap-3 group-hover:[animation-play-state:paused]">
          {loopList.map((item, idx) => {
            const cardContent = (
              <div className="group/card relative h-[250px] w-44 shrink-0 overflow-hidden rounded-xl border border-black/5 shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-lg sm:w-48 sm:h-[280px] md:w-52 md:h-[300px]">
                <img
                  src={item.photo}
                  alt={item.nama}
                  onError={handlePhotoError}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* Bottom Overlay Info */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent p-3 text-white">
                  <span className="inline-block w-fit rounded-full bg-emerald-500/90 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                    {item.kategori}
                  </span>

                  <h3 className="mt-1 text-sm font-black leading-tight text-white group-hover/card:text-emerald-300 transition-colors md:text-base truncate">
                    {item.nama}
                  </h3>

                  <div className="mt-1 flex items-center justify-between text-[11px] font-bold text-white/80">
                    <span className="truncate max-w-[120px]">{item.alamat}</span>
                    <span className="inline-flex items-center gap-0.5 text-emerald-400 font-extrabold group-hover/card:translate-x-0.5 transition-transform shrink-0">
                      Lihat <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            )

            if (item.id) {
              return (
                <Link key={`${item.uniqueId}-${idx}`} to={`/umkm/${item.id}`} className="block">
                  {cardContent}
                </Link>
              )
            }

            return <div key={`${item.uniqueId}-${idx}`}>{cardContent}</div>
          })}
        </div>
      </div>

      {/* Footer Info Badge */}
      <div className="mt-2.5 flex items-center justify-between rounded-lg border border-black/5 bg-slate-950/80 px-3 py-2 text-white shadow-sm backdrop-blur-md dark:border-white/10">
        <div>
          <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">
            Sorotan Katalog
          </p>
          <p className="mt-0.5 text-[11px] font-bold text-slate-100">
            Arahkan kursor / sentuh untuk menghentikan
          </p>
        </div>
      </div>
    </div>
  )
}
