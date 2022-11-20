import toast, { Toaster } from 'react-hot-toast';

import ContactList from '../../ContactList/ContactList';
import Section from '../../Section/Section';
import Filter from '../../Filter/Filter';
import css from '../../CommonStyle.module.scss';
import Form from '../../Form/Form';
import scss from '../../ContactList/ContactList.module.scss';

const notify = () =>
  toast.success('Good Job! 👏', {
    position: 'top-right',
  });

export function Contacts() {
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
