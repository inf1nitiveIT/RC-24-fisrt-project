import { Link } from 'react-scroll';

type ButtonProps = {
  name: string;
  type: string;
}

function Button({name, type}: ButtonProps) {
  const button = (
    <button className="flex items-center justify-center px-4 py-2 bg-[#7E3AF2] text-white rounded-[50px] w-[188px] h-[50px]
  hover:bg-[#6c2bd9] active:scale-95 active:bg-[#5a23c8] active:border-[#9a71f5] border-2 border-transparent transition transform duration-150"
    >
      <span className="text-base font-semibold mr-3">{name}</span>
      <img src="/img/button-icon.svg" alt="Icon" className="w-6 h-6" />
    </button>
  );

  { return type === 'Scroll' ? (
    (
      <Link to={'get in touch'} smooth duration={500}>
        {button}
      </Link>
    )
  ) : ((
    button
  )
  );}
}

export default Button;
