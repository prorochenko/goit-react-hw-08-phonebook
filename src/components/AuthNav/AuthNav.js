import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import css from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <div className={css.btns}>
      <Button colorScheme="yellow">
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button colorScheme="yellow" variant="outline">
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </div>
  );
};

export default AuthNav;
