import MainHero from './main-hero';
import MainInfo from './main-info';

function MainContainer() {
  return(
    <section className='flex bg-hero-pattern bg-no-repeat bg-right'>
      <MainInfo />
      <MainHero />
    </section>
  );
}

export default MainContainer;
