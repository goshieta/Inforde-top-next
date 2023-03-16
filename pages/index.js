import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Load from '../components/top/load.jsx';
import { useState } from 'react';

export default function Home() {
  const [displayMode, setDisplayMode] = useState(1);
  return (
    <>
      <Head>
        <title>Inforde Top</title>
      </Head>
      <div style={{ display: displayMode == 0 ? 'block' : 'none' }}>
        <Load />
      </div>
      {/*コンテンツ自体 */}
      <div id={styles.content}>
        <div id={styles.top}></div>
        <div id={styles.bottom}>
          <div id={styles.left}></div>
          <div id={styles.middle}></div>
          <div id={styles.right}></div>
        </div>
      </div>
    </>
  );
}
