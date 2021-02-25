import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Coutdown } from "../components/Countdown";
import { ExpirenceBar } from "../components/ExpirenceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";


import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExpirenceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Coutdown />
        </div>
        
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
