/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#1B4D3E',
        'primary-light': '#256D58',
        'primary-soft': '#EAF2ED',
        accent: '#D97706',
        'accent-light': '#FEF3C7',
        background: '#FAF8F5',
        'text-dark': '#0F172A',
        'text-muted': '#475569',
        'category-kuliner': '#D97706',
        'category-kerajinan': '#92400E',
        'category-fashion': '#86198F',
        'category-pertanian': '#15803D',
        'category-jasa': '#1D4ED8',
        'category-toko': '#C2410C',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.06)',
        card: '0 4px 20px rgba(15, 23, 42, 0.08)',
        hover: '0 16px 36px rgba(27, 77, 62, 0.15)',
      },
    },
  },
}