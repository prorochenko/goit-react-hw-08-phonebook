import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header>
        Welcome to our home page!
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
