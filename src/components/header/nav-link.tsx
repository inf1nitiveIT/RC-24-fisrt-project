import { Link } from 'react-router-dom';

interface NavLinkProps {
  text: string;
  to: string;
}

const NavLink = ({ text, to }: NavLinkProps) => (
  <li>
    <Link to={to} className="text-[#696969] text-[16px] leading-[24px] font-semibold hover:text-[#7E3AF2]">
      {text}
    </Link>
  </li>
);

export default NavLink;
