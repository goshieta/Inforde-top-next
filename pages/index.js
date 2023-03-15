import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Load from '../components/top/load.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inforde Top</title>
      </Head>
      <Load />
    </>
  );
}
