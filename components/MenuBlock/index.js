import styles from './MenuBlock.module.scss';

export default function MenuBlock({data}) {


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{data.name}</h2>
            <ul className={styles.menuList}>
                {
                    data.items.map(item => (
                        <li className={styles.item} key={item.name}>
                            <div className={styles.itemName}>{item.name}</div>
                            <div className={styles.itemPrice}>{item.price}</div>
                            <div className={styles.itemDesc}>{item.desc? item.desc: null}</div>
                        </li>
                    ))
                }
            </ul>
        </div>        
    );
}