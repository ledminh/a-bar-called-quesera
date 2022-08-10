import MainNavBar from '../components/MainNavBar';
import PageLayout from '../layouts/page';

import SecondNavBar from '../components/SecondNavBar';
import Intro from '../components/Intro';
import News from '../components/News';

import styles from '../styles/Home.module.scss';
import Banner from '../components/Banner';

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
      </main>
    </PageLayout>
      
    </>    
  )
}
