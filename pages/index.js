import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>6kyapi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>6k Yapı</h1>

        <p />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3> İletişim: </h3>
            <p>Emre Döğer - 0544 414 2814</p>
            <p>Erullah Döğer - 0541 396 1160</p>
          </div>
        </div>
      </main>
    </div>
  );
}
