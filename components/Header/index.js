import styles from './Header.module.scss';

export default function Header() {

    return (
        <header className={styles.wrapper}>
            <section className={styles.logo}>
                <div>LG</div>
            </section>
            <section className={styles.title}>
                <span>A BAR CALLED GEMMA</span>
            </section>
            <section className={styles.socialLinks}>
                <ul>
                    <li>In</li>
                    <li>Fb</li>
                </ul>
            </section>
        </header>
    )
}