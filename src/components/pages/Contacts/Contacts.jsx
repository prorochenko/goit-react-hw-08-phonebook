import toast, { Toaster } from 'react-hot-toast';

import ContactList from '../../ContactList/ContactList';
import Section from '../../Section/Section';
import Filter from '../../Filter/Filter';
import css from '../../CommonStyle.module.scss';
import Form from '../../Form/Form';
import scss from '../../ContactList/ContactList.module.scss';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const notify = () =>
  toast.success('Good Job! 👏', {
    position: 'top-right',
  });

export function Contacts() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
  }, [navigate, isLoggedIn]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <button className={scss.list__btn} type="button" onClick={notify}>
        press me
      </button>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
