import { useState } from 'react';
import styles from './SubakScenarioQuiz.module.css';

const SCENARIOS = [
  {
    id: 'jatiluwih-pematang',
    place: 'Subak Jatiluwih',
    title: 'Spot foto di pematang',
    situation:
      'Kamu sedang berkunjung ke Jatiluwih. Ada pematang sempit yang terlihat indah untuk dijadikan tempat berfoto, tetapi jalur itu berada di area yang sedang ditanami padi. Apa yang kamu lakukan?',
    options: [
      { id: 'a', label: 'Tetap berjalan ke pematang agar mendapat foto terbaik.' },
      { id: 'b', label: 'Menggunakan jalur trekking resmi dan mengambil foto dari sana.' },
      { id: 'c', label: 'Mengajak teman berdiri di antara tanaman padi sebentar saja.' },
    ],
    answer: 'b',
    feedback:
      'Pilih jalur trekking resmi. Pematang sempit yang sedang ditanami bukan ruang wisata; menginjaknya dapat mengganggu tanaman dan aktivitas petani.',
    source: 'Etika Subak Jatiluwih: gunakan jalur trekking resmi dan hindari pematang sempit yang sedang ditanami padi.',
  },
  {
    id: 'drone-permission',
    place: 'Subak Jatiluwih',
    title: 'Ingin mengambil gambar dari udara',
    situation:
      'Pemandangan sawah terlihat menakjubkan dari atas. Kamu membawa drone dan ingin menerbangkannya untuk mengambil video. Apa langkah yang tepat?',
    options: [
      { id: 'a', label: 'Langsung menerbangkan drone selama tidak terlalu rendah.' },
      { id: 'b', label: 'Meminta izin kepada Pekaseh dan pengelola kawasan terlebih dahulu.' },
      { id: 'c', label: 'Menerbangkannya hanya ketika tidak ada petani di dekatmu.' },
    ],
    answer: 'b',
    feedback:
      'Drone tidak boleh diterbangkan tanpa izin Pekaseh (ketua Subak) dan pengelola kawasan. Meminta izin lebih dulu membantu menghormati aturan dan aktivitas di kawasan tersebut.',
    source: 'Etika Subak Jatiluwih: dilarang menerbangkan drone tanpa izin Pekaseh dan pengelola kawasan.',
  },
  {
    id: 'pakerisan-sacred-area',
    place: 'Subak DAS Pakerisan',
    title: 'Melewati kawasan yang berbatasan dengan pura',
    situation:
      'Saat menjelajahi kawasan Subak DAS Pakerisan, kamu melihat jalur yang berbatasan dengan area pura. Bagaimana sebaiknya kamu bersikap?',
    options: [
      { id: 'a', label: 'Mengenakan kain kamen dan selendang saat melintasi area tersebut.' },
      { id: 'b', label: 'Tetap menggunakan pakaian seperti biasa asalkan berjalan cepat.' },
      { id: 'c', label: 'Mengambil jalan pintas melewati area pura agar perjalanan lebih singkat.' },
    ],
    answer: 'a',
    feedback:
      'Kenakan kain kamen dan selendang saat melintasi area yang berbatasan dengan pura. Pakaian yang sesuai merupakan bentuk penghormatan terhadap ruang sakral.',
    source: 'Etika Subak DAS Pakerisan: wajib mengenakan kain kamen dan selendang saat melintasi area yang berbatasan dengan pura.',
  },
  {
    id: 'irrigation-channel',
    place: 'Subak DAS Pakerisan',
    title: 'Ingin membersihkan tangan',
    situation:
      'Setelah berjalan, tanganmu kotor dan kamu melihat saluran irigasi yang airnya tampak jernih. Apa yang sebaiknya kamu lakukan?',
    options: [
      { id: 'a', label: 'Mencuci tangan di saluran karena airnya terlihat bersih.' },
      { id: 'b', label: 'Menggunakan sabun sedikit saja agar tidak mengotori air.' },
      { id: 'c', label: 'Tidak menggunakan saluran irigasi untuk mencuci dan mencari fasilitas yang sesuai.' },
    ],
    answer: 'c',
    feedback:
      'Saluran irigasi utama tidak boleh digunakan untuk mencuci tangan, kaki, atau peralatan. Air tersebut memiliki fungsi penting bagi sistem Subak dan juga dianggap suci.',
    source: 'Etika Subak DAS Pakerisan: dilarang mencuci tangan, kaki, atau peralatan di saluran irigasi utama.',
  },
  {
    id: 'sembung-path-and-waste',
    place: 'Ekowisata Subak Sembung',
    title: 'Berpapasan dengan petani',
    situation:
      'Kamu sedang berjalan di jalur setapak Subak Sembung. Seorang petani membawa hasil panen melewati jalur yang sama, sementara kamu membawa minuman dalam kemasan. Apa tindakan terbaik?',
    options: [
      { id: 'a', label: 'Tetap berjalan di tengah jalur dan meninggalkan kemasan di pinggir sawah.' },
      { id: 'b', label: 'Memberi prioritas kepada petani dan membawa kembali sampah kemasanmu.' },
      { id: 'c', label: 'Meminta petani menunggu sampai kamu selesai berfoto.' },
    ],
    answer: 'b',
    feedback:
      'Prioritaskan pejalan kaki dan petani yang membawa hasil panen. Dukung kawasan dengan tidak meninggalkan sampah kemasan sekecil apa pun.',
    source: 'Etika Subak Sembung: prioritaskan pejalan kaki dan petani di jalur setapak, serta jangan meninggalkan sampah kemasan.',
  },
];

const SubakScenarioQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const scenario = SCENARIOS[current];
  const selected = answers[scenario.id];
  const score = SCENARIOS.filter((item) => answers[item.id] === item.answer).length;
  const progress = (Object.keys(answers).length / SCENARIOS.length) * 100;

  const choose = (optionId) => {
    if (selected) return;
    setAnswers((previous) => ({ ...previous, [scenario.id]: optionId }));
  };

  const restart = () => {
    setCurrent(0);
    setAnswers({});
    setFinished(false);
  };

  return (
    <section className={styles.section} aria-labelledby="scenario-quiz-title">
      <div className={styles.heading}>
        <span className={styles.eyebrow}>BELAJAR LEWAT PILIHAN</span>
        <h2 id="scenario-quiz-title">Kamu akan melakukan apa?</h2>
        <p>Hadapi situasi yang mungkin kamu temui saat berkunjung ke kawasan Subak. Pilih tindakanmu, lalu pelajari alasannya.</p>
      </div>

      <div className={styles.quizCard}>
        {!finished ? (
          <>
            <div className={styles.topline}>
              <span className={styles.place}>{scenario.place}</span>
              <span className={styles.counter}>Skenario {current + 1} dari {SCENARIOS.length}</span>
            </div>
            <div className={styles.progressTrack} aria-label={`Progres kuis ${Math.round(progress)} persen`}>
              <span style={{ width: `${progress}%` }} />
            </div>
            <h3 className={styles.scenarioTitle}>{scenario.title}</h3>
            <p className={styles.situation}>{scenario.situation}</p>

            <div className={styles.options} role="group" aria-label="Pilih tindakan">
              {scenario.options.map((option) => {
                const isSelected = selected === option.id;
                const isCorrect = option.id === scenario.answer;
                const showResult = Boolean(selected);
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`${styles.option} ${showResult && isCorrect ? styles.correct : ''} ${isSelected && !isCorrect ? styles.incorrect : ''}`}
                    onClick={() => choose(option.id)}
                    disabled={Boolean(selected)}
                    aria-pressed={isSelected}
                  >
                    <span className={styles.optionLetter}>{option.id.toUpperCase()}</span>
                    <span>{option.label}</span>
                    {showResult && isCorrect && <span className={styles.optionMark}>✓</span>}
                    {isSelected && !isCorrect && <span className={styles.optionMark}>×</span>}
                  </button>
                );
              })}
            </div>

            {selected && (
              <div className={`${styles.feedback} ${selected === scenario.answer ? styles.feedbackGood : styles.feedbackLearn}`} role="status" aria-live="polite">
                <strong>{selected === scenario.answer ? 'Pilihan yang tepat!' : 'Ada hal yang perlu kamu perhatikan.'}</strong>
                <p>{scenario.feedback}</p>
                <small>Dasar etika: {scenario.source}</small>
              </div>
            )}

            {selected && (
              <button
                type="button"
                className={styles.nextButton}
                onClick={() => {
                  if (current === SCENARIOS.length - 1) setFinished(true);
                  else setCurrent((value) => value + 1);
                }}
              >
                {current === SCENARIOS.length - 1 ? 'Lihat hasil kuis' : 'Skenario berikutnya'} <span aria-hidden="true">→</span>
              </button>
            )}
          </>
        ) : (
          <div className={styles.result}>
            <span className={styles.resultKicker}>PERJALANANMU SELESAI</span>
            <div className={styles.score}>{score}<span>/{SCENARIOS.length}</span></div>
            <h3>{score === SCENARIOS.length ? 'Penjaga Subak yang hebat!' : score >= 3 ? 'Kamu semakin paham!' : 'Terus belajar menjadi Sahabat Subak!'}</h3>
            <p>Kamu telah menyelesaikan semua skenario. Setiap pilihan kecil dapat membantu menjaga ruang hidup petani, air, dan sawah Bali.</p>
            <button type="button" className={styles.nextButton} onClick={restart}>Ulangi kuis <span aria-hidden="true">↻</span></button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubakScenarioQuiz;
