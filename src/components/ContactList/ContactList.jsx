import PropTypes from 'prop-types';
import css from './ContactList.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { fetchContacts, deleteContact } from 'redux/operations.js';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContactReducer = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(filterValue);
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul className={css.list}>
      {filterContacts.length === 0 ? (
        <div className={css.list__box}>
          <p className={css.list__text}>Phonebook is empty.</p>
        </div>
      ) : (
        filterContacts.map(({ id, name, number }) => (
          <li key={id} className={css.list__item}>
            <div className={css.list__box}>
              <p className={css.list__text}>
                {name}: {number}
              </p>
              <Button
                size="xs"
                colorScheme="yellow"
                // className={css.list__btn}
                onClick={() => {
                  deleteContactReducer(id);
                }}
              >
                Delete
              </Button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.array,
};
export default ContactList;
