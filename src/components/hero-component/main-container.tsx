import Button from './button';

function MainContainer() {
  return(
    <section id="main" className="flex flex-wrap sm:flex-nowrap justify-between bg-background-pattern bg-no-repeat bg-right-bottom bg-contain mt-20 bg-[#FCFBFA] lg:pl-20 sm:pl-10 pl-5 pr-5">
      <div className="flex flex-col w-full sm:max-w-[50%]">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-[50px] lg:leading-[90px] text-[#27272A] mt-5 sm:mt-10 lg:mt-28">
      Hey, I’m Nick
        </h1>

        <p className="text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 text-[#696969] mb-5 sm:mb-10 lg:mb-24">
      Frontend developer
        </p>

        <div className="flex flex-col items-start space-y-1 mb-5 sm:mb-10 lg:mb-16">
          <div className="w-8 h-1 bg-[#7E3AF2]"></div>
          <p className="text-base sm:text-lg lg:text-xl leading-5 sm:leading-7 lg:leading-8 text-[#696969] pt-3 sm:pt-4 lg:pt-6">
        Help you to create high-quality digital products that your clients will love and let your business thrive
          </p>
        </div>

        <Button name="Get in Touch" type={'Scroll'}/>
      </div>

      <div className="flex justify-end sm:max-w-[50%] w-full shrink-0 lg:pr-10">
        <img src="/RC-24-third-project/img/main-hero.png" className="w-[80%] sm:w-[80%] lg:w-[80%]" alt="Nick" />
      </div>
    </section>
  );
}

export default MainContainer;
