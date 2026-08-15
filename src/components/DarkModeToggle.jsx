import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition-all duration-300 hover:opacity-90"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-heading)'
      }}
    >
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(90deg) scale(0)' : 'rotate(0) scale(1)',
        }}
      >
        <Moon className="h-[18px] w-[18px]" />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0)',
        }}
      >
        <Sun className="h-[18px] w-[18px]" />
      </span>
    </button>
  )
}
