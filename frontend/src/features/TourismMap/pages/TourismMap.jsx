import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  SUBAK_DESTINATIONS,
  WATERSHED_FLOW_PATH,
  MAP_TILE_LAYERS
} from '../data/subakDestinations.js';
import MapLayerSwitcher from '../components/MapLayerSwitcher.jsx';
import styles from './TourismMap.module.css';

// Kustom Marker SVG bernuansa Subak (Forest & Leaf) tanpa tergantung asset gambar eksternal
const createSubakMarker = (isSelected) =>
  L.divIcon({
    className: 'custom-subak-pin',
    html: `
      <div style="
        width: ${isSelected ? '38px' : '30px'};
        height: ${isSelected ? '38px' : '30px'};
        background-color: ${isSelected ? '#173D2B' : '#527B50'};
        border: 3px solid #F5F1E5;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 6px 16px rgba(23, 61, 43, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.25s ease;
      ">
        <div style="
          width: 10px;
          height: 10px;
          background-color: #F5F1E5;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -36],
  });

// Komponen kontrol untuk memindahkan kamera peta secara halus saat destinasi dipilih
const MapFocusController = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 12, { duration: 1.35 });
    }
  }, [center, map]);
  return null;
};

const TourismMap = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedSpot, setSelectedSpot] = useState(SUBAK_DESTINATIONS[0]);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'ethics'
  const [showWatershed, setShowWatershed] = useState(true);
  const [pledgedIds, setPledgedIds] = useState([]);

  const [activeLayerId, setActiveLayerId] = useState(MAP_TILE_LAYERS[0].id);
  const currentTileLayer =
    MAP_TILE_LAYERS.find((layer) => layer.id === activeLayerId) ||
    MAP_TILE_LAYERS[0];

  const categories = ['Semua', 'UNESCO', 'Ekowisata', 'Hulu & Pura Air'];

  const filteredSpots =
    selectedCategory === 'Semua'
      ? SUBAK_DESTINATIONS
      : SUBAK_DESTINATIONS.filter((item) => item.category === selectedCategory);

  const isPledged = pledgedIds.includes(selectedSpot.id);

  const handleTogglePledge = (id) => {
    setPledgedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className={styles.pageContainer}>
      {/* 1. Header Editorial & Kontrol Filter */}
      <section className={styles.headerSection}>
        <div className="container">
          <div className={styles.headerTop}>
            <div>
              <span className={styles.eyebrow}>Pariwisata Berkelanjutan • Bali</span>
              <h1 className={styles.pageTitle}>TourismMap Subak</h1>
              <p className={styles.pageSubtitle}>
                Jelajahi keterhubungan hulu ke hilir kawasan Subak di Bali dan pahami
                etika berkunjung untuk menjaga kelestarian alam serta ruang sakral petani.
              </p>
            </div>

            {/* Toggle Visualisasi Aliran Air Hulu-Hilir */}
            <button
              type="button"
              onClick={() => setShowWatershed(!showWatershed)}
              className={`${styles.watershedToggle} ${
                showWatershed ? styles.watershedActive : ''
              }`}
            >
              <span className={styles.pulseDot} />
              {showWatershed
                ? 'Jalur Aliran Air Hulu–Hilir: Aktif'
                : 'Tampilkan Aliran Air Hulu–Hilir'}
            </button>
          </div>

          {/* Filter Kategori */}
          <div className={styles.filterBar} role="tablist" aria-label="Filter Kawasan">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  const firstMatch =
                    cat === 'Semua'
                      ? SUBAK_DESTINATIONS[0]
                      : SUBAK_DESTINATIONS.find((s) => s.category === cat);
                  if (firstMatch) setSelectedSpot(firstMatch);
                }}
                className={`${styles.filterChip} ${
                  selectedCategory === cat ? styles.filterChipActive : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Workspace Utama: Peta Interaktif + Panel Informasi & Etika */}
      <section className={styles.mapWorkspace}>
        <div className={`container ${styles.workspaceGrid}`}>
          {/* Kolom Kiri: Peta Leaflet + Daftar Cepat Destinasi */}
          <div className={styles.mapColumn}>
            <div className={styles.mapFrame}>
                <MapLayerSwitcher
                    layers={MAP_TILE_LAYERS}
                    activeLayerId={activeLayerId}
                    onSelectLayer={setActiveLayerId}
                />
              <MapContainer
                center={selectedSpot.coordinates}
                zoom={11}
                scrollWheelZoom={true}
                className={styles.leafletContainer}
              >
                {/* TileLayer Carto Voyager (Warna alami lembut selaras tema Cream & Sage) */}
                {/* <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                /> */}
                {/* <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
                    />
                 */}
                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    /> */}

                <TileLayer
                    key={currentTileLayer.id}
                    attribution={currentTileLayer.attribution}
                    url={currentTileLayer.url}
                    />


                <MapFocusController center={selectedSpot.coordinates} />

                {/* Garis Koneksi Ekologi Hulu ke Hilir */}
                {showWatershed && (
                  <Polyline
                    positions={WATERSHED_FLOW_PATH}
                    pathOptions={{
                      color: '#527B50',
                      weight: 4,
                      opacity: 0.75,
                      dashArray: '10, 10',
                    }}
                  />
                )}

                {/* Marker Kawasan Subak */}
                {filteredSpots.map((spot) => (
                  <Marker
                    key={spot.id}
                    position={spot.coordinates}
                    icon={createSubakMarker(selectedSpot.id === spot.id)}
                    eventHandlers={{
                      click: () => {
                        setSelectedSpot(spot);
                      },
                    }}
                  >
                    <Popup>
                      <div className={styles.mapPopup}>
                        <strong>{spot.name}</strong>
                        <span>Kab. {spot.regency} • {spot.elevation}</span>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {/* Legenda Peta Mengambang */}
              <div className={styles.mapLegend}>
                <div className={styles.legendItem}>
                  <span className={styles.legendPin} />
                  <span>Kawasan Subak</span>
                </div>
                {showWatershed && (
                  <div className={styles.legendItem}>
                    <span className={styles.legendLine} />
                    <span>Koneksi Air Hulu–Hilir</span>
                  </div>
                )}
              </div>
            </div>

            {/* Horizontal Selector Destinasi di Bawah Peta */}
            <div className={styles.spotSelectorGrid}>
              {filteredSpots.map((spot) => {
                const active = selectedSpot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setSelectedSpot(spot)}
                    className={`${styles.spotMiniCard} ${
                      active ? styles.spotMiniCardActive : ''
                    }`}
                  >
                    <span className={styles.miniRegency}>{spot.regency}</span>
                    <strong className={styles.miniName}>{spot.name}</strong>
                    <span className={styles.miniBadge}>{spot.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Panel Editorial Detail & Etika Berwisata */}
          <aside className={styles.detailPanel}>
            <div className={styles.detailImageWrapper}>
              <img
                src={selectedSpot.image}
                alt={selectedSpot.name}
                className={styles.detailImage}
              />
              <span className={styles.categoryBadge}>{selectedSpot.category}</span>
            </div>

            <div className={styles.detailBody}>
              <div className={styles.detailHeader}>
                <span className={styles.locationMeta}>
                  Kabupaten {selectedSpot.regency} • Sumber: {selectedSpot.waterSource}
                </span>
                <h2 className={styles.detailTitle}>{selectedSpot.name}</h2>
              </div>

              {/* Tab Navigasi Konten: Wawasan vs Etika Wisata */}
              <div className={styles.detailTabs}>
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`${styles.tabBtn} ${
                    activeTab === 'overview' ? styles.tabBtnActive : ''
                  }`}
                >
                  Wawasan Kawasan
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ethics')}
                  className={`${styles.tabBtn} ${
                    activeTab === 'ethics' ? styles.tabBtnActive : ''
                  }`}
                >
                  Etika Berwisata ({selectedSpot.ecoEthics.length})
                </button>
              </div>

              {/* Konten Tab 1: Wawasan Kawasan & Ekologi */}
              {activeTab === 'overview' && (
                <div className={styles.tabContent}>
                  <p className={styles.detailDescription}>{selectedSpot.description}</p>

                  <div className={styles.metricsBox}>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Luas Kawasan</span>
                      <span className={`stat-number ${styles.metricValue}`}>
                        {selectedSpot.area}
                      </span>
                    </div>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Ketinggian</span>
                      <span className={`stat-number ${styles.metricValue}`}>
                        {selectedSpot.elevation}
                      </span>
                    </div>
                  </div>

                  <div className={styles.ecoStatusBox}>
                    <span className={styles.ecoStatusLabel}>Status Daya Dukung:</span>
                    <strong>{selectedSpot.crowdStatus}</strong>
                  </div>
                </div>
              )}

              {/* Konten Tab 2: Etika Berwisata Bertanggung Jawab */}
              {activeTab === 'ethics' && (
                <div className={styles.tabContent}>
                  <div className={styles.ethicsAlert}>
                    <strong>Prinsip Krama Subak:</strong> Setiap petak sawah dan saluran
                    air memiliki nilai spiritual serta fungsi penghidupan bagi petani.
                  </div>

                  <ul className={styles.ethicsList}>
                    {selectedSpot.ecoEthics.map((rule, idx) => (
                      <li key={idx} className={styles.ethicsItem}>
                        <span className={styles.ruleIndex}>0{idx + 1}</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.dosDontsGrid}>
                    <div className={styles.doBox}>
                      <h4>Dianjurkan</h4>
                      <ul>
                        {selectedSpot.dosAndDonts.dos.map((d, i) => (
                          <li key={i}>✓ {d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.dontBox}>
                      <h4>Hindari</h4>
                      <ul>
                        {selectedSpot.dosAndDonts.donts.map((d, i) => (
                          <li key={i}>✕ {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Panel: Komitmen Eco-Pledge & Arah Google Maps */}
              <div className={styles.detailFooter}>
                <button
                  type="button"
                  onClick={() => handleTogglePledge(selectedSpot.id)}
                  className={`${styles.pledgeBtn} ${
                    isPledged ? styles.pledgeBtnDone : ''
                  }`}
                >
                  {isPledged
                    ? '✓ Saya Berkomitmen Menjaga Kawasan Ini'
                    : 'Ikrar Wisatawan Bertanggung Jawab'}
                </button>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedSpot.coordinates[0]},${selectedSpot.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-secondary ${styles.routeBtn}`}
                >
                  Buka Rute
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default TourismMap;