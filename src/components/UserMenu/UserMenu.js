import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Hello, UserName!
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
