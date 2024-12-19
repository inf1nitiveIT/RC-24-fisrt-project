import NavLink from './nav-link';
import { links } from '../../utils/const';

const Navigation = () => (
  <nav>
    <ul className="flex items-center space-x-6 pr-[85px] h-[63px]">
      {links.map((link) => (
        <NavLink key={link.id} text={link.text} to={link.to} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
