import React from 'react';
import styles from './SubakConnect.module.css';

const ConnectSidebar = ({
  activeMenu,
  onSelectMenu,
  onOpenReportModal,
  reportCount,
}) => {
  const mainMenus = [
    { id: 'hub', label: 'Community Hub', icon: '⌂' },
    { id: 'calendar', label: 'Subak Calendar', icon: '◫' },
    { id: 'knowledge', label: 'Knowledge Sharing', icon: '❖' },
    { id: 'volunteer', label: 'Volunteer Program', icon: '✦' },
  ];

  const workingGroups = [
    { id: 'hulu', label: 'Krama Hulu Batukaru', dotColor: '#173D2B' },
    { id: 'pakerisan', label: 'DAS Pakerisan', dotColor: '#527B50' },
    { id: 'organik', label: 'Tani Organik Sembung', dotColor: '#A7B98A' },
  ];

  return (
    <aside className={styles.leftSidebar}>
      {/* Workspace Header */}
      <div className={styles.workspaceHeader}>
        <div className={styles.workspaceBadge}>SC</div>
        <div>
          <strong className={styles.workspaceName}>Subak Connect</strong>
          <span className={styles.workspaceSub}>Krama &amp; Komunitas</span>
        </div>
      </div>

      {/* Menu Utama */}
      <nav className={styles.sidebarGroup} aria-label="Menu Komunitas">
        {mainMenus.map((item) => {
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectMenu(item.id)}
              className={`${styles.sidebarBtn} ${
                isActive ? styles.sidebarBtnActive : ''
              }`}
            >
              <span className={styles.sidebarIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Tombol Aksi Simulasi Pelaporan Irigasi */}
      <div className={styles.sidebarGroup}>
        <span className={styles.sidebarSectionLabel}>Pengawasan Air</span>
        <button
          type="button"
          onClick={onOpenReportModal}
          className={styles.reportTriggerCard}
        >
          <div className={styles.reportTriggerTop}>
            <span className={styles.alertIndicator} />
            <strong>Issue Reporting Demo</strong>
          </div>
          <p>Laporkan saluran irigasi tersumbat, tercemar, atau rusak.</p>
          <span className={styles.reportBadgeCount}>
            {reportCount} laporan aktif
          </span>
        </button>
      </div>

      {/* Kelompok Wilayah Subak */}
      <div className={styles.sidebarGroup}>
        <span className={styles.sidebarSectionLabel}>Kelompok Subak</span>
        {workingGroups.map((grp) => (
          <button
            key={grp.id}
            type="button"
            onClick={() => onSelectMenu('hub')}
            className={styles.sidebarBtn}
          >
            <span
              className={styles.groupDot}
              style={{ backgroundColor: grp.dotColor }}
            />
            <span>{grp.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default ConnectSidebar;