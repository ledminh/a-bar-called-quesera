import styles from './Banner.module.scss';
import { useState, useEffect } from 'react';

export default function Banner() {
    const [data, setData] = useState({
        loaded: false
    });

    useEffect(() => {
        fetch('/api/banner')
            .then(res => res.json())
            .then(data => setData({
                sentence: data.sentence,
                loaded: true
            }));
    }, []);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.text}>
                    {data.loaded? data.sentence: null}
                </div>
                <div className={styles.bullet}><i className="fa fa-solid fa-star" /></div>
                <div className={styles.text}>
                    {data.loaded? data.sentence: null}
                </div>
            </div>

        </div>
    );
}