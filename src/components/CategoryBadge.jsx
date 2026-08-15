const categoryStyles = {
  Makanan: 'bg-amber-600 text-theme-contrast border border-amber-500/30 shadow-sm',
  Minuman: 'bg-sky-700 text-theme-contrast border border-sky-600/30 shadow-sm',
  Snack: 'bg-rose-700 text-theme-contrast border border-rose-600/30 shadow-sm',
}

export default function CategoryBadge({ category, className = '' }) {
  const colorClass = categoryStyles[category] ?? categoryStyles.Makanan

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide backdrop-blur-md ${colorClass} ${className}`}
    >
      {category}
    </span>
  )
}

