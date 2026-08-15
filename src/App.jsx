import { useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Beranda from './pages/Beranda.jsx'
import Katalog from './pages/Katalog.jsx'
import DetailUMKM from './pages/DetailUMKM.jsx'
import PanduanLegalitas from './pages/PanduanLegalitas.jsx'
import Tentang from './pages/Tentang.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-body)' }}>
      <Navbar />
      <main className="flex-1" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Beranda />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/umkm/:slug" element={<DetailUMKM />} />
            <Route path="/legalitas" element={<PanduanLegalitas />} />
            <Route path="/panduan-legalitas" element={<Navigate to="/legalitas" replace />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/index.html" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

