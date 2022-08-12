import styles from './Menu.module.scss';

const MenuNames = [
    {
        text: "Home",
        link: "/"
    },

    {
        text: "Menu",
        link: "/menu"
    },

    {
        text: "Book a table",
        link: "/book-a-table"
    },

    {
        text: "Contact",
        link: "/contact"
    }
]

export default function Menu ({expanded}) {


    return (
        <ul 
            className={styles.wrapper}
            data-expanded={expanded}
            >
                {
                    MenuNames.map((item, i) => (
                        <li key={i} 
                            style={{'--i': i}}
                        >
                            <a href={item.link}>{item.text}</a>
                        </li>
                    ))
                }
            
        </ul>
    )
}