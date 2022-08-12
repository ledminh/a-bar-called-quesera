import { Helmet } from "react-helmet"
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

import styles from './Page.module.scss';

export default function PageLayout({children}) {


    return (
        <>  
            <Helmet>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://kit.fontawesome.com/6a23bab7e7.js" crossOrigin="anonymous"></script>
            </Helmet>
            <MainNavBar/>
            <main className={styles.main}>
                {children}
                <Footer />
            </main>
        </>
    )

}