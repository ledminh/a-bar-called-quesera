import styles from './Logo.module.scss';

export default function Logo() {

    return (
        <section className={styles.logo}>
            <button>
                <i className="fa fa-regular fa-life-ring"></i>
            </button>
        </section>
    )
}