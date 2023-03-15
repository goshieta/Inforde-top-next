import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Load from '../components/top/load.jsx';
import { useState } from 'react';

export default function Home() {
  const [displayMode, setDisplayMode] = useState(0);
  setTimeout(() => {
    setDisplayMode(1);
  }, 5000);
  return (
    <>
      <Head>
        <title>Inforde Top</title>
      </Head>
      <div style={{ display: displayMode == 0 ? 'block' : 'none' }}>
        <Load />
      </div>
      <h1 style={{ display: displayMode == 1 ? 'block' : 'none' }}>
        I'm a test man!
      </h1>
    </>
  );
}
