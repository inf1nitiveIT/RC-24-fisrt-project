import { Link } from 'react-router-dom';

function Logo () {
  return(
    <div className="pl-[85px] py-[15px]">
      <Link to='/'>
        <img src="/public/img/Logo.svg"/>
      </Link>
    </div>
  );
}

export default Logo;
