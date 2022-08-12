import styles from './Footer.module.scss';

export default function Footer() {


    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.contact}>
                    <h3>Lets connect!</h3>
                    <ul>
                        <li>contact@abarcalledgemma.se</li>
                        <li>+46705845090</li>
                        <li>Grev Turegatan 30</li>
                        <li>114 38, Stockholm</li>
                    </ul>
                </div>
                <div className={styles.openHours}>
                    <h3>Opening hours</h3>
                    <div className={styles.content}>
                        <ul className={styles.day}>
                            <li>Mon to Sat</li>
                            <li>Sun</li>
                        </ul>
                        <ul className={styles.hour}>
                            <li>15:00 - 00:30</li>
                            <li>Closed</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.globeWrapper}>
                <div className={styles.globe}/>
            </div>
            <div className={styles.copyright}>
            Copyright © 2022 Helioworks Food & Beverages AB.
            </div>
        </div>
    );
}