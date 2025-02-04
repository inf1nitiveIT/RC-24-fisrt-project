import { Link } from 'react-router-dom';

function Logo () {
  return(
    <div className="pl-4 py-[15px] md:pl-10 lg:pl-[85px]">
      <Link to='/'>
        <img src="/RC-24-fisrt-project/img/logo.svg"/>
      </Link>
    </div>
  );
}

export default Logo;
