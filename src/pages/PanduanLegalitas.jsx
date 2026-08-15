import { ArrowRight, BadgeCheck, BookOpenCheck, CircleCheckBig, ClipboardList, ExternalLink, FileText, Scale, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import FloatingShapes from '../components/FloatingShapes.jsx'

const nibSteps = [
  'Buka situs resmi OSS melalui browser di HP atau laptop.',
  'Klik Daftar, pilih skala usaha UMK, lalu pilih pelaku usaha Orang Perseorangan.',
  'Masukkan NIK KTP, tanggal lahir, nomor WhatsApp, dan alamat email aktif.',
  'Ambil kode OTP dari WhatsApp atau email, lalu verifikasi akun.',
  'Buat password baru untuk akun OSS.',
  'Masuk ke menu Perizinan Berusaha, lalu pilih Permohonan Baru/Tambah Usaha.',
  'Lengkapi nama usaha, KBLI, dan modal usaha sesuai data usaha.',
  'Simpan data, cek ringkasan draf, lalu centang Pernyataan Mandiri.',
  'Klik Terbit NIB untuk mengunduh dokumen NIB berformat PDF.',
]

const sppirtSteps = [
  'Pastikan usaha sudah memiliki NIB aktif melalui OSS.',
  'Login ke OSS dan pilih menu Perizinan Berusaha untuk mengajukan PB-UMKU SPP-IRT.',
  'Lengkapi data pelaku usaha, lokasi produksi, dan produk pangan.',
  'Isi data produk serta rancangan label produk sesuai kemasan.',
  'Unggah surat pernyataan pemenuhan komitmen sesuai format sistem.',
  'Periksa ulang semua data, lalu ajukan permohonan.',
  'Jika persyaratan lengkap, SPP-IRT diterbitkan melalui OSS.',
  'Setelah terbit, penuhi komitmen maksimal 3 bulan termasuk mengikuti Penyuluhan Keamanan Pangan (PKP).',
]

const halalSteps = [
  'Pastikan usaha sudah memiliki NIB aktif.',
  'Buka SIHALAL dan buat akun sebagai Pelaku Usaha.',
  'Verifikasi akun, lalu lengkapi data usaha dan legalitas.',
  'Isi data Penyelia Halal, fasilitas produksi, dan outlet bila ada.',
  'Pilih pengajuan sertifikasi halal skema Self-Declare.',
  'Lengkapi daftar bahan, data produk, foto produk, dan proses produksi halal.',
  'Unggah dokumen dan pernyataan yang diminta sistem.',
  'Kirim pengajuan, lalu tunggu verifikasi dan validasi Pendamping PPH.',
  'Setelah lolos mekanisme yang berlaku, BPJPH menerbitkan Sertifikat Halal.',
]

const docs = [
  {
    title: 'NIB',
    icon: FileText,
    items: [
      'KTP/NIK yang aktif dan tervalidasi Dukcapil.',
      'Nomor WhatsApp aktif dan alamat email aktif.',
      'Data usaha: nama usaha, perkiraan modal, dan alamat lokasi usaha.',
    ],
  },
  {
    title: 'SPP-IRT',
    icon: ClipboardList,
    items: [
      'NIB aktif dan NIK pelaku usaha.',
      'Data produk pangan, kemasan, isi bersih, masa simpan, dan komposisi.',
      'Rancangan label produk dan surat pernyataan pemenuhan komitmen.',
    ],
  },
  {
    title: 'Sertifikasi Halal',
    icon: BadgeCheck,
    items: [
      'NIB aktif, data usaha, dan data penanggung jawab usaha.',
      'Data penyelia halal, bahan, produk, dan foto produk.',
      'Penjelasan proses produksi halal dan dokumen yang dipersyaratkan SIHALAL.',
    ],
  },
]

const categoryNotes = [
  { label: 'Usaha Mikro', value: 'Modal usaha maksimal Rp1 miliar.' },
  { label: 'Usaha Kecil', value: 'Modal usaha lebih dari Rp1 miliar sampai dengan Rp5 miliar.' },
  { label: 'Usaha Menengah', value: 'Modal usaha lebih dari Rp5 miliar sampai dengan Rp10 miliar.' },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-2">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="text-2xl font-black md:text-3xl" style={{ color: 'var(--text-heading)' }}>{title}</h2>
      <p className="text-sm leading-relaxed md:text-base" style={{ color: 'var(--text-body)' }}>{description}</p>
    </div>
  )
}

function StepCard({ step, index }) {
  return (
    <div
      className="flex gap-4 rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-black text-theme-contrast shadow-md shadow-primary/20">
        {index + 1}
      </div>
      <p className="pt-0.5 text-sm leading-relaxed font-medium md:text-base" style={{ color: 'var(--text-body)' }}>{step}</p>
    </div>
  )
}

export default function PanduanLegalitas() {
  return (
    <main className="pb-16 pt-6 md:pb-24">
      {/* Hero Section with Floating Shapes & Opening Animation */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div
          className="relative overflow-hidden rounded-[2rem] border p-6 shadow-xl backdrop-blur-sm md:p-10"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--bg-card) 92%, #10B981 8%)',
            borderColor: 'var(--border-color)',
          }}
        >
          <FloatingShapes />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
                  Panduan Legalitas UMKM
                </div>
              </ScrollReveal>

              <ScrollReveal animation="up" delay={100}>
                <div className="space-y-3">
                  <h1 className="text-3xl font-black tracking-tight md:text-5xl" style={{ color: 'var(--text-heading)' }}>
                    Panduan Lengkap Legalitas untuk UMKM Desa Cerme
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: 'var(--text-body)' }}>
                    Halaman ini merangkum pengertian NIB, SPP-IRT, dan sertifikasi halal beserta dokumen yang perlu disiapkan, langkah pengajuan, serta catatan penting agar pelaku usaha bisa menyiapkan legalitas secara bertahap.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="up" delay={200}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#nib"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-extrabold text-theme-contrast shadow-lg shadow-primary/25 transition duration-300 hover:bg-primary-light hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Mulai dari NIB
                    <ArrowRight className="ml-2.5 h-5 w-5" />
                  </a>
                  <Link
                    to="/katalog"
                    className="inline-flex h-12 items-center justify-center rounded-2xl border px-6 text-sm font-extrabold shadow-sm transition hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-heading)',
                    }}
                  >
                    Lihat Katalog UMKM
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Quick 3-Stage Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <ScrollReveal animation="scale" delay={150}>
                <div
                  className="rounded-3xl border p-5 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <ShieldCheck className="h-7 w-7 text-emerald-600" />
                  <h3 className="mt-1 text-lg font-black" style={{ color: 'var(--text-heading)' }}>NIB</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>Identitas resmi usaha dan pintu awal untuk perizinan lainnya.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale" delay={250}>
                <div
                  className="rounded-3xl border p-5 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <BookOpenCheck className="h-7 w-7 text-amber-600" />
                  <h3 className="mt-1 text-lg font-black" style={{ color: 'var(--text-heading)' }}>SPP-IRT</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>Legalitas produksi pangan olahan industri rumah tangga.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale" delay={350} className="sm:col-span-2">
                <div
                  className="rounded-3xl border p-5 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <BadgeCheck className="h-7 w-7 text-primary" />
                  <h3 className="mt-1 text-lg font-black" style={{ color: 'var(--text-heading)' }}>Sertifikasi Halal</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>Memberikan kepastian kehalalan produk dan meningkatkan kepercayaan pasar.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Documents Needed */}
      <section className="mx-auto mt-12 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <SectionHeading
            eyebrow="Dokumen"
            title="Apa yang perlu disiapkan"
            description="Daftar berikut membantu pelaku usaha menyiapkan data sejak awal agar proses pendaftaran di OSS dan SIHALAL berjalan lebih lancar."
          />
        </ScrollReveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {docs.map((doc, idx) => {
            const Icon = doc.icon
            return (
              <ScrollReveal key={doc.title} animation="up" delay={idx * 120}>
                <article
                  className="h-full rounded-3xl border p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-black" style={{ color: 'var(--text-heading)' }}>{doc.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {doc.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                        <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* Section: NIB */}
      <section id="nib" className="mx-auto mt-14 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <SectionHeading
            eyebrow="NIB"
            title="Pengertian NIB"
            description="NIB berlaku sebagai identitas resmi bagi pelaku usaha dan menjadi syarat utama sebelum mengajukan perizinan lainnya seperti SPP-IRT maupun sertifikasi halal."
          />
        </ScrollReveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal animation="left" delay={100}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
                <Scale className="h-4 w-4" />
                Kategori usaha berdasarkan modal usaha 2026
              </div>
              <div className="mt-5 grid gap-4">
                {categoryNotes.map((note) => (
                  <div
                    key={note.label}
                    className="rounded-2xl border p-4 transition hover:border-emerald-500/30"
                    style={{
                      backgroundColor: 'var(--bg-section)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <p className="text-sm font-black" style={{ color: 'var(--text-heading)' }}>{note.label}</p>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>{note.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Modal usaha tidak termasuk tanah dan bangunan tempat usaha.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right" delay={200}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
                <FileText className="h-4 w-4" />
                Langkah pendaftaran NIB
              </div>
              <div className="mt-5 space-y-3">
                {nibSteps.map((step, index) => (
                  <StepCard key={step} step={step} index={index} />
                ))}
              </div>
              <div
                className="mt-5 rounded-2xl border p-4 text-sm leading-relaxed font-semibold"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--bg-card) 85%, #10B981 15%)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-heading)',
                }}
              >
                Seluruh proses pendaftaran NIB pada portal OSS resmi bersifat gratis tanpa biaya administrasi.
              </div>
              <a
                href="https://oss.go.id/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:underline"
              >
                Buka OSS <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section: SPP-IRT */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <SectionHeading
            eyebrow="SPP-IRT"
            title="Pengertian dan proses pengajuan SPP-IRT"
            description="SPP-IRT adalah legalitas untuk industri rumah tangga pangan yang memproduksi dan mengedarkan pangan olahan tertentu sesuai ketentuan BPOM."
          />
        </ScrollReveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal animation="left" delay={100}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <h3 className="text-lg font-black" style={{ color: 'var(--text-heading)' }}>Dokumen yang perlu disiapkan</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'NIB aktif dan NIK pelaku usaha.',
                  'Nomor WhatsApp aktif dan alamat email aktif.',
                  'Data pelaku usaha, lokasi produksi, dan data produk pangan.',
                  'Data label produk, rancangan label produk, dan surat pernyataan pemenuhan komitmen.',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 rounded-2xl border p-4 text-sm leading-relaxed font-semibold"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--bg-card) 85%, #F59E0B 15%)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-heading)',
                }}
              >
                Tidak semua produk pangan dapat memperoleh SPP-IRT. SPP-IRT berlaku untuk pangan olahan tertentu sesuai Peraturan BPOM Nomor 4 Tahun 2024.
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right" delay={200}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <h3 className="text-lg font-black" style={{ color: 'var(--text-heading)' }}>Langkah pengajuan</h3>
              <div className="mt-4 space-y-3">
                {sppirtSteps.map((step, index) => (
                  <StepCard key={step} step={step} index={index} />
                ))}
              </div>
              <a
                href="https://oss.go.id/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:underline"
              >
                Ajukan melalui OSS <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section: Sertifikasi Halal */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <SectionHeading
            eyebrow="HALAL"
            title="Panduan pendaftaran sertifikasi halal gratis"
            description="Sertifikasi halal memberi kepastian kehalalan produk dan dapat meningkatkan kepercayaan konsumen serta peluang pemasaran produk."
          />
        </ScrollReveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal animation="left" delay={100}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <h3 className="text-lg font-black" style={{ color: 'var(--text-heading)' }}>Syarat & data yang perlu disiapkan</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'NIB aktif dan data pelaku usaha.',
                  'Data penanggung jawab usaha dan penyelia halal.',
                  'Data tempat/fasilitas produksi dan outlet.',
                  'Daftar bahan, data produk, foto produk, dan penjelasan proses produksi halal.',
                  'Dokumen dan pernyataan yang dipersyaratkan dalam sistem SIHALAL.',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://ptsp.halal.go.id/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:underline"
              >
                Buka SIHALAL <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right" delay={200}>
            <div
              className="h-full rounded-3xl border p-6 shadow-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <h3 className="text-lg font-black" style={{ color: 'var(--text-heading)' }}>Langkah pendaftaran</h3>
              <div className="mt-4 space-y-3">
                {halalSteps.map((step, index) => (
                  <StepCard key={step} step={step} index={index} />
                ))}
              </div>

              <div
                className="mt-5 rounded-2xl border p-4 text-sm leading-relaxed font-medium"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--bg-card) 88%, #10B981 12%)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-body)',
                }}
              >
                Self-Declare ditujukan untuk usaha mikro dan kecil yang memenuhi persyaratan. Untuk program Sertifikasi Halal Gratis (SEHATI), pelaku usaha harus memenuhi kriteria yang ditetapkan BPJPH.
              </div>

              <div
                className="mt-4 rounded-2xl border p-5"
                style={{
                  backgroundColor: 'var(--bg-section)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <p className="text-sm font-black" style={{ color: 'var(--text-heading)' }}>Contoh kriteria SEHATI</p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    'Usaha mikro atau kecil yang memenuhi ketentuan program.',
                    'Memiliki NIB dan menggunakan bahan yang telah dipastikan kehalalannya.',
                    'Proses produksi sederhana, terjamin kehalalannya, dan tanpa bahan berbahaya.',
                    'Memiliki hasil penjualan tahunan paling banyak Rp1,9 miliar.',
                    'Memiliki paling banyak satu fasilitas produksi dan satu outlet.',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Banner Section */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <div
            className="rounded-[2rem] border p-6 shadow-card backdrop-blur-sm md:p-8"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--bg-card) 90%, #10B981 10%)',
              borderColor: 'var(--border-color)',
            }}
          >
            <h2 className="text-2xl font-black" style={{ color: 'var(--text-heading)' }}>Catatan penting</h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed md:text-base" style={{ color: 'var(--text-body)' }}>
              Tidak semua produk pangan dapat memperoleh SPP-IRT atau sertifikasi halal dengan skema Self-Declare. Pengajuan tetap harus menyesuaikan ketentuan resmi pada OSS dan SIHALAL, serta memperhatikan persyaratan produk, bahan, proses produksi, label, dan dokumen pendukung yang diminta sistem.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="#nib"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-extrabold text-theme-contrast shadow-lg shadow-primary/25 transition hover:bg-primary-light hover:scale-[1.02]"
              >
                Mulai dari NIB
              </a>
              <Link
                to="/"
                className="inline-flex h-12 items-center justify-center rounded-2xl border px-6 text-sm font-extrabold shadow-sm transition hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-heading)',
                }}
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
