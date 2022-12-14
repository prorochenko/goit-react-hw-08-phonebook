import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { Box, Button, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import css from './Header.module.scss';
import { BsChevronRight } from 'react-icons/bs';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Box bg="whote" w="100%" p={4} borderBottom="1px" borderRadius="10px">
        <header className={css.header}>
          <Breadcrumb spacing="8px" separator={<BsChevronRight />}>
            <BreadcrumbItem>
              <Button colorScheme="yellow">
                <Link to="/home">Home</Link>
              </Button>
            </BreadcrumbItem>
            {isLoggedIn && (
              <BreadcrumbItem isCurrentPage>
                <Button colorScheme="yellow">
                  <Link to="contacts">Contacts</Link>
                </Button>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
