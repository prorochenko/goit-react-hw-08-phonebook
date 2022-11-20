import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from './../components/pages/Contacts/Contacts.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="contacts" />} />
      </Routes>
    </>
  );
}
