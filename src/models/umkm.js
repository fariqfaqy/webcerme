export const CATEGORY_OPTIONS = ['Makanan', 'Minuman', 'Snack']

export const PHOTO_PLACEHOLDER_PATH = '/umkm-placeholder.svg'

const categoryPatterns = [
  {
    category: 'Minuman',
    pattern: /minum|juice|jus|kopi|teh|sirup|es\s*\w+|beverage/i,
  },
  {
    category: 'Snack',
    pattern: /snack|snacks|camilan|cemilan|keripik|kue|roti|gorengan|biskuit|kacang/i,
  },
]

export const defaultUMKM = {
  id: '',
  nama: '',
  pemilik: '',
  kategori: '',
  deskripsi: '',
  alamat: '',
  mapsUrl: '',
  kisaranHarga: '',
  nib: '',
  halal: false,
  jamOperasional: '',
  kontak: {
    telepon: '',
    whatsapp: '',
  },
  produk: [],
  foto: [],
}

function normalizeCategory(raw) {
  const value = String(raw ?? '').trim()
  const searchSpace = value.toLowerCase()

  if (CATEGORY_OPTIONS.includes(value)) {
    return value
  }

  for (const entry of categoryPatterns) {
    if (entry.pattern.test(searchSpace)) {
      return entry.category
    }
  }

  return 'Makanan'
}

function normalizePhotoPath(photo, id, index) {
  if (typeof photo !== 'string') {
    return null
  }

  const trimmed = photo.trim()
  if (!trimmed) {
    return null
  }

  if (/^https?:\/\//i.test(trimmed) || /^data:/i.test(trimmed)) {
    const extensionMatch = trimmed.match(/\.(jpe?g)(?=\?|#|$)/i)
    const extension = extensionMatch ? extensionMatch[1].toLowerCase() : 'jpg'
    return `/umkm-assets/${id || 'umkm'}/${index + 1}.${extension}`
  }

  return trimmed
}

function normalizeMapsUrl(rawUrl) {
  if (typeof rawUrl !== 'string') return ''
  const trimmed = rawUrl.trim()
  if (!trimmed) return ''

  // If it's a search query link without Juwangi/Boyolali, append Juwangi Boyolali so Google Maps doesn't point to Cerme Gresik
  if (trimmed.includes('google.com/maps/search') && !/juwangi|boyolali/i.test(trimmed)) {
    try {
      const urlObj = new URL(trimmed)
      const queryParam = urlObj.searchParams.get('query') || ''
      if (queryParam && !/juwangi|boyolali/i.test(queryParam)) {
        urlObj.searchParams.set('query', `${queryParam} Juwangi Boyolali`)
        return urlObj.toString()
      }
    } catch {
      return trimmed
    }
  }

  return trimmed
}

export function normalizeUMKM(raw = {}) {
  const normalizedId = String(raw.id || '').trim()
  const {
    kontak: rawContact = {},
    foto,
    ...rest
  } = raw
  const combinedText = [raw.kategori, raw.nama, raw.deskripsi, ...(Array.isArray(raw.produk) ? raw.produk : [])]
    .filter(Boolean)
    .join(' ')
  const explicitCategory = typeof rest.kategori === 'string' ? rest.kategori.trim() : ''

  return {
    ...defaultUMKM,
    ...rest,
    kategori: explicitCategory || normalizeCategory(combinedText),
    mapsUrl: normalizeMapsUrl(rest.mapsUrl),
    kisaranHarga: typeof rest.kisaranHarga === 'string' ? rest.kisaranHarga : '',
    nib: typeof rest.nib === 'string' && rest.nib.trim() !== '-' ? rest.nib.trim() : '',
    halal: Boolean(rest.halal),
    kontak: {
      ...defaultUMKM.kontak,
      telepon: rawContact.telepon || '',
      whatsapp: rawContact.whatsapp || '',
    },
    produk: Array.isArray(rest.produk) ? rest.produk : [],
    foto: Array.isArray(foto)
      ? foto.map((photo, index) => normalizePhotoPath(photo, normalizedId, index)).filter(Boolean)
      : [],
  }
}
