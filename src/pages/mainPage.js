

import Header from '../components/header/header';
import HeroSection from '../sections/hero/hero';
import About from '../sections/about/about';
import ProgramSec from '../sections/program/program';
import Trainer from '../sections/trainer/trainer';
import FeesStructure from '../sections/feesStructure/feesStructure';
import Footer from '../sections/footer/footer';

function MainPage() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <About/>
      <ProgramSec/>
      <Trainer/>
      <FeesStructure/>
      <Footer/>
    </main>
  );
}

export default MainPage;
