import styles from '../../styles/top/load.module.css';

export default function load() {
  return (
    <>
      <div id={styles.load}>
        <div id={styles.includeP}>
          <div id={styles.load_area}>
            <div className={styles.load_one}></div>
            <div className={styles.load_one}></div>
            <div className={styles.load_one}></div>
            <div className={styles.load_one}></div>
          </div>
          <p>読み込み中...</p>
        </div>
      </div>
    </>
  );
}
