import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Mode transparan aktif hanya saat di halaman Beranda (Hero Video) dan belum di-scroll
  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled && !isOpen;

  // Tutup menu mobile otomatis setiap kali pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Deteksi scroll sejak awal (scrollY > 10px)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // Cek posisi awal saat halaman baru dimuat
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/eksplorasi', label: 'Eksplorasi' },
    { path: '/irigasi', label: 'Journey of Water' },
    { path: '/isu', label: 'Isu' },
    { path: '/green-action', label: 'Kampanye' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/peta-subak', label: 'Peta Subak' },
  ];

  return (
    <header
      className={`${styles.navbar} ${
        isTransparent ? styles.transparent : styles.solid
      } ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link to="/" className={styles.logo}>
          SUBAK<span className={styles.logoDot}>.</span>
        </Link>

        {/* Menu Navigasi Desktop */}
        <nav className={styles.desktopNav} aria-label="Navigasi Utama">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA dan Tombol Tema */}
        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={`Aktifkan mode ${theme === 'light' ? 'gelap' : 'terang'}`}
            aria-pressed={theme === 'dark'}
            title={`Mode ${theme === 'light' ? 'gelap' : 'terang'}`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>

          <Link to="/eksplorasi" className={`btn-primary ${styles.desktopCta}`}>
            Jelajahi Sistem
          </Link>

          <button
            type="button"
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      {/* Overlay & Drawer Menu Mobile */}
      <div
        className={`${styles.mobileBackdrop} ${isOpen ? styles.backdropVisible : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerContent}>
          <span className={styles.drawerLabel}>Menu Navigasi</span>

          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.mobileActiveLink : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.drawerFooter}>
            <Link to="/eksplorasi" className={`btn-primary ${styles.mobileCta}`}>
              Jelajahi Sistem Subak
            </Link>

            <button
              type="button"
              className={styles.mobileThemeToggle}
              onClick={onToggleTheme}
            >
              {theme === 'light' ? '☾  Aktifkan Mode Gelap' : '☀  Aktifkan Mode Terang'}
            </button>

            <p className={styles.drawerNote}>Warisan Budaya Dunia • Bali</p>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default NavigationBar;