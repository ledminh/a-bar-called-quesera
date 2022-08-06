import MainNavBar from '../components/MainNavBar';
import PageLayout from '../layouts/page';

import SecondNavBar from '../components/SecondNavBar';
import Intro from '../components/Intro';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
    <PageLayout>
      <MainNavBar/>
      <main className={styles.main}>
        <SecondNavBar />
        <Intro />
      </main>
    </PageLayout>
      
    </>    
  )
}
