import { Link } from 'react-router-dom'
import { ArrowRight, Users, Sparkles, HeartHandshake, Store, ShieldCheck, MapPin, Compass } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import FloatingShapes from '../components/FloatingShapes.jsx'
import CountUp from '../components/CountUp.jsx'
import { getAllUMKMs } from '../services/umkmService.js'

export default function Tentang() {
  const umkms = getAllUMKMs()
  const totalUMKM = umkms.length

  return (
    <main className="pb-16 pt-6 md:pb-24">
      {/* Hero Section with Floating Shapes & Reveal Animations */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div
          className="relative overflow-hidden rounded-[2rem] border p-6 shadow-xl backdrop-blur-sm md:p-10 lg:p-12"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--bg-card) 92%, #10B981 8%)',
            borderColor: 'var(--border-color)',
          }}
        >
          <FloatingShapes />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <ScrollReveal animation="fade" duration="0.5s">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] shadow-sm backdrop-blur-sm"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--bg-card) 85%, #10B981 15%)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-heading)',
                  }}
                >
                  <Sparkles className="h-4 w-4 text-emerald-500" />
                  Inisiatif Pemberdayaan Desa Cerme
                </div>
              </ScrollReveal>

              <ScrollReveal animation="up" delay={100}>
                <div className="space-y-3">
                  <h1 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl" style={{ color: 'var(--text-heading)' }}>
                    Mengenal Desa Cerme & Potensi Warganya
                  </h1>
                  <p className="text-base leading-relaxed md:text-lg" style={{ color: 'var(--text-body)' }}>
                    Desa Cerme adalah ruang hidup yang hangat dan berkembang pesat lewat nilai gotong royong, kreativitas, serta kemandirian ekonomi usaha warga.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="up" delay={150}>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-body)' }}>
                  Platform katalog digital ini hadir sebagai jembatan langsung yang mempertemukan warga dan pembeli umum dengan para pemilik usaha rumahan, petani lokal, pengrajin tradisional, dan penyedia jasa di Desa Cerme.
                </p>
              </ScrollReveal>

              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                <ScrollReveal animation="scale" delay={200}>
                  <div
                    className="rounded-2xl border p-5 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <HeartHandshake className="h-6 w-6 text-primary" />
                    <h3 className="mt-2 text-base font-extrabold" style={{ color: 'var(--text-heading)' }}>Gotong Royong</h3>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      Saling mendukung dan menguatkan ekonomi antar sesama warga desa secara berkelanjutan.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="scale" delay={300}>
                  <div
                    className="rounded-2xl border p-5 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <Users className="h-6 w-6 text-amber-600" />
                    <h3 className="mt-2 text-base font-extrabold" style={{ color: 'var(--text-heading)' }}>Komunikasi Langsung</h3>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      Terhubung tanpa perantara melalui kontak WhatsApp resmi pemilik usaha.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="up" delay={350}>
                <div className="pt-2">
                  <Link
                    to="/katalog"
                    className="inline-flex h-13 items-center justify-center rounded-2xl bg-primary px-7 text-base font-extrabold text-theme-contrast shadow-lg shadow-primary/25 transition duration-300 hover:bg-primary-light hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Lihat Semua Katalog UMKM
                    <ArrowRight className="ml-2.5 h-5 w-5" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Image / Card Banner */}
            <ScrollReveal animation="scale" delay={200}>
              <div
                className="relative overflow-hidden rounded-3xl border p-3 shadow-xl backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <img
                  src="/tentang-desa.jpg"
                  alt="Kegiatan Warga Desa Cerme"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-inner"
                />
                <div
                  className="absolute inset-x-7 bottom-7 rounded-2xl border p-4 shadow-lg backdrop-blur-md"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--bg-card) 85%, #10B981 15%)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary">Kemandirian Ekonomi</p>
                  <p className="mt-0.5 text-sm font-extrabold" style={{ color: 'var(--text-heading)' }}>
                    Membangun Desa Cerme yang Berdaya, Kreatif, dan Sejahtera.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="mx-auto mt-12 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <div
            className="grid gap-6 rounded-3xl border p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4 md:p-8"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="space-y-1 border-b border-theme pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
              <div className="flex items-center gap-2 text-primary">
                <Store className="h-5 w-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider">Total UMKM Terdata</span>
              </div>
              <p className="text-3xl font-black md:text-4xl" style={{ color: 'var(--text-heading)' }}>
                <CountUp end={totalUMKM} duration={2000} suffix="+" />
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Usaha lokal aktif di Desa Cerme</p>
            </div>

            <div className="space-y-1 border-b border-theme pb-4 sm:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
              <div className="flex items-center gap-2 text-amber-600">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider">Cakupan Wilayah</span>
              </div>
              <p className="text-3xl font-black md:text-4xl" style={{ color: 'var(--text-heading)' }}>
                <CountUp end={14} duration={2000} suffix=" RT" />
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Tersebar di seluruh RT Desa Cerme</p>
            </div>

            <div className="space-y-1 border-b border-theme pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider">Legalitas Usaha</span>
                </div>
              <p className="text-3xl font-black md:text-4xl" style={{ color: 'var(--text-heading)' }}>
                <CountUp end={100} duration={2500} suffix="%" />
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Dukungan pendampingan NIB & Halal</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-teal-600">
                <Compass className="h-5 w-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider">Platform Akses</span>
              </div>
              <p className="text-3xl font-black md:text-4xl" style={{ color: 'var(--text-heading)' }}>
                24/7
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Katalog digital siap diakses kapan saja</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Visi & Misi Section */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Nilai & Komitmen</span>
            <h2 className="text-2xl font-black md:text-4xl" style={{ color: 'var(--text-heading)' }}>
              Visi & Misi Pengembangan UMKM
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base" style={{ color: 'var(--text-body)' }}>
              Mewujudkan ekosistem ekonomi pedesaan yang modern, inklusif, dan berdaya saing tinggi.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ScrollReveal animation="left" delay={150}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1 md:p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100/80 text-emerald-800 font-extrabold text-xl shadow-sm">
                01
              </div>
              <h3 className="mt-4 text-xl font-black" style={{ color: 'var(--text-heading)' }}>Pemberdayaan Ekonomi Lokal</h3>
              <p className="mt-2 text-sm leading-relaxed md:text-base" style={{ color: 'var(--text-body)' }}>
                Mendorong pemasaran digital produk UMKM Desa Cerme agar dikenal luas oleh masyarakat lokal, wisatawan, hingga pembeli dari berbagai daerah.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right" delay={250}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1 md:p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100/80 text-amber-900 font-extrabold text-xl shadow-sm">
                02
              </div>
              <h3 className="mt-4 text-xl font-black" style={{ color: 'var(--text-heading)' }}>Kemudahan Informasi & Transaksi</h3>
              <p className="mt-2 text-sm leading-relaxed md:text-base" style={{ color: 'var(--text-body)' }}>
                Menyediakan informasi kontak resmi, alamat lokasi Google Maps, dan saluran komunikasi WhatsApp langsung tanpa potongan biaya perantara.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation Banner Section */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <div
            className="rounded-[2rem] border p-6 text-center shadow-card backdrop-blur-sm md:p-10"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--bg-card) 90%, #10B981 10%)',
              borderColor: 'var(--border-color)',
            }}
          >
            <h3 className="text-2xl font-black" style={{ color: 'var(--text-heading)' }}>Jelajahi Produk & Usaha Desa Cerme</h3>
            <p className="mt-2 text-sm md:text-base" style={{ color: 'var(--text-body)' }}>
              Temukan aneka pilihan makanan, minuman, snack, dan kerajinan lokal buatan warga desa.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/katalog"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-7 text-sm font-extrabold text-theme-contrast shadow-lg shadow-primary/25 transition hover:bg-primary-light hover:scale-[1.02]"
              >
                Buka Katalog Produk
              </Link>
              <Link
                to="/legalitas"
                className="inline-flex h-12 items-center justify-center rounded-2xl border px-7 text-sm font-extrabold shadow-sm transition hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-heading)',
                }}
              >
                Panduan Legalitas Usaha
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}


