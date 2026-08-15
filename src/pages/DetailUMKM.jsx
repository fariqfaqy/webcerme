import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Share2,
  ExternalLink,
  ChevronRight,
  User,
  CheckCircle2,
  BadgeCheck,
  Tag,
} from 'lucide-react'
import CategoryBadge from '../components/CategoryBadge.jsx'
import NotFound from './NotFound.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { getUMKMById } from '../services/umkmService.js'
import { PHOTO_PLACEHOLDER_PATH } from '../models/umkm.js'

export default function DetailUMKM() {
  const { slug } = useParams()
  const umkm = getUMKMById(slug)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isPhotoHovered, setIsPhotoHovered] = useState(false)

  useEffect(() => {
    if (!umkm || !umkm.foto || umkm.foto.length <= 1 || isPhotoHovered) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setSelectedPhotoIndex((currentIndex) => (currentIndex + 1) % umkm.foto.length)
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [isPhotoHovered, umkm])

  if (!umkm) {
    return <NotFound />
  }

  const waMessage = encodeURIComponent(
    `Halo ${umkm.pemilik}, saya melihat profil ${umkm.nama} di Katalog UMKM Desa Cerme.`
  )
  const whatsappLink = `https://wa.me/${umkm.kontak.whatsapp}?text=${waMessage}`

  const handlePhotoError = (event) => {
    const image = event.currentTarget
    const currentSource = image.getAttribute('src') || ''
    const alternateSource = currentSource.replace(/\.jpe?g(?=\?|#|$)/i, (match) => (match.toLowerCase() === '.jpg' ? '.jpeg' : '.jpg'))

    if (alternateSource !== currentSource && !image.dataset.triedAlternateFormat) {
      image.dataset.triedAlternateFormat = 'true'
      image.src = alternateSource
      return
    }

    image.src = PHOTO_PLACEHOLDER_PATH
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: umkm.nama,
          text: `Lihat profil ${umkm.nama} di Katalog UMKM Desa Cerme`,
          url: window.location.href,
        })
      } catch {
        // Fallback copy
        copyToClipboard()
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <main className="pb-28 pt-6 md:pb-12">
      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Breadcrumb Navigation */}
        <ScrollReveal animation="fade" duration="0.4s">
          <nav className="flex items-center gap-2 text-xs font-extrabold text-slate-700 sm:text-sm">
            <Link to="/" className="transition hover:text-primary">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <Link to="/katalog" className="transition hover:text-primary">
              Katalog UMKM
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="truncate font-extrabold text-slate-950">{umkm.nama}</span>
          </nav>
        </ScrollReveal>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Photo Gallery */}
          <ScrollReveal animation="left" delay={100} className="space-y-4">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-card"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              <div
                className="flex h-full w-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${selectedPhotoIndex * 100}%)` }}
              >
                {umkm.foto.length > 0 ? (
                  umkm.foto.map((photoUrl) => (
                    <div key={photoUrl} className="h-full w-full flex-none">
                        <img
                          src={photoUrl}
                          alt={umkm.nama}
                          className="h-full w-full object-cover"
                          onError={handlePhotoError}
                        />
                    </div>
                  ))
                ) : (
                  <div className="h-full w-full flex-none">
                    <img
                      src={PHOTO_PLACEHOLDER_PATH}
                      alt={umkm.nama}
                      className="h-full w-full object-cover"
                      onError={handlePhotoError}
                    />
                  </div>
                )}
              </div>
              <div className="absolute left-4 top-4">
                <CategoryBadge category={umkm.kategori} className="shadow-lg" />
              </div>
            </div>

            {/* Photo Thumbnails */}
            {umkm.foto.length > 1 && (
              <div className="flex gap-3">
                {umkm.foto.map((imgUrl, idx) => (
                  <button
                    key={imgUrl}
                    type="button"
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative aspect-[4/3] w-24 overflow-hidden rounded-2xl border-2 transition duration-200 ${
                      selectedPhotoIndex === idx
                        ? 'border-primary ring-2 ring-primary/20 shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="" className="h-full w-full object-cover" onError={handlePhotoError} />
                  </button>
                ))}
              </div>
            )}
          </ScrollReveal>

          {/* Right Column: Business Info & Actions */}
          <ScrollReveal animation="right" delay={150}>
            <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card md:p-8">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                  {umkm.nama}
                </h1>
                <button
                  type="button"
                  onClick={handleShare}
                  className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-xs font-extrabold text-slate-800 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  <Share2 className="h-3.5 w-3.5 text-primary" />
                  {copied ? 'Tautan Disalin!' : 'Bagikan'}
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800">
                <User className="h-4 w-4 text-primary" />
                <span>Pemilik: <strong className="text-slate-950">{umkm.pemilik}</strong></span>
              </div>

              {umkm.nib && (
                <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm font-extrabold text-slate-800">
                  <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    NIB: <span className="text-slate-950">{umkm.nib}</span>
                  </span>
                </div>
              )}
            </div>

            <hr className="border-slate-200" />

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Deskripsi Usaha</h3>
              <p className="text-base leading-relaxed text-slate-900 font-medium">{umkm.deskripsi}</p>
            </div>

            {/* Quick Specs Box */}
            <div className="space-y-3.5 rounded-2xl bg-[#FAF8F5] p-5 border border-slate-300/80 shadow-sm">
              {umkm.halal && (
                <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white px-4 py-4 shadow-sm">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-amber-200 shadow-sm">
                    <img src="/halal.jpg" alt="Logo Halal Indonesia" className="h-10 w-10 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-amber-900">Label Halal</p>
                    <p className="text-sm font-extrabold leading-tight text-slate-950">Tersertifikasi halal</p>
                    <p className="text-xs font-semibold text-slate-600">Ditampilkan sebagai logo resmi pada profil UMKM.</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div className="flex-1">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Alamat Usaha</p>
                  <p className="text-sm font-extrabold text-slate-900">{umkm.alamat}</p>
                  {umkm.mapsUrl ? (
                    <a
                      href={umkm.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center text-xs font-extrabold text-primary hover:underline"
                    >
                      Petunjuk Lokasi Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  ) : (
                    <span className="mt-1 inline-flex items-center text-xs font-extrabold text-slate-500">
                      Link Google Maps belum diisi
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-200 pt-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Jam Operasional</p>
                  <p className="text-sm font-extrabold text-slate-900">{umkm.jamOperasional}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-200 pt-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Kontak Telepon</p>
                  <p className="text-sm font-extrabold text-slate-900">{umkm.kontak.telepon}</p>
                </div>
              </div>

              {umkm.kisaranHarga && (
                <div className="flex items-start gap-3 border-t border-slate-200 pt-3">
                  <Tag className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Kisaran Harga</p>
                    <p className="text-sm font-extrabold text-slate-900">{umkm.kisaranHarga}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Products Highlight */}
            {umkm.produk?.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Produk & Layanan Unggulan</h3>
                <div className="flex flex-wrap gap-2">
                  {umkm.produk.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-100/80 px-3.5 py-2 text-sm font-extrabold text-emerald-950 border border-emerald-300 shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons Desktop */}
            <div className="hidden gap-3 pt-2 md:flex">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 flex-1 items-center justify-center rounded-2xl bg-[#16A34A] px-6 text-base font-extrabold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:bg-[#15803D] hover:shadow-xl"
              >
                <MessageCircle className="mr-2.5 h-5 w-5 fill-white" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating Bottom Bar Mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3.5 backdrop-blur-md shadow-2xl md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3 px-1 pb-[env(safe-area-inset-bottom)]">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-[#16A34A] px-4 text-sm font-extrabold text-white shadow-md"
          >
            <MessageCircle className="mr-2 h-4 w-4 fill-white" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}

