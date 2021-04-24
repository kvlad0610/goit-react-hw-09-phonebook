/* eslint-disable react-hooks/exhaustive-deps */
// import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from '../../../reducer/contacts/api';
import { container } from './PhonebookPage.module.css';
import Modal from '../Modal/Modal';
// import { useSelector } from 'react-redux';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  // const authSelector = useSelector(state => state.user.token);

  return (
    <>
      <div className={container}>
        <div>
          <h1>Phonebook</h1>
          <Modal />
          {/* <ContactForm /> */}
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default Phonebook;
