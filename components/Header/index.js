import styles from './Header.module.scss';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

export default function Header() {

    return (
        <header className={styles.wrapper}>
            <Logo />
            <section className={styles.title}>
                <span>A BAR CALLED GEMMA</span>
            </section>
            <SocialLinks />
        </header>
    )
}