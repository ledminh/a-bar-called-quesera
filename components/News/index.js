import styles from './News.module.scss';
import { useEffect, useRef, useState } from 'react';




const POS_0 = 'NEWS/SLIDE_STATE/POS_0';
const POS_25 = 'NEWS/SLIDE_STATE/POS_25';
const POS_50 = 'NEWS/SLIDE_STATE/POS_50';
const POS_75 = 'NEWS/SLIDE_STATE/POS_75';

const posArr = [POS_0, POS_25, POS_50, POS_75];

const useTranslateClass = () => {
    const [slideState, setSlideState] = useState(POS_0);
    
    const [curI, setCurI] = useState(0);
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    
    let translateClass = '';

    if(slideState === POS_25) {
        translateClass = styles.translate25;
    }
    else if(slideState === POS_50) {
        translateClass = styles.translate50;
    }
    else if(slideState === POS_75) {
        translateClass = styles.translate75;
    }

    const newsListContentNode = useRef(null);
    

    const prevHandle = () => {    

        if(curI > 0) {
            setSlideState(posArr[curI - 1]);
            setCurI(curI - 1);
        }
    }

    const nextHandle = () => {
        const maxI  = Number(getComputedStyle(newsListContentNode.current).getPropertyValue('--max-i'));


        if(curI < maxI) {
            setSlideState(posArr[curI + 1]);
            setCurI(curI + 1);
        }
    }
    
    const setStartEnd = () => {
        setIsStart(false);
        setIsEnd(false);

        if(curI === 0) {
            setIsStart(true);
        }
        
        if(curI === Number(getComputedStyle(newsListContentNode.current).getPropertyValue('--max-i'))) {
            setIsEnd(true);
        }
    }
    
    useEffect(() => {
        setStartEnd();       

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curI]);

    const resizeHandle = () => {
        setCurI(0);
        setSlideState(POS_0);

        setStartEnd();
        
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandle);

        return () => window.removeEventListener("resize", resizeHandle);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [
        translateClass,
        prevHandle,
        nextHandle,
        newsListContentNode,
        isStart,
        isEnd
    ]
}

export default function News() {

    const [
        translateClass,
        prevHandle,
        nextHandle,
        newsListContentNode,
        isStart,
        isEnd
    ] = useTranslateClass();

    const [newsData, setNewsData] = useState({
        loaded: false
    });


    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => setNewsData({
                data: data,
                loaded: true
            }))
    }, []);
    return (
        <section className={styles.wrapper}>
            <div className={styles.title}>
                <span className={styles.text}>NEWS</span>
                <ul className={styles.pagiButtons}>
                    <li>
                        <button className={styles.btnPrev}
                            onClick={prevHandle}
                            disabled={isStart}
                            >
                                <i className="fa fa-solid fa-angle-down"></i>
                        </button>
                    </li>
                    <li>
                        <button className={styles.btnNext}
                            onClick={nextHandle}
                            disabled={isEnd}
                            >
                                <i className="fa fa-solid fa-angle-down"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.newsList}>
                <div className={styles.newsListContent + ' ' + translateClass}
                    ref={newsListContentNode}
                >
                    {
                        
                        newsData.loaded? 
                            newsData.data.map((nD, i) => (
                                <article key={i} className={styles.newsItem}>
                                    <h3 className={styles.newsTitle}>{nD.newsTitle}</h3>
                                    <h4 className={styles.newsSubtitle}>{nD.newsSubtitle}</h4>
                                    <p>
                                        {nD.newsContent}
                                    </p>
                                    <a href={nD.link}>{nD.linkText}</a>
                                </article>
                            )) : null
                    }
                </div>              
            </div>
        </section>
    )
}