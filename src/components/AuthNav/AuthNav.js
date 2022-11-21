import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <div>
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
