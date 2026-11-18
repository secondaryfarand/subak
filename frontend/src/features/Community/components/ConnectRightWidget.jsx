import React, { useState } from 'react';
import {
  UPCOMING_SUBAK_EVENTS,
  VOLUNTEER_PROGRAMS,
} from '../data/subakConnectData.js';
import styles from './SubakConnect.module.css';

const ConnectRightWidgets = ({ posts, onSelectPost }) => {
  const [joinedPrograms, setJoinedPrograms] = useState([]);

  const toggleJoinVolunteer = (id) => {
    setJoinedPrograms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <aside className={styles.rightWidgets}>
      {/* Widget 1: Subak Calendar (Upcoming Events) */}
      <div className={styles.widgetCard}>
        <div className={styles.widgetHeader}>
          <h3 className={styles.widgetTitle}>Subak Calendar</h3>
          <span className={styles.widgetSubtitle}>Agenda Pelestarian</span>
        </div>

        <ul className={styles.eventList}>
          {UPCOMING_SUBAK_EVENTS.map((ev) => (
            <li key={ev.id} className={styles.eventItem}>
              <div className={styles.dateBadge}>
                <span className={`stat-number ${styles.dateDay}`}>{ev.day}</span>
                <span className={styles.dateMonth}>{ev.month}</span>
              </div>
              <div className={styles.eventInfo}>
                <strong className={styles.eventTitle}>{ev.title}</strong>
                <span className={styles.eventLocation}>{ev.location}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Widget 2: Volunteer Program */}
      <div className={styles.widgetCard}>
        <div className={styles.widgetHeader}>
          <h3 className={styles.widgetTitle}>Volunteer Program</h3>
          <span className={styles.widgetSubtitle}>Aksi Nyata Lingkungan</span>
        </div>

        <div className={styles.volunteerList}>
          {VOLUNTEER_PROGRAMS.map((prog) => {
            const joined = joinedPrograms.includes(prog.id);
            return (
              <div key={prog.id} className={styles.volunteerItem}>
                <strong>{prog.title}</strong>
                <span className={styles.volunteerMeta}>{prog.schedule}</span>
                <span className={styles.volunteerSlot}>{prog.slots}</span>
                <button
                  type="button"
                  onClick={() => toggleJoinVolunteer(prog.id)}
                  className={`${styles.joinVolunteerBtn} ${
                    joined ? styles.joinedState : ''
                  }`}
                >
                  {joined ? '✓ Terdaftar Sebagai Relawan' : 'Ikut Berpartisipasi'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Widget 3: Trending Knowledge Sharing */}
      <div className={styles.widgetCard}>
        <div className={styles.widgetHeader}>
          <h3 className={styles.widgetTitle}>Topik Hangat</h3>
        </div>

        <ul className={styles.trendingList}>
          {posts.slice(0, 3).map((post) => (
            <li
              key={post.id}
              onClick={() => onSelectPost(post.title)}
              className={styles.trendingItem}
            >
              <img
                src={post.avatar}
                alt={post.author}
                className={styles.trendingAvatar}
              />
              <div>
                <p className={styles.trendingTitle}>{post.title}</p>
                <span className={styles.trendingAuthor}>oleh {post.author}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ConnectRightWidgets;