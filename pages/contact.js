import PageLayout from '../layouts/Page';
import styles from '../styles/Contact.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import contactImg from '../imgs/contact.jpg'

export default function Contact () {

    return (
        <PageLayout>
            <div className={styles.wrapper}>
                <div className={styles.col + ' ' + styles.text}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Contact</h2>
                        <p>If you want to come in contact with us regarding specific matters please don’t hesitate to write a email to us, reach out on Instagram or give us a call.</p>

                        <ul>
                            <li><a href="mailto:contact@abarcalledgemma.se">contact@abarcalledgemma.se</a></li>
                            <li>+46705845090</li>
                            <li><a href="https://map.google.com">Grev Turegatan 30</a>, 114 38, Stockholm</li>
                        </ul>

                        <p><a href="https://www.instagram.com">@abarcalledgemma</a></p>
                        <p>Use our form if you want to make a reservation.</p>
                        <Link href="/book-a-table"><span className={styles.bookATable}>Book a table</span></Link>
                    </div>
                </div>
                <div className={styles.col + ' '  + styles.img}>
                    <div className={styles.photoWrapper}>
                        <div className={styles.photo}>
                                <Image 
                                    src={contactImg}
                                    alt="In front of the restaurant"
                                    layout='fill'
                                    objectFit='cover'
                                    sizes='100vw'
                                    objectPosition={'top right'}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}