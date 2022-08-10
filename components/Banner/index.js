import styles from './Banner.module.scss';

export default function Banner() {


    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.text}>When you don’t mind the rain, have pancakes in bed or champagne on a Monday?</div>
                <div className={styles.bullet}><i className="fa fa-solid fa-star" /></div>
                <div className={styles.text}>When you don’t mind the rain, have pancakes in bed or champagne on a Monday?</div>
            </div>

        </div>
    );
}