import { NextPage } from 'next';
import Head from 'next/head';

import * as Tone from 'tone';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const handleSynth = () => {
    const osc = new Tone.Oscillator().toDestination();
    osc.frequency.value = 'C4';
    osc.frequency.rampTo('C7', 2);
    osc.start().stop('+3');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next + tone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button type="button" onClick={handleSynth}>
          play synth
        </button>
      </main>
    </div>
  );
};

export default Home;
