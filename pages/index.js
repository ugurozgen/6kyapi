import Head from "next/head"
import styles from "../styles/Home.module.css"
import Gallery from "../components/gallery"
import { useState } from "react"

const gallery = require("../public/gallery.json")

export default function Home() {
  let [selected, setSelected] = useState("Alçıpan")
  
  let handleGallery = (name) => {
    setSelected(name)

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>6kyapi</title>
        <link rel="icon" href="/logo/transparent_b2G_icon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>6k Yapı</h1>

        <p />

        <Gallery section={selected}/>

        <div className={styles.grid}>
          {gallery.map((section) => {
            let hover = section.name === selected ? styles.hover : ""
            return (
              <h3 onClick={() => handleGallery(section.name)} className={styles.card + " " + hover}>
                {section.name}
              </h3>
            )
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
