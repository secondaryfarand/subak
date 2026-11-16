import React, { useState } from 'react';
import styles from './MapLayerSwitcher.module.css';

const MapLayerSwitcher = ({ layers, activeLayerId, onSelectLayer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const activeLayer =
    layers.find((layer) => layer.id === activeLayerId) || layers[0];

  return (
    <div
      className={styles.switcherWrapper}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Tombol Utama Pemicu */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className={styles.triggerBtn}
        aria-expanded={isExpanded}
        aria-label="Ubah tampilan layer peta"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <span>{activeLayer.label}</span>
      </button>

      {/* Panel Pilihan Layer */}
      {isExpanded && (
        <div className={styles.optionsMenu} role="menu">
          <span className={styles.menuHeader}>Tampilan Peta</span>
          {layers.map((layer) => {
            const isSelected = layer.id === activeLayerId;
            return (
              <button
                key={layer.id}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                onClick={() => {
                  onSelectLayer(layer.id);
                  setIsExpanded(false);
                }}
                className={`${styles.optionItem} ${
                  isSelected ? styles.optionSelected : ''
                }`}
              >
                <span className={styles.radioDot} />
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MapLayerSwitcher;