import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>NEXT JS HOME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <a href="https://www.freecodecamp.org/news/the-next-js-handbook/" >
          <Image className={styles.img1} src="/nextimg.png" height={290} width={900} />
        </a>

      </main>
    </div>
  )
}
