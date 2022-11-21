import Image from 'next/image'
import styles from './articles.module.css'
import Link from 'next/link';
import nav from "../../public/nav-icon.png";
import lightbulb from "../../public/light-bulb.png";

export default function Articles() {
  return (
    <div className={styles.base}>
      <section className={styles.toolbar}>
        <Link className={styles.linkHome} href='/'>
          <Image className={styles.navigation} src={nav} alt="Navigation" height="26" />
        </Link>
        <div className={styles.title}><span>Articles</span></div>
        <div className={styles.subTitle}><span>Latest:</span></div>
      </section>
      <section className={styles.body}>
        <div className={styles.cover}>
          <div className={styles.lbFrame}>
            <Image className={styles.lb} src={lightbulb} alt="Lightbulb" />
          </div>
          <div className={styles.seperator} />
        </div>
        <div className={styles.contents}>
          <div className={styles.documentFrame}>
            <header className={styles.header}>
              <div className={styles.contentFrame}>
                <span className={styles.contentTitle}>Contents</span>
              </div>
            </header>
          </div>
        </div>
      </section>
    </div>
  )
}
