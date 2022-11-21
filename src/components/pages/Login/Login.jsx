import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';

export default function Login() {
  const dispatch = useDispatch();

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

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          type="email"
          name="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          title="Please check your email. We should use symbol '@' and '.'"
          required
        />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
