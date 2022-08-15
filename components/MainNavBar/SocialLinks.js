import styles from './SocialLinks.module.scss';
export default function SocialLinks() {
    return (
        <section className={styles.socialLinks}>
            <ul>
                <li><a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
            </ul>
        </section>
    )
}