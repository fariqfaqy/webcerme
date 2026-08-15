import { umkmProfiles } from '../data/umkmProfiles.js'
import { normalizeUMKM } from '../models/umkm.js'

export function getAllUMKMs() {
  return umkmProfiles.map((profile) => normalizeUMKM(profile))
}

export function getUMKMById(id) {
  return getAllUMKMs().find((item) => item.id === id) || null
}

export function groupByCategory() {
  const map = {}
  getAllUMKMs().forEach((u) => {
    if (!map[u.kategori]) map[u.kategori] = []
    map[u.kategori].push(u)
  })
  return map
}

// Helper that returns a minimal folder-like structure for each UMKM
export function generateFolderStructure() {
  return getAllUMKMs().map((u) => ({
    slug: u.id,
    profile: u,
    assets: {
      fotos: u.foto || [],
    },
  }))
}
