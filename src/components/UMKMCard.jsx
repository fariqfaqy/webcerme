import { useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, ArrowUpRight, ExternalLink, Tag } from 'lucide-react'
import CategoryBadge from './CategoryBadge.jsx'
import { PHOTO_PLACEHOLDER_PATH } from '../models/umkm.js'

export default function UMKMCard({ umkm }) {
  const cardRef = useRef(null)
  const navigate = useNavigate()

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }, [])

  const handlePhotoError = useCallback((event) => {
    const image = event.currentTarget
    const currentSource = image.getAttribute('src') || ''
    const alternateSource = currentSource.replace(/\.jpe?g(?=\?|#|$)/i, (match) => (match.toLowerCase() === '.jpg' ? '.jpeg' : '.jpg'))

    if (alternateSource !== currentSource && !image.dataset.triedAlternateFormat) {
      image.dataset.triedAlternateFormat = 'true'
      image.src = alternateSource
      return
    }

    image.src = PHOTO_PLACEHOLDER_PATH
  }, [])

  const mainPhoto = umkm.foto?.[0] || PHOTO_PLACEHOLDER_PATH

  const openDetail = useCallback(() => {
    navigate(`/umkm/${umkm.id}`)
  }, [navigate, umkm.id])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        navigate(`/umkm/${umkm.id}`)
      }
    },
    [navigate, umkm.id]
  )

  return (
    <article
      ref={cardRef}
      role="link"
      tabIndex={0}
      className="group block h-full cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/20"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
      }}
      onClick={openDetail}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilt-card flex h-full flex-col overflow-hidden rounded-3xl border shadow-card transition-shadow duration-300 group-hover:shadow-hover">
        <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-input)' }}>
          <img
            src={mainPhoto}
            alt={umkm.nama}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={handlePhotoError}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          <CategoryBadge category={umkm.kategori} className="absolute left-3.5 top-3.5 shadow-md" />
          
          <div
            className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full shadow-md backdrop-blur-md transition duration-300"
            style={{ backgroundColor: 'var(--bg-card-action)', color: 'var(--text-heading)' }}
          >
            <ArrowUpRight className="h-4 w-4 transition" />
          </div>

          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-1.5 text-xs font-extrabold text-white drop-shadow-md">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{umkm.alamat}</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h3 className="truncate text-lg font-extrabold transition duration-200 group-hover:text-primary md:text-xl" style={{ color: 'var(--text-heading)' }}>
              {umkm.nama}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed font-medium"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                color: 'var(--text-body)',
              }}
            >
              {umkm.deskripsi}
            </p>
          </div>

          {umkm.mapsUrl ? (
            <a
              href={umkm.mapsUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 transition hover:bg-amber-100"
              aria-label={`Buka Google Maps untuk ${umkm.nama}`}
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              Google Maps
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              Link Maps belum diisi
            </span>
          )}

          {umkm.kisaranHarga && (
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
              <Tag className="h-3.5 w-3.5 shrink-0" />
              Kisaran harga: {umkm.kisaranHarga}
            </div>
          )}

          {umkm.produk?.length > 0 && (
            <div className="mt-auto pt-2">
              <div className="flex flex-wrap gap-1.5">
                {umkm.produk.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="rounded-lg px-2.5 py-1 text-xs font-extrabold border shadow-xs"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--bg-card) 85%, #10B981 15%)',
                      borderColor: 'color-mix(in srgb, var(--border-color) 70%, #10B981 30%)',
                      color: 'var(--text-heading)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
