import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExpirenceBar } from "../components/ExpirenceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";


import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExpirenceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
