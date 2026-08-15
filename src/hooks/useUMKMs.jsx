import { useMemo } from 'react'
import { getAllUMKMs, getUMKMById } from '../services/umkmService'

export default function useUMKMs() {
  const data = useMemo(() => getAllUMKMs(), [])

  const getById = (id) => getUMKMById(id)

  return { data, getById }
}
