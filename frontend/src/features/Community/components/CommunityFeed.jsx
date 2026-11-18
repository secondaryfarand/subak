import React, { useState } from 'react';
import styles from './SubakConnect.module.css';

const CommunityFeed = ({
  posts,
  activeMenu,
  searchQuery,
  onToggleLike,
  onAddComment,
  onCreatePost,
  onOpenReportModal,
}) => {
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);
  const [sortBy, setSortBy] = useState('latest'); // 'latest' | 'popular'
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  // State form buat diskusi baru
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Knowledge Sharing');
  const [newContent, setNewContent] = useState('');

  // State komentar per post
  const [commentInputs, setCommentInputs] = useState({});
  const [openComments, setOpenComments] = useState({ 'post-1': true });

  const handlePublishPost = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    onCreatePost({
      title: newTitle,
      category: newCategory,
      content: newContent,
    });
    setNewTitle('');
    setNewContent('');
    setIsComposerOpen(false);
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;
    onAddComment(postId, text);
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    setOpenComments((prev) => ({ ...prev, [postId]: true }));
  };

  // Filter berdasarkan menu sidebar dan kotak pencarian
  const filteredPosts = posts
    .filter((post) => {
      if (activeMenu === 'knowledge') return post.category === 'Knowledge Sharing';
      if (activeMenu === 'volunteer') return post.category === 'Volunteer Program';
      return true;
    })
    .filter((post) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => (sortBy === 'popular' ? b.likes - a.likes : 0));

  return (
    <section className={styles.centerFeed}>
      {/* Sub-header Feed: Judul Halaman + Filter + Tombol New Post */}
      <div className={styles.feedHeader}>
        <div>
          <h2 className={styles.feedHeading}>
            {activeMenu === 'hub' && 'Community Hub'}
            {activeMenu === 'calendar' && 'Agenda & Kalender Subak'}
            {activeMenu === 'knowledge' && 'Knowledge Sharing'}
            {activeMenu === 'volunteer' && 'Program Sukarelawan'}
          </h2>
          <span className={styles.feedTagline}>
            &ldquo;One Community, One Shared Responsibility.&rdquo;
          </span>
        </div>

        <div className={styles.feedHeaderActions}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.sortSelect}
            aria-label="Urutkan diskusi"
          >
            <option value="latest">Terbaru</option>
            <option value="popular">Terpopuler</option>
          </select>

          <button
            type="button"
            onClick={() => setIsComposerOpen((prev) => !prev)}
            className="btn-primary"
          >
            {isComposerOpen ? 'Tutup Form' : '+ Buat Diskusi'}
          </button>
        </div>
      </div>

      {/* Welcome Hero Banner Cerah (Mirip Banner Hijau Lembut Referensi) */}
      {showWelcomeBanner && (
        <div className={styles.welcomeBanner}>
          <button
            type="button"
            onClick={() => setShowWelcomeBanner(false)}
            className={styles.dismissBannerBtn}
            aria-label="Tutup banner sambutan"
          >
            ✕
          </button>

          <div className={styles.welcomeContent}>
            <span className={styles.welcomePill}>Selamat Datang di Subak Connect</span>
            <h1 className={styles.welcomeTitle}>
              Connecting Farmers, Nature &amp; Community
            </h1>
            <p className={styles.welcomeDesc}>
              Ruang kolaborasi digital bagi petani, relawan, dan masyarakat untuk
              menjaga aliran air bersih serta keberlanjutan pertanian Bali.
            </p>
            <div className={styles.welcomeActions}>
              <button
                type="button"
                onClick={onOpenReportModal}
                className={styles.bannerSecondaryBtn}
              >
                Simulasi Lapor Irigasi
              </button>
            </div>
          </div>

          <div className={styles.welcomeVisual}>
            <img
              src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=700&q=80"
              alt="Komunitas Petani Subak Bali"
              className={styles.welcomeImg}
            />
          </div>
        </div>
      )}

      {/* Composer Form Diskusi Baru */}
      {isComposerOpen && (
        <form onSubmit={handlePublishPost} className={styles.composerCard}>
          <h3>Bagikan Informasi atau Praktik Pertanian</h3>
          <div className={styles.composerRow}>
            <input
              type="text"
              required
              placeholder="Judul topik diskusi..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className={styles.textInput}
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="Knowledge Sharing">Knowledge Sharing</option>
              <option value="Volunteer Program">Volunteer Program</option>
              <option value="Kabar Subak">Kabar Subak</option>
            </select>
          </div>
          <textarea
            rows="3"
            required
            placeholder="Tuliskan pengalaman bertani, kondisi aliran air, atau ajakan gotong royong..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className={styles.textArea}
          />
          <div className={styles.composerFooter}>
            <button type="submit" className="btn-primary">
              Publikasikan ke Komunitas
            </button>
          </div>
        </form>
      )}

      {/* Daftar Kartu Diskusi Komunitas */}
      <div className={styles.postsStack}>
        {filteredPosts.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Belum ada diskusi yang sesuai dengan pencarian atau kategori ini.</p>
          </div>
        ) : (
          filteredPosts.map((post) => {
            const isCommentsVisible = Boolean(openComments[post.id]);
            return (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.postAuthorInfo}>
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className={styles.authorAvatar}
                    />
                    <div>
                      <strong className={styles.authorName}>{post.author}</strong>
                      <span className={styles.postMeta}>
                        {post.role} • {post.date}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`${styles.postTag} ${
                      post.isIssueReport ? styles.issueTag : ''
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postBody}>{post.content}</p>

                {/* Baris Interaksi Like & Komentar */}
                <div className={styles.postFooter}>
                  <div className={styles.postReactions}>
                    <button
                      type="button"
                      onClick={() => onToggleLike(post.id)}
                      className={`${styles.actionBtn} ${
                        post.likedByMe ? styles.actionBtnLiked : ''
                      }`}
                    >
                      <span>{post.likedByMe ? '♥' : '♡'}</span>
                      <span>Dukung ({post.likes})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenComments((prev) => ({
                          ...prev,
                          [post.id]: !prev[post.id],
                        }))
                      }
                      className={styles.actionBtn}
                    >
                      <span>💬</span>
                      <span>Diskusi ({post.comments.length})</span>
                    </button>
                  </div>
                </div>

                {/* Bagian Komentar */}
                {isCommentsVisible && (
                  <div className={styles.commentsBox}>
                    {post.comments.map((c) => (
                      <div key={c.id} className={styles.commentItem}>
                        <strong>{c.author}:</strong> <span>{c.text}</span>
                      </div>
                    ))}

                    <form
                      onSubmit={(e) => handleCommentSubmit(e, post.id)}
                      className={styles.commentForm}
                    >
                      <input
                        type="text"
                        placeholder="Tulis tanggapan untuk krama..."
                        value={commentInputs[post.id] || ''}
                        onChange={(e) =>
                          setCommentInputs((prev) => ({
                            ...prev,
                            [post.id]: e.target.value,
                          }))
                        }
                        className={styles.commentInput}
                      />
                      <button type="submit" className={styles.commentSendBtn}>
                        Kirim
                      </button>
                    </form>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};

export default CommunityFeed;