import { useState } from 'react'
import FilterBar from '../components/FilterBar.jsx'
import UMKMCard from '../components/UMKMCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { Link } from 'react-router-dom'
import { RotateCcw, SearchX } from 'lucide-react'
import { getAllUMKMs } from '../services/umkmService.js'
import { CATEGORY_OPTIONS } from '../models/umkm.js'

export default function Katalog() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const umkmData = getAllUMKMs()

  const categories = ['Semua', ...CATEGORY_OPTIONS]

  const normalizedSearch = search.trim().toLowerCase()

  const filteredData = umkmData.filter((umkm) => {
    const matchesCategory =
      selectedCategory === 'Semua' || umkm.kategori === selectedCategory

    const matchesSearch =
      normalizedSearch.length === 0 ||
      umkm.nama.toLowerCase().includes(normalizedSearch) ||
      umkm.pemilik.toLowerCase().includes(normalizedSearch) ||
      umkm.produk.some((item) => item.toLowerCase().includes(normalizedSearch))

    return matchesCategory && matchesSearch
  })

  const resetAllFilters = () => {
    setSearch('')
    setSelectedCategory('Semua')
  }

  return (
    <main className="py-8 md:py-12">
      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal animation="up">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Katalog Usaha Desa</span>
            <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl" style={{ color: 'var(--text-heading)' }}>Daftar UMKM Desa Cerme</h1>
            <p className="max-w-3xl text-base" style={{ color: 'var(--text-body)' }}>
              Jelajahi produk rumahan, pertanian, kerajinan, dan layanan jasa lokal khas Desa Cerme.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="up" delay={100}>
          <div className="mt-8">
            <FilterBar
              search={search}
              onSearchChange={setSearch}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={categories}
              onClear={() => setSearch('')}
            />
          </div>
        </ScrollReveal>

        <div className="mt-6 flex items-center justify-between px-1 text-sm font-semibold" style={{ color: 'var(--text-body)' }}>
          <p>
            Menampilkan <span className="font-extrabold" style={{ color: 'var(--text-heading)' }}>{filteredData.length}</span> dari{' '}
            <span className="font-extrabold" style={{ color: 'var(--text-heading)' }}>{umkmData.length}</span> UMKM
          </p>
          {(search || selectedCategory !== 'Semua') && (
            <button
              type="button"
              onClick={resetAllFilters}
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset Filter
            </button>
          )}
        </div>

        {filteredData.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {filteredData.map((umkm, idx) => (
              <ScrollReveal key={umkm.id} animation="up" delay={idx * 80}>
                <UMKMCard umkm={umkm} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal animation="scale">
            <div
              className="mt-10 rounded-3xl border border-dashed p-10 text-center"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <SearchX className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold" style={{ color: 'var(--text-heading)' }}>UMKM Tidak Ditemukan</h3>
              <p className="mt-2 text-sm md:text-base" style={{ color: 'var(--text-body)' }}>
                Tidak ada usaha yang sesuai dengan pencarian &quot;{search}&quot;
                {selectedCategory !== 'Semua' ? ` di kategori ${selectedCategory}` : ''}.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-bold text-theme-contrast shadow-md transition hover:bg-primary-light"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset Semua Filter
              </button>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal animation="up" delay={200}>
          <div
            className="mt-12 rounded-3xl border p-8 text-center backdrop-blur-sm"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--bg-card) 90%, #10B981 10%)',
              borderColor: 'var(--border-color)',
            }}
          >
            <h3 className="text-xl font-extrabold" style={{ color: 'var(--text-heading)' }}>Ingin kembali ke halaman depan?</h3>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-body)' }}>Pelajari lebih lanjut tentang inisiatif UMKM Desa Cerme.</p>
            <Link
              to="/"
              className="mt-4 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-7 text-sm font-extrabold text-theme-contrast shadow-md transition hover:bg-primary-light"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
