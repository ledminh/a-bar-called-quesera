import styles from './Menu.module.scss';

const MenuNames = [
    'Home',
    'Menu',
    'Book a table',
    'Contact'
]

export default function Menu ({expanded}) {


    return (
        <ul 
            className={styles.wrapper}
            data-expanded={expanded}
            >
                {
                    MenuNames.map((name, i) => (
                        <li key={i} 
                            style={{'--i': i}}
                        >
                            <a>{name}</a>
                        </li>
                    ))
                }
            
        </ul>
    )
}