import { Search, X, SlidersHorizontal } from 'lucide-react'

export default function FilterBar({
  search,
  onSearchChange,
  selectedCategory = 'Semua',
  onCategoryChange,
  categories = [],
  onClear,
}) {
  return (
    <section className="space-y-4 rounded-3xl p-5 shadow-card transition duration-300 hover:shadow-soft md:p-6"
      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Cari UMKM, produk unggulan, atau nama pemilik..."
            className="h-12 w-full rounded-2xl pl-12 pr-12 text-sm font-semibold outline-none transition md:text-base"
            style={{
              backgroundColor: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-heading)'
            }}
          />
          {search ? (
            <button
              type="button"
              onClick={onClear}
              aria-label="Bersihkan pencarian"
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition"
              style={{ color: 'var(--text-muted)' }}
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </label>
      </div>

      {categories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <span className="hidden items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider sm:inline-flex pr-2.5"
            style={{ color: 'var(--text-body)', borderRight: '1px solid var(--border-color)' }}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" style={{ color: 'var(--text-body)' }} /> Filter:
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onCategoryChange && onCategoryChange(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition duration-200 ${
                    isActive
                      ? 'bg-primary text-theme-contrast shadow-md shadow-primary/20 ring-2 ring-primary/20'
                      : ''
                  }`}
                  style={!isActive ? { border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-input)', color: 'var(--text-body)' } : undefined}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}


