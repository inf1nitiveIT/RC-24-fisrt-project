import Logo from './logo';
import MobileMenu from './mobile-menu';
import Navigation from './navigation';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-[#FCFBFA] flex justify-between items-center ">
        <Logo />
        <div className="hidden md:block">
          <Navigation />
        </div>
        <button
          className="block pr-5 md:hidden text-2xl"
          onClick={handleToggleMenu}
        >
          <img src='/RC-24-fisrt-project/img/header-menu-button.png'/>
        </button>
      </div>
      <hr className="border-t border-gray-300" />

      {/* Мобильное меню */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Header;
