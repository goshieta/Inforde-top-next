import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Load from '../components/top/load.jsx';
import { useEffect, useState } from 'react';

export default function Home() {
  const [displayMode, setDisplayMode] = useState(1);
  //apiにリクエストを送り情報を受け取る
  const [info,setInfo]=useState({})
  useEffect(()=>{
    const fetchInfo=async()=>{
      const res=await fetch('/api/info')
      const data=await res.json()
      setInfo(data)
    }
    fetchInfo()
  })
  return (
    <>
      <Head>
        <title>Inforde Top</title>
      </Head>
      <div style={{ display: displayMode == 0 ? 'block' : 'none' }}>
        <Load />
      </div>
      <p>{info.copyright}</p>
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
