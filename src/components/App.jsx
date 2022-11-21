import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from './../components/pages/Contacts/Contacts.jsx';
import Home from './../components/pages/Home/Home';
import Login from './../components/pages/Login/Login';
import Register from './../components/pages/Register/Register';
import Header from './Header/Header';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Navigate to="Home" />} />
      </Routes>
    </>
  );
}
