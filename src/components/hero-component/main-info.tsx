import Button from './button';

function MainInfo() {
  return(
    <div className='pl-[85px]'>
      <h1 className='text-[60px] font-bold leading-[90px] text-[#27272A] mt-[112px] '>Hey, I’m Nick</h1>
      <p className='text-[20px] leading-[30px] text-[#696969] mb-[92px]'>Frontend developer</p>

      <div className="relative">
        <div className="absolute top-0 left-0 w-8 h-1 bg-purple-500 "></div>
        <p className="text-[20px] leading-[30px] text-[#696969] pt-[24px] mb-[60px] ">
          Help you to create high-quality digital products that your clients will love and let your business thrive
        </p>
      </div>

      <Button />
    </div>
  );
}

export default MainInfo;
