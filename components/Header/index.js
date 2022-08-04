import styles from './Header.module.scss';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import Title from './Title';

export default function Header() {

    return (
        <header className={styles.wrapper}>
            <Logo />
            <Title />
            <SocialLinks />
        </header>
    )
}