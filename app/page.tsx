import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import hero from '../public/hero.png';

export default function Home() {
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
        <span className={styles.logo}>
          <Image src={hero} alt="Eubanks Desktop Image" height="320" />
        </span>
      </div>
    </>
  )
}
