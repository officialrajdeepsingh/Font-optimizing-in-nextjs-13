/* 
Add css help of Head  Component on Specific web page 
*/

// import head component
import Head from "next/head";
//  import css
import styles from "../styles/Home.module.css";
//  import custom layout component
import Layout from "../Components/Layout";

import { Ubuntu,Island_Moments} from '@next/font/google'

// Island+Moments

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter()

// const ubuntu = Ubuntu({ subsets: ['latin'] })

const ubuntu = Ubuntu({
  weight: '400',
})

const IslandMoments=Island_Moments({weight:'400',subsets:['latin']})


export default function Home() {
  return (
      <Layout>
        <div className={styles.grid}>
          <h1 className={ubuntu.className}> Home page </h1>
          <p className={IslandMoments.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Layout>
  );
}
