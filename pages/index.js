import MainNavBar from '../components/MainNavBar';
import PageLayout from '../layouts/page';

import SecondNavBar from '../components/SecondNavBar';
import Intro from '../components/Intro';
import News from '../components/News';

import styles from '../styles/Home.module.scss';
import Banner from '../components/Banner';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <PageLayout>
      <MainNavBar/>
      <main className={styles.main}>
        <SecondNavBar />
        <Intro />
        <News />
        <Banner />
        <Achievements />
        <Footer />
      </main>
    </PageLayout>
      
    </>    
  )
}
