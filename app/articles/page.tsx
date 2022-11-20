import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link';

export default function Articles() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Articles
        </h1>

        <p className={styles.description}>
          Go to the home <Link href="/">page</Link>
        </p>

        <p className={styles.description}>
          Go to the contact <Link href="/contact">page</Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
