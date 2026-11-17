import React, { useState } from 'react';
import styles from './SubakConnect.module.css';

const IssueReportModal = ({ isOpen, onClose, onSubmitReport }) => {
  const [location, setLocation] = useState('Subak Jatiluwih - Telabah Utama');
  const [issueType, setIssueType] = useState('Penyumbatan Sampah / Endapan');
  const [urgency, setUrgency] = useState('Sedang');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    onSubmitReport({
      location,
      issueType,
      urgency,
      description,
    });

    setDescription('');
    onClose();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.modalEyebrow}>Simulasi Pengawasan Air</span>
            <h3>Issue Reporting Demo</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeModalBtn}
            aria-label="Tutup modal"
          >
            ✕
          </button>
        </div>

        <p className={styles.modalIntro}>
          Laporkan kondisi saluran irigasi tercemar, tersumbat, atau tanggul rusak
          agar segera ditindaklanjuti bersama oleh Pekaseh dan relawan.
        </p>

        <form onSubmit={handleSubmit} className={styles.reportForm}>
          <label className={styles.formField}>
            <span>Lokasi Saluran Subak</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={styles.textInput}
            >
              <option value="Subak Jatiluwih - Telabah Utama">
                Subak Jatiluwih — Telabah Utama
              </option>
              <option value="Subak DAS Pakerisan - Hulu Empelan">
                Subak DAS Pakerisan — Hulu Empelan
              </option>
              <option value="Subak Sembung - Saluran Sekunder">
                Subak Sembung — Saluran Sekunder
              </option>
              <option value="Subak Pulagan - Terowongan Aungan">
                Subak Pulagan — Terowongan Aungan
              </option>
            </select>
          </label>

          <div className={styles.composerRow}>
            <label className={styles.formField}>
              <span>Jenis Kendala</span>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className={styles.textInput}
              >
                <option value="Penyumbatan Sampah / Endapan">
                  Penyumbatan Sampah / Endapan
                </option>
                <option value="Pencemaran Limbah Air">
                  Pencemaran Limbah Air
                </option>
                <option value="Kerusakan Tanggul / Pematang">
                  Kerusakan Tanggul / Pematang
                </option>
              </select>
            </label>

            <label className={styles.formField}>
              <span>Tingkat Urgensi</span>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className={styles.textInput}
              >
                <option value="Rendah">Rendah (Pemantauan)</option>
                <option value="Sedang">Sedang (Perlu Gotong Royong)</option>
                <option value="Tinggi">Tinggi (Aliran Terputus)</option>
              </select>
            </label>
          </div>

          <label className={styles.formField}>
            <span>Detail Kondisi Lapangan</span>
            <textarea
              rows="3"
              required
              placeholder="Contoh: Terdapat tumpukan ranting dan plastik menyumbat pintu pembagi air..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textArea}
            />
          </label>

          <div className={styles.modalActions}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Batal
            </button>
            <button type="submit" className="btn-primary">
              Kirim Laporan ke Feed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueReportModal;