import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getAllUMKMs } from '../services/umkmService.js'
import UMKMCard from '../components/UMKMCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import CountUp from '../components/CountUp.jsx'
import FloatingShapes from '../components/FloatingShapes.jsx'
import HeroMarquee from '../components/HeroMarquee.jsx'

export default function Beranda() {
  const umkmData = getAllUMKMs()
  const featured = umkmData.slice(0, 4)
  const categoryCount = new Set(umkmData.map((umkm) => umkm.kategori)).size
  const totalCards = umkmData.length

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-12 md:pb-16 lg:pb-20" style={{ backgroundColor: 'var(--bg-section)' }}>
        <FloatingShapes />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 py-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-16 lg:py-14">
          <div className="space-y-5">
            <ScrollReveal animation="fade" duration="0.5s">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] shadow-sm backdrop-blur-sm"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--bg-card) 90%, #10B981 10%)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-heading)',
                }}
              >
                <Sparkles className="h-4 w-4 text-emerald-600" />
                UMKM Desa Cerme
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="up" delay={100}>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl" style={{ color: 'var(--text-heading)' }}>
                  UMKM Cerme,
                  <span className="block text-primary">ringkas, modern, mudah dijelajahi.</span>
                </h1>
                <p className="max-w-xl text-sm leading-relaxed font-medium md:text-base" style={{ color: 'var(--text-body)' }}>
                  Kuliner lokal, minuman segar, dan snack pilihan dalam satu katalog singkat.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={200}>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  to="/katalog"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-bold text-theme-contrast shadow-lg shadow-primary/25 transition duration-300 hover:bg-primary-light hover:shadow-xl hover:-translate-y-0.5 md:text-base"
                >
                  Buka katalog
                  <ArrowRight className="ml-2.5 h-5 w-5" />
                </Link>
                <Link
                  to="/tentang"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border px-6 text-sm font-bold shadow-sm transition duration-300 hover:opacity-80 md:text-base"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-heading)',
                  }}
                >
                  Tentang
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={260}>
              <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border p-4 shadow-card" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-theme-muted">Total</p>
                  <p className="mt-1 text-2xl font-black" style={{ color: 'var(--text-heading)' }}><CountUp end={totalCards} duration={1000} /></p>
                </div>
                <div className="rounded-2xl border p-4 shadow-card" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-theme-muted">Kategori</p>
                  <p className="mt-1 text-2xl font-black" style={{ color: 'var(--text-heading)' }}><CountUp end={categoryCount} duration={900} /></p>
                </div>
                <div className="rounded-2xl border p-4 shadow-card" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-theme-muted">Akses</p>
                  <p className="mt-1 text-2xl font-black" style={{ color: 'var(--text-heading)' }}>Chat</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Right Visual */}
          <div className="relative w-full max-w-full overflow-hidden">
            <HeroMarquee umkms={umkmData} />
          </div>
        </div>
      </section>

      {/* Featured UMKM Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-16 lg:py-14">
        <ScrollReveal animation="up">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-primary">Pilihan</span>
              <h2 className="mt-1 text-2xl font-black md:text-3xl" style={{ color: 'var(--text-heading)' }}>Unggulan</h2>
            </div>
            <Link
              to="/katalog"
              className="inline-flex items-center text-sm font-bold text-primary transition hover:text-primary-light hover:underline md:text-base"
            >
              Semua
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((umkm, idx) => (
            <ScrollReveal key={umkm.id} animation="up" delay={idx * 100}>
              <UMKMCard umkm={umkm} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}
