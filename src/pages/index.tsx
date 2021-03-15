import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';
import * as Tone from 'tone';
// import { Daily } from '../types/response/daily';

import fetcher from '../lib/fetcher';

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

const Home: NextPage = () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/weather', fetcher);

  return (
    <div>
      <Head>
        <title>Next + tone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {data?.daily.map((day) => (
            <li key={day.dt}>{day.dt}</li>
          ))}
        </ul>
        <MonoSynth note={400} dur="8n" />
        <MonoSynth note={412} dur="8n" />
        <MonoSynth note={424} dur="8n" />
        <MonoSynth note={436} dur="8n" />
        <MonoSynth note={448} dur="8n" />
        <MonoSynth note={460} dur="8n" />
      </main>
    </div>
  );
};

export default Home;
