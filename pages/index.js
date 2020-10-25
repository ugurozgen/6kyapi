import Head from "next/head"
import styles from "../styles/Home.module.css"
import Gallery from "../components/gallery"

const gallery = require("../public/images/gallery.json")

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>6kyapi</title>
        <link rel="icon" href="/logo/transparent_b2G_icon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>6k Yapı</h1>

        <p />
        <div className={styles.grid}>
          {gallery.map((section) => {
            return <h3 className={styles.card}>{section.name}</h3>
          })}
        </div>

        <div className={styles.grid}>
          <h3> İletişim: </h3>
          <p className={styles.card}>Emre Döğer - 0544 414 2814</p>
          <p className={styles.card}>Erullah Döğer - 0541 396 1160</p>
        </div>
      </main>
    </div>
  )
}
