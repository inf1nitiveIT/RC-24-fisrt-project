import MainHero from './main-hero';
import MainInfo from './main-info';

function MainContainer() {
  return(
    <section className='flex bg-background-pattern bg-no-repeat bg-right bg-contain mt-[52px] relative h-[650px] bg-[#FCFBFA]'>
      <MainInfo />
      <MainHero />
    </section>
  );
}

export default MainContainer;
