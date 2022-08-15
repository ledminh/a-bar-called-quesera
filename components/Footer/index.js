import styles from './Footer.module.scss';
import {useState, useEffect} from 'react';

export default function Footer() {
    const [data, setData] = useState({
        loaded: false
    });

    useEffect(() => {
        fetch('/api/footer')
            .then(res => res.json())
            .then(data => setData({
                email: data.email,
                phone: data.phone,
                address: data.address,
                city: data.city,
                loaded: true
            }))
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.contact}>
                    <h3>Lets connect!</h3>
                    {
                        data.loaded? (
                            <ul>
                                <li>{data.email}</li>
                                <li>{data.phone}</li>
                                <li>{data.address}</li>
                                <li>{data.city}</li>
                            </ul>
                        ): null
                    }

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
            Copyright © {(new Date()).getFullYear()} Drinking Inc.
            </div>
        </div>
    );
}