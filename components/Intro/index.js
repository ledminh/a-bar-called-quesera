import styles from './Intro.module.scss';

export default function Intro () {


    return (
        <section className={styles.wrapper}>
            <div className={styles.article}>
                <div className={styles.title}>
                    <h6>A BAR CALLED</h6>
                    <h1>GEMMA</h1>
                </div>
                <div className={styles.subtitle}>
                    <h3>Your neighborhood bar</h3>
                </div>
                <div className={styles.text}>
                    <p>You know that feeling you get when you’re high on life?  The very same feeling that used to occur when you had birthdays as a child? When you are madly in love? When you don’t mind the rain, have pancakes in bed or champagne on a Monday? That very feeling was blasting through the windows of this very place like ray of fuckin’ sunshine, the 3rd of March 2019.</p>
                </div>
            </div>
            <div className={styles.photo}>
            </div>
        </section>

        
    )
}