import PageLayout from '../layouts/page';

import SecondNavBar from '../components/SecondNavBar';
import Intro from '../components/Intro';
import News from '../components/News';

import Banner from '../components/Banner';
import Achievements from '../components/Achievements';

export default function Home() {
  return (    
    <PageLayout>
        <SecondNavBar />
        <Intro />
        <News />
        <Banner />
        <Achievements />
    </PageLayout>
  )
}
