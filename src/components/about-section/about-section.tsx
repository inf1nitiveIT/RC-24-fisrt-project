import Button from '../hero-component/button';
import InterestsSection from './interests-section';
import { interestsInfo, educationInfo } from '../../utils/const';

function AboutSection() {
  return (
    <section id="about" className="relative bg-[#FCFBFA] px-4 md:px-8 lg:pl-[85px] mb-[100px] flex flex-col">
      <h1 className="mt-[50px] md:mt-20 lg:mt-[100px] md:text-[28px] lg:text-[32px] leading-8 md:leading-10 lg:leading-[48px] font-bold text-[#27272A] mb-10 md:mb-15 lg:mb-20">
        About me
      </h1>

      {/* Grid для изображения и текста */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-y-8 lg:gap-y-0 lg:gap-x-[158px] items-center">
        {/* Левая секция с изображением */}
        <div className="flex items-center justify-center bg-about-background-pattern bg-cover
          w-[290px] h-[290px] lg:w-[412px] lg:h-[412px] mx-auto lg:mx-0"
        >
          <img
            className="w-[256px] h-[256px] lg:w-[364px] lg:h-[364px] object-cover"
            src="/RC-24-fisrt-project/img/about-hero-picture.png"
            alt="Hero"
          />
        </div>

        {/* Правая секция с описанием */}
        <div className="flex flex-col items-start">
          <div className="w-8 h-1 bg-[#7E3AF2]"></div>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-7 lg:leading-[30px] text-[#696969] pt-4 md:pt-6 pb-10 md:pb-12 lg:pb-16 w-full lg:w-[537px]">
            <strong className="text-black">Nick Richardson</strong> - specialist in Frontend
            development. Clear code is my passion. Solving issues through negotiations.
          </p>

          {/* Кнопка для больших экранов */}
          <div className="hidden lg:block">
            <Button name={'Get in Touch'} type={'Scroll'}/>
          </div>
        </div>
      </div>

      {/* Секция Interests и Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-[50px] lg:gap-x-[265px] mt-10 md:mt-15 lg:mt-20">
        <InterestsSection data={interestsInfo} title={'Interests'} />
        <InterestsSection data={educationInfo} title={'Education & Experience'} />
      </div>

      {/* Кнопка для мобильных устройств */}
      <div className="block lg:hidden mt-12">
        <Button name={'Get in Touch'} type={'Scroll'} />
      </div>
    </section>
  );
}

export default AboutSection;
