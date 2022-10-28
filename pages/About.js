
import styles from "../styles/About.module.css";
import Layout from "../Components/Layout";
import { Freehand } from '@next/font/google'

const freehand = Freehand({
  weight: '400',
  subsets:["latin"]
})


export default function About() {
  return (
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.grid}>
              <h1 className={styles.title}> About page </h1>
              <p className={freehand.className}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </main>
        </div>
      </Layout>
  );
}
