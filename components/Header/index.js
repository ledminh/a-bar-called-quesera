import styles from './Header.module.scss';

export default function Header() {

    return (
        <header className={styles.wrapper}>
            <section className={styles.logo}>
                <button>
                    <i className="fa fa-regular fa-life-ring"></i>
                </button>
            </section>
            <section className={styles.title}>
                <span>A BAR CALLED GEMMA</span>
            </section>
            <section className={styles.socialLinks}>
                <ul>
                    <li><a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                </ul>
            </section>
        </header>
    )
}