import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import Layout from "../Components/Layout";
import localFont from '@next/font/local'

const openSansExtraBold = localFont({ src: '../asset/OpenSans/OpenSans-ExtraBoldItalic.ttf' })
const openSansBoldItalic = localFont({ src: '../asset/OpenSans/OpenSans-BoldItalic.ttf' })




export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog page</title>
      </Head>
      <Layout>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h1 className={openSansExtraBold.className}> Blog post 1 </h1>
            <p className={styles.paragraf}>
              Lorem ipsum sit amet, consectetur adipiscing elit, sed do
            </p>
            <Link className={styles.button}
              href={{
                pathname: "Read",
                query: { id: "1" }
              }}
            >
              Read Now
            </Link>
          </div>
          <div className={styles.box}>
            <h1 className={openSansBoldItalic.className}> Blog post 2 </h1>
            <p className={styles.paragraf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <Link className={styles.button}
              href={{
                pathname: "Read",
                query: { id: "2" }
              }}
            >
              Read Now
            </Link>
          </div>
          <div className={styles.box}>
            <h1 className={openSansExtraBold.className}> Blog post 3 </h1>
            <p className={styles.paragraf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <Link className={styles.button}
              href={{
                pathname: "Read",
                query: { id: "3" }
              }}
            >
              Read Now
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
