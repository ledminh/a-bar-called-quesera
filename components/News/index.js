import styles from './News.module.scss';

export default function News() {


    return (
        <section className={styles.wrapper}>
            <div className={styles.title}>
                <span className={styles.text}>NEWS</span>
                <ul className={styles.pagiButtons}>
                    <li><button className={styles.btnPrev}><i className="fa fa-solid fa-angle-down"></i></button></li>
                    <li><button className={styles.btnNext}><i className="fa fa-solid fa-angle-down"></i></button></li>
                </ul>
            </div>
            <div className={styles.newsList}>
                <article className={styles.newsItem}>
                    <h3 className={styles.newsTitle}>New menu released</h3>
                    <h3 className={styles.newsSubtitle}>ABCG VOL.4 LIVE</h3>
                    <p>
                        After many many weeks of research, hours of developing and constant bashing heads to the walls we finally got ready to release our new menu. We&rsquo;re super proud and can`&rsquo;`t wait for you to try it out. Come get some!.
                    </p>
                    <a href="https://www.google.com">Our new menu</a>
                </article>
                <article className={styles.newsItem}>
                    <h3 className={styles.newsTitle}>New menu released</h3>
                    <h3 className={styles.newsSubtitle}>ABCG VOL.4 LIVE</h3>
                    <p>
                        After many many weeks of research, hours of developing and constant bashing heads to the walls we finally got ready to release our new menu. We&rsquo;re super proud and can&rsquo;t wait for you to try it out. Come get some!.
                    </p>
                    <a href="https://www.google.com">Our new menu</a>
                </article>
                <article className={styles.newsItem}>
                    <h3 className={styles.newsTitle}>New menu released</h3>
                    <h3 className={styles.newsSubtitle}>ABCG VOL.4 LIVE</h3>
                    <p>
                        After many many weeks of research, hours of developing and constant bashing heads to the walls we finally got ready to release our new menu. We&rsquo;re super proud and can&rsquo;t wait for you to try it out. Come get some!.
                    </p>
                    <a href="https://www.google.com">Our new menu</a>
                </article>
                <article className={styles.newsItem}>
                    <h3 className={styles.newsTitle}>New menu released</h3>
                    <h3 className={styles.newsSubtitle}>ABCG VOL.4 LIVE</h3>
                    <p>
                        After many many weeks of research, hours of developing and constant bashing heads to the walls we finally got ready to release our new menu. We&rsquo;re super proud and can&rsquo;t wait for you to try it out. Come get some!.
                    </p>
                    <a href="https://www.google.com">Our new menu</a>
                </article>

            </div>
        </section>
    )
}