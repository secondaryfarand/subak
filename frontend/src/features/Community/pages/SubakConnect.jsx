import React, { useState } from 'react';
import { INITIAL_POSTS } from '../data/subakConnectData.js';
import ConnectSidebar from '../components/ConnectSidebar';
import CommunityFeed from '../components/CommunityFeed';
import ConnectRightWidgets from '../components/ConnectRightWidget';
import IssueReportModal from '../components/IssueReportModal';
import styles from './SubakConnect.module.css';

const SubakConnect = () => {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [activeMenu, setActiveMenu] = useState('hub');
  const [searchQuery, setSearchQuery] = useState('');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleToggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              likedByMe: !post.likedByMe,
              likes: post.likedByMe ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleAddComment = (postId, text) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: `c-${Date.now()}`,
                  author: 'Anggota Komunitas',
                  text,
                },
              ],
            }
          : post
      )
    );
  };

  const handleCreatePost = ({ title, category, content }) => {
    const newPost = {
      id: `post-${Date.now()}`,
      author: 'Krama Subak (Anda)',
      role: 'Kontributor Komunitas',
      avatar:
        'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=200&q=80',
      date: 'Baru saja',
      category,
      title,
      content,
      likes: 1,
      likedByMe: true,
      comments: [],
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleSubmitIssueReport = ({
    location,
    issueType,
    urgency,
    description,
  }) => {
    const reportPost = {
      id: `report-${Date.now()}`,
      author: 'Laporan Warga & Petani',
      role: `Urgensi: ${urgency}`,
      avatar:
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=200&q=80',
      date: 'Baru saja',
      category: `Laporan Irigasi • ${issueType}`,
      title: `[Laporan Lapangan] ${location}`,
      content: description,
      likes: 1,
      likedByMe: true,
      isIssueReport: true,
      comments: [],
    };
    setPosts((prev) => [reportPost, ...prev]);
    setActiveMenu('hub');
  };

  const reportCount = posts.filter((p) => p.isIssueReport).length + 2;

  return (
    <main className={styles.brightCanvas}>
      {/* Bingkai Aplikasi Komunitas Full-Width (Edge-to-Edge) */}
      <div className={styles.appShell}>
        {/* Top Search & Utility Bar */}
        <div className={styles.shellTopBar}>
          <div className={styles.shellBrandMobile}>
            <strong>SUBAK CONNECT</strong>
          </div>

          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon} aria-hidden="true">
              ⌕
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari diskusi pertanian, jadwal subak, atau laporan irigasi..."
              className={styles.searchInput}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsReportModalOpen(true)}
            className={styles.topReportBtn}
          >
            Lapor Irigasi
          </button>
        </div>

        {/* Grid Utama 3 Kolom Full-Screen */}
        <div className={styles.shellGrid}>
          <ConnectSidebar
            activeMenu={activeMenu}
            onSelectMenu={setActiveMenu}
            onOpenReportModal={() => setIsReportModalOpen(true)}
            reportCount={reportCount}
          />

          <CommunityFeed
            posts={posts}
            activeMenu={activeMenu}
            searchQuery={searchQuery}
            onToggleLike={handleToggleLike}
            onAddComment={handleAddComment}
            onCreatePost={handleCreatePost}
            onOpenReportModal={() => setIsReportModalOpen(true)}
          />

          <ConnectRightWidgets
            posts={posts}
            onSelectPost={(title) => setSearchQuery(title)}
          />
        </div>
      </div>

      {/* Modal Simulasi Issue Reporting */}
      <IssueReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmitReport={handleSubmitIssueReport}
      />
    </main>
  );
};

export default SubakConnect;