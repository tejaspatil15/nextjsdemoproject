import styles from '../styles/Home.module.css'
import Navbar1 from '../comps/navbar1'
import Footer from '../comps/footer';
import Head from 'next/head'

const contact = () => {

  return (
    <>
      <Head>
        <title>NEXT JS CONTACT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar1 />
      <div className={styles.text2}>
        <h3> Contact Us</h3>
      </div>


      <div className={styles.text}>
        <p className={styles.text3}>
          Mobile No: 8767898765 <br />
          Mail ID: support@nextjs.com
        </p>
      </div>
      <Footer />
    </>
  )
}

export default contact;