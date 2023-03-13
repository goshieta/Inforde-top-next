import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Load from '../components/top/load.jsx';
import mainStyle from '../styles/top/style.css';

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
