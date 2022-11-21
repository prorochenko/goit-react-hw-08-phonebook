// import { useEffect, useState } from 'react';
// import { getIsLoadingAuth, getIsLoggedIn } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Input, Button, Box, Center } from '@chakra-ui/react';

// import css from './RegisterForm.module.css';

export default function Register() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoadingAuth);
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     resetForm('', '', '');
  //     navigate('/');
  //     return;
  //   }
  // }, [navigate, isLoggedIn]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
            Username
            <Input variant="flushed" type="text" name="name" />
          </label>
          <label>
            Email
            <Input variant="flushed" type="email" name="email" />
          </label>
          <label>
            Password
            <Input variant="flushed" type="password" name="password" />
          </label>
          <Center>
            <Button margin="10px" colorScheme="yellow" type="submit">
              Register
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
}
