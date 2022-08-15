import Image from 'next/image';

import margarityImg from '../imgs/margarita.jpg';
import menu2Img from '../imgs/menu-2.jpg';
import menu3Img from '../imgs/menu-3.jpg';

import styles from '../styles/Menu.module.scss';

import PageLayout from '../layouts/PageLayout';
import MenuBlock from '../components/MenuBlock';

import { useState, useEffect } from 'react';






export default function Menu() {
    const [data, setData] = useState({
        loaded: false
    });

    useEffect(() => {
        fetch('/api/menu')
            .then(res => res.json())
            .then(d => setData({
                ...d,
                loaded: true
            }))
    }, []);
    

    return (
        <PageLayout>
            {
                data.loaded? (
                    <>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <MenuBlock 
                                    data={data.menu1}
                                    />
                            </div>
                            <div className={styles.col + ' ' + styles.img}>
                                <div className={styles.photoWrapper}>
                                    <div className={styles.photo}>
                                        <Image 
                                            src={margarityImg}
                                            alt="A magarita"
                                            layout='fill'
                                            objectFit='cover'
                                            sizes='50vw'
                                            objectPosition={'top left'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col + ' ' + styles.img}>
                                <div className={styles.photoWrapper}>
                                    <div className={styles.photo}>
                                        <Image 
                                            src={menu2Img}
                                            alt="A cocktail drink"
                                            layout='fill'
                                            objectFit='cover'
                                            sizes='100vw'
                                            objectPosition={'top right'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <MenuBlock 
                                    data={data.menu2}
                                    />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <MenuBlock 
                                    data={data.menu3}
                                    />
                            </div>
                            <div className={styles.col + ' ' + styles.img}>
                                <div className={styles.photoWrapper}>
                                    <div className={styles.photo}>
                                        <Image 
                                            src={menu3Img}
                                            alt="A cocktail drink"
                                            layout='fill'
                                            objectFit='cover'
                                            sizes='100vw'
                                            objectPosition={'top left'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <MenuBlock 
                                    data={data.menu4}
                                    />
                            </div>
                            <div className={styles.col}>
                                <MenuBlock 
                                    data={data.menu5}
                                    />
                            </div>
                        </div>
                    </>
                ): null
            }
        </PageLayout>
    )
}