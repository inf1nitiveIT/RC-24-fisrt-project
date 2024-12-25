type ButtonProps = {
  name: string;
}

function Button({name}: ButtonProps) {
  return(
    <button className="flex items-center justify-center px-4 py-2 bg-[#7E3AF2] text-white rounded-[50px] w-[188px] h-[50px]">
      <span className="text-base font-semibold  mr-3 ">{name}</span>
      <img src="/public/img/button-icon.svg" alt="Icon" className="w-[24px] h-[24px]" />

    </button>
  );
}

export default Button;
