import Image from 'next/image';
import styles from './Intro.module.scss';

import glassOfWineImg from '../../imgs/glass-of-wine.png';
import womanDrinkWineImg from '../../imgs/woman-drink-wine.jpg';
import { useEffect, useState } from 'react';

export default function Intro () {
    const [data, setData] = useState({
        loaded: false
    });

    useEffect(()=> {
        fetch('/api/intro')
            .then(res => res.json())
            .then(data => setData({
                subtitle: data.subtitle,
                content: data.content,
                loaded: true
            }))
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className={styles.article}>
                {
                    data.loaded? (
                        <>
                            <div className={styles.titleWrapper}>
                                <div className={styles.title}>
                                    <h6>A BAR CALLED</h6>
                                    <h1>Quesera</h1>
                                </div>
                            </div>
                            <div className={styles.subtitle}>
                                <h3>{data.subtitle}</h3>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.glassOfWineImg}>
                                    <Image 
                                        src={glassOfWineImg}
                                        alt="Glass of Wine"
                                        
                                    />
                                </div>
                                <p>{data.content}</p>
                            </div>
                        </>
                    ): null


                }
               
            </div>
            <div className={styles.photoWrapper}>
                <div className={styles.photo}>
                    <Image 
                        src={womanDrinkWineImg}
                        alt="A woman drinking wine"
                        layout='fill'
                        objectFit='cover'
                        sizes='45vw'
                        objectPosition={'top right'}
                    />
                </div>
            </div>
        </section>

        
    )
}