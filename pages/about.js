import styles from '../styles/Home.module.css'
import Head from 'next/head'

const about = () => {

  return (
    <>
      <Head>
        <title>NEXT JS ABOUT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.text2}>
        <h3> About Us</h3>
      </div>


      <div className={styles.text}>
        <p className={styles.text3}>
          It's ideal for you if you have zero to little knowledge of Next.js, you have used React in the past, <br /> and you are looking forward diving more into the React ecosystem, in particular server-side rendering. <br />

          I find Next.js an awesome tool to create Web Applications, and at the end of this post I hope you'll be <br /> as excited about it as I am. And I hope it will help you learn Next.js!
        </p>
      </div>
    </>
  )
}

export default about;