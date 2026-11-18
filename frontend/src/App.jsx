
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/Navigationbar';
import LandingPage from './features/LandingPage/pages/LandingPage';
import TourismMap from './features/TourismMap/pages/TourismMap';
import StoriesGallery from './features/Gallery/pages/StoriesGallery';
import Footer from './components/Footer/Footer';
import ExploreSubak from './features/ExploreSubak/pages/ExploreSubak';
import JourneyOfWater from './features/JourneyOfWater/pages/JourneyOfWater';
import IssuesPage from './features/Issues/pages/IssuesPage';
import IssueDetail from './features/Issues/pages/IssueDetail';
import SubakConnect from './features/Community/pages/SubakConnect';
import GreenActionPage from './features/GreenAction/pages/GreenActionPage';
import AmbientPlayer from './components/AmbientPlayer/AmbientPlayer';

// Komponen pembantu agar scroll selalu kembali ke atas saat pindah halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

// Placeholder sementara untuk halaman lainnya
const PlaceholderPage = ({ title, subtitle }) => (
  <main className="section">
    <div className="container">
      <span
        style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--accent)',
        }}
      >
        Halaman Subak
      </span>
      <h1 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </main>
);

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('subak-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('subak-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  };

  return (
    <BrowserRouter>
      <ScrollToTop />

      <AmbientPlayer />

      <NavigationBar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/eksplorasi"
          element={<ExploreSubak />}
        />

        <Route
          path="/filosofi"
          element={
            <PlaceholderPage
              title="Filosofi Tri Hita Karana"
              subtitle="Keseimbangan spiritual, sosial, dan ekologi yang menjadi landasan utama sistem irigasi Subak."
            />
          }
        />

        <Route
          path="/irigasi"
          element={<JourneyOfWater />}
        />

        <Route path="/isu" element={<IssuesPage />} />
        <Route path="/isu/:slug" element={<IssueDetail />} />

        <Route path="/green-action" element={<GreenActionPage />} />

        <Route
          path="/galeri"
          element={<StoriesGallery />}
        />

        <Route
          path="/peta-subak"
          element={<TourismMap />}
        />

        <Route
          path="/komunitas"
          element={<SubakConnect />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
