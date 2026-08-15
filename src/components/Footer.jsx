import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

const quickLinks = [
  { label: 'Beranda Utama', to: '/' },
  { label: 'Katalog UMKM', to: '/katalog' },
  { label: 'Panduan Legalitas', to: '/legalitas' },
  { label: 'Tentang Desa Cerme', to: '/tentang' },
]

export default function Footer() {
  return (
    <footer className="border-t border-emerald-950 bg-[#0F2D24] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.8fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md">
                <img src="/logo.png" alt="Logo UMKM Cerme" className="h-full w-full object-contain" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">UMKM Cerme</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-200 font-medium md:text-base">
              Katalog digital resmi usaha lokal Desa Cerme. Mendorong pertumbuhan ekonomi warga lewat promosi produk rumahan, pertanian, kerajinan, dan jasa desa.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              Navigasi Cepat
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-semibold text-slate-200 transition duration-200 hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              Inisiatif Warga
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 font-medium">
              Dirancang sederhana dan ramah pengguna agar seluruh warga dapat dengan cepat terhubung langsung ke pemilik usaha via WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-emerald-800/60 pt-6 text-xs text-slate-200 font-medium sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-200">© {new Date().getFullYear()} Katalog UMKM Desa Cerme. Semua hak dilindungi.</p>
          <p className="inline-flex items-center gap-1.5 font-medium text-slate-200">
            Dibuat dengan <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> untuk warga Desa Cerme
          </p>
        </div>
      </div>
    </footer>
  )
}
