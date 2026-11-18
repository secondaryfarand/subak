import { Link } from 'react-router-dom';
import SubakScenarioQuiz from '../SubakScenarioQuiz';
import styles from './GreenActionQuizPage.module.css';

const GreenActionQuizPage = () => (
  <main className={styles.page}>
    <header className={`container ${styles.header}`}>
      <Link to="/green-action" className={styles.back}>← Kembali ke Kampanye</Link>
      <span className={styles.eyebrow}>BELAJAR LEWAT PILIHAN</span>
      <h1>Kamu akan melakukan apa?</h1>
      <p>
        Hadapi situasi yang mungkin kamu temui saat berkunjung ke kawasan Subak.
        Pilih tindakanmu, lalu pelajari alasan di balik setiap pilihan.
      </p>
    </header>
    <SubakScenarioQuiz />
  </main>
);

export default GreenActionQuizPage;
