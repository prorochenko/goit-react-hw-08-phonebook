import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUsername } from 'redux/selectors';
import { Button } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUsername);

  return (
    <div>
      <p>
        Hello, {userName}!
        <Button
          colorScheme="yellow"
          variant="outline"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </p>
    </div>
  );
};

export default UserMenu;
