import styles from './MenuBlock.module.scss';

export default function MenuBlock({data}) {


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{data.name}</h2>
            <ul>
                {
                    data.items.map(item => (
                        <div key={item.name}>
                            <div>{item.name}</div>
                            <div>{item.desc? item.desc: null}</div>
                            <div>{item.price}</div>
                        </div>
                    ))
                }
            </ul>
        </div>        
    );
}