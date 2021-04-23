import {
  item,
  list,
  button,
  spinner,
  contacts_container,
  contact_name,
  contact_number,
} from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsSelector,
  filterSelector,
  isLoadingSelector,
} from '../../../reducer/contacts/selector';
import { deleteContact } from '../../../reducer/contacts/api';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularIndeterminate from '../Spinner/Spinner';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(isLoadingSelector);

  function deleteCont(contactId) {
    return dispatch(deleteContact(contactId));
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={contacts_container}>
      {isLoading ? (
        <div className={spinner}>
          <CircularIndeterminate />
        </div>
      ) : (
        <ul className={list}>
          {visibleContacts.map(({ id, name, number }) => (
            <li className={item} key={id}>
              <div>
                {' '}
                <spam className={contact_name}>{name}</spam>:
                <spam className={contact_number}>{number}</spam>{' '}
              </div>
              <IconButton
                className={button}
                aria-label="delete"
                onClick={() => deleteCont(id)}
              >
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
