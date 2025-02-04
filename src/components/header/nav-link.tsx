import { Link } from 'react-scroll';

type NavLinkProps = {
  text: string;
  to: string;
}

const NavLink = ({ text, to }: NavLinkProps) => (
  <li>
    <Link to={to} smooth duration={500} className="text-[#696969] leading-6 font-semibold hover:text-[#7E3AF2] cursor-pointer">
      {text}
    </Link>
  </li>
);

export default NavLink;
