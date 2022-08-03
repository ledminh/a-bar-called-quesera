import styles from './Header.module.scss';

export default function Header() {

    return (
        <header className={styles.wrapper}>
            <section className="logo">
                <div>LG</div>
            </section>
            <section className="title">
                <span>A BAR CALLED GEMMA</span>
            </section>
            <section className="social-link">
                <ul>
                    <li>In</li>
                    <li>Fb</li>
                </ul>
            </section>
        </header>
    )
}