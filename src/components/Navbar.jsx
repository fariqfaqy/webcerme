import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle.jsx'

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Katalog UMKM', to: '/katalog' },
  { label: 'Panduan Legalitas', to: '/legalitas' },
  { label: 'Tentang Desa', to: '/tentang' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b shadow-sm backdrop-blur-md transition-all dark-transition"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-card) 90%, transparent)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-3.5 group" onClick={() => setIsOpen(false)}>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-md ring-1 ring-slate-200/80 transition duration-300 group-hover:scale-105 dark:ring-white/10">
            <img src="/logo.png" alt="Logo UMKM Cerme" className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-primary">UMKM Cerme</p>
            <p className="text-xs font-extrabold" style={{ color: 'var(--text-body)' }}>Katalog Usaha Lokal Desa Cerme</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-extrabold transition duration-200 ${
                    isActive
                      ? 'bg-primary text-theme-contrast shadow-md shadow-primary/20'
                      : 'hover:bg-slate-100'
                  }`
                }
                style={({ isActive }) => isActive ? {} : { color: 'var(--text-heading)' }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <DarkModeToggle />

          <button
            type="button"
            aria-label="Buka menu navigasi"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm transition hover:opacity-80 lg:hidden"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-heading)',
            }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`border-t backdrop-blur-md lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--bg-card) 95%, transparent)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 md:px-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl px-5 py-3.5 text-sm font-bold transition ${
                  isActive
                    ? 'bg-primary text-theme-contrast shadow-md'
                    : ''
                }`
              }
              style={({ isActive }) => isActive ? {} : { color: 'var(--text-heading)' }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
