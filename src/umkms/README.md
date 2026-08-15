Project convention for per-UMKM folders

Place each UMKM in its own folder under `src/umkms/<slug>/`.

Required file:
- `profile.json` — the UMKM profile used by `src/data/umkmProfiles.js`

Optional assets:
- `foto/` — images

Usage:
- The app now reads from the per-UMKM files instead of a single monolithic JSON file.
- Keep the folder name and the `id` field aligned so the service and detail route stay in sync.
- `kategori` is normalized to one of: `Makanan`, `Minuman`, or `Snack`.
- Store business photos as local project assets and reference them with paths under `/umkm-assets/<slug>/...`.

Example: `src/umkms/warung-kita/profile.json`
