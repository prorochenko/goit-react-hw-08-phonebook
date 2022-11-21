import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Input, Button, Box, Center } from '@chakra-ui/react';

export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
      return;
    }
  }, [navigate, isLoggedIn]);

  return (
    <Center padding="30px">
      <Box w="300px">
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Email
            <Input
              variant="flushed"
              type="email"
              name="email"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              title="Please check your email. We should use symbol '@' and '.'"
              required
            />
          </label>
          <label>
            Password
            <Input variant="flushed" type="password" name="password" required />
          </label>
          <Center>
            <Button margin="10px" colorScheme="yellow" type="submit">
              Log In
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
}
