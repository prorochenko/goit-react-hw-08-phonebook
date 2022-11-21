import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUsername } from 'redux/selectors';
import { Button, Text } from '@chakra-ui/react';
import css from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUsername);

  return (
    <div className={css.menu}>
      <Text fontSize="24px">Hello, {userName}!</Text>
      <Button
        colorScheme="yellow"
        variant="outline"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
