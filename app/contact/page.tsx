import Image from 'next/image'
import styles from './contact.module.css'
import Link from 'next/link';

export default function Articles() {
  return (
    <>
      <div className={styles.document}>
        <div className={styles.navigation}>
          <header className={styles.header}>Navigation</header>
          <Link className={styles.link} href='/articles'>articles</Link>
          <Link className={styles.link} href='/contact'>contact</Link>
        </div>
      </div>
      <div className={styles.fullScreen}>
      <div className={styles.email}>chad.d.eubanks@gmail.com</div>
      </div>
    </>
  )
}
