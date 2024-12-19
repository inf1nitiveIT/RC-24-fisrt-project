import Logo from './logo';
import Navigation from './navigation';

function Header() {
  return(
    <div className='bg-[#FCFBFA] flex justify-between' >
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
