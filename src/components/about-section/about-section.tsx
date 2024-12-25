import Button from '../hero-component/button';
import InterestsSection from './interests-section';
import { interestsInfo, educationInfo } from '../../utils/const';

function AboutSection() {
  return(
    <section className='bg-[#FCFBFA] pl-[85px] mb-[100px]'>
      <h1 className='mt-[100px] text-[32px] leading-[48px] font-bold  text-[#27272A] mb-[80px]'>About me</h1>
      <div className="flex flex-wrap">
        <div className="w-[412px] h-[412px] bg-about-background-pattern flex items-center justify-center mr-[158px]">
          <img className='' src="/public/img/about-hero-picture.png"></img>
        </div>
        <div className="flex flex-col items-start justify-center space-y-1 ">
          <div className="w-8 h-1 bg-[#7E3AF2]"></div>
          <p className="text-[20px] leading-[30px] text-[#696969] pt-[24px] pb-[64px] w-[537px]">
            <strong className='text-black'>Nick Richardson</strong> - specialist in Frontend development. Clear code is my passion. Solving issues through negotiations
          </p>
          <Button name={'Get in Touch'}/>
        </div>

      </div>
      <div className='flex flex-wrap mt-[80px] gap-[217px]'>
        <InterestsSection data={interestsInfo} title={'Interests'}/>
        <InterestsSection data={educationInfo} title={'Education & Experience'}/>
      </div>
    </section>
  );
}

export default AboutSection;
