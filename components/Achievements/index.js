import styles from './Achievements.module.scss';


import Image from 'next/image';
import medalImg from '../../imgs/medal-1.png';

import wineOnTableImg from '../../imgs/wine-on-table.jpg';
import { useState, useEffect } from 'react';


export default function Achievements() {
    const [data, setData] = useState({
        loaded: false
    });

    useEffect(() => {
        fetch('/api/achievements')
            .then(res => res.json())
            .then(data => setData({
                content: data.content,
                loaded: true
            }))
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.photoWrapper}>
                <div className={styles.photo}>
                    <Image 
                        src={wineOnTableImg}
                        alt="A table with a lot of wine bottles"
                        layout='fill'
                        objectFit='cover'
                        sizes='100vw'
                        objectPosition={'top right'}
                    />
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    <div className={styles.star}><i className="fa fa-solid fa-snowflake"></i></div>
                    <h1>TOYS &</h1>
                    <h1>FLAVOURS</h1>
                </div>
                <div className={styles.body}>
                    {
                        data.loaded?
                            data.content.map(p => <p key={p}>{p}</p>):
                            null
                    }
                </div>
                <div className={styles.awards}>
                    <div className={styles.medal}>
                        <Image 
                            src={medalImg}
                            alt="A medal award"
                            layout='fill'
                            objectFit='cover'
                            sizes='45vw'
                            objectPosition={'top right'}
                        />
                    </div>
                    <div className={styles.medal}>
                        <Image 
                            src={medalImg}
                            alt="A medal award"
                            layout='fill'
                            objectFit='cover'
                            sizes='45vw'
                            objectPosition={'top right'}
                        />
                    </div>
                    <div className={styles.medal}>
                        <Image 
                            src={medalImg}
                            alt="A medal award"
                            layout='fill'
                            objectFit='cover'
                            sizes='45vw'
                            objectPosition={'top right'}
                        />
                    </div>
                    <div className={styles.medal}>
                        <Image 
                            src={medalImg}
                            alt="A medal award"
                            layout='fill'
                            objectFit='cover'
                            sizes='45vw'
                            objectPosition={'top right'}
                        />
                    </div>
                    <div className={styles.medal}>
                        <Image 
                            src={medalImg}
                            alt="A medal award"
                            layout='fill'
                            objectFit='cover'
                            sizes='45vw'
                            objectPosition={'top right'}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}