
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './AmbientPlayer.module.css';

export default function AmbientPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      console.error('Musik gagal diputar:', error);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  return createPortal(
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src="/audio/subak-ambience.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className={styles.playerBar}>
        <button
          type="button"
          className={styles.playButton}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Jeda musik' : 'Putar musik'}
        >
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>

        <button
          type="button"
          className={styles.trackInfo}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <span className={styles.trackTitle}>
            Suara Alam Subak
          </span>

          <span className={styles.trackSubtitle}>
            {isPlaying ? 'Sedang diputar' : 'Musik latar'}
          </span>
        </button>

        <button
          type="button"
          className={styles.expandButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Pengaturan musik"
        >
          {isExpanded ? '⌄' : '♫'}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.expandedPanel}>
          <div className={styles.volumeControl}>
            <button
              type="button"
              className={styles.muteButton}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted || volume === 0 ? '🔇' : '🔊'}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
            />

            <span className={styles.volumeValue}>
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
