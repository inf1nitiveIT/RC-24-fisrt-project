import AboutSection from '../../components/about-section/about-section';
import FormSection from '../../components/form-section/form-section';
import Header from '../../components/header/header';
import MainContainer from '../../components/hero-component/main-container';

function MainPage() {
  return(
    <>
      <Header />
      <MainContainer />
      <AboutSection />
      <FormSection />
    </>
  );
}

export default MainPage;
