import styles from './Achievements.module.scss';


import Image from 'next/image';
import medalImg from '../../imgs/medal-1.png';

import wineOnTableImg from '../../imgs/wine-on-table.jpg';


export default function Achievements() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.photoWrapper}>
                <div className={styles.photo}>
                    <Image 
                        src={wineOnTableImg}
                        alt="A glasss of wine on a table"
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
                    <p>We started with close to nothing but with an enormous chunk of passion, heart and soul. A dedication, a crystal clear vision and a decision to strive for nothing but the best. Our journey has only started, we will always develop for the better and have a freaking fun time while doing so.</p>
                    <p>Come join in on the ride - We&rsquo;ll have a blast together.</p>
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