import styles from './SecondNavBar.module.scss';

const Links = [
    {
        text: 'Book',
        link: '/book-a-table'
    },
    {
        text: 'Menu',
        link: '/menu'
    },
    {
        text: 'Contact',
        link: '/contact'
    }

]

export default function SecondNavBar() {


    return (
        <nav className={styles.wrapper}>
            <ul>
                {
                    Links.map((l,i) => (
                        <li key={i}>
                            <a href={l.link}>{l.text}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}