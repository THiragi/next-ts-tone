import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import * as Tone from 'tone';

type SynthProps = {
  note: Tone.Unit.Frequency;
  dur: Tone.Unit.Time;
};

const MonoSynth: React.FC<SynthProps> = ({ note, dur }) => {
  const handleSynth = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, dur);
  };

  return (
    <button type="button" onClick={handleSynth}>
      {note}
    </button>
  );
};

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Next + tone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <MonoSynth note="C4" dur="8n" />
      <MonoSynth note="D4" dur="8n" />
      <MonoSynth note="E4" dur="8n" />
      <MonoSynth note="F4" dur="8n" />
      <MonoSynth note="G4" dur="8n" />
      <MonoSynth note="A4" dur="8n" />
      <MonoSynth note="B4" dur="8n" />
    </main>
  </div>
);

export default Home;
