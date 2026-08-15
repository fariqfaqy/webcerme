import { Link } from 'react-router-dom'
import { Home, SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center md:px-8 lg:px-16">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
        <SearchX className="h-8 w-8" />
      </div>
      <h1 className="mt-6 text-3xl font-bold md:text-4xl">Halaman tidak ditemukan</h1>
      <p className="mt-3 max-w-xl text-sm leading-7 text-text-muted md:text-base">
        Tautan yang kamu buka tidak tersedia. Coba kembali ke beranda atau buka katalog UMKM.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-theme-contrast transition hover:bg-primary-light"
      >
        <Home className="mr-2 h-4 w-4 text-theme-contrast" />
        Kembali ke Beranda
      </Link>
    </main>
  )
}
