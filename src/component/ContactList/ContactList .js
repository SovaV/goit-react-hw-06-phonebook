import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/contacts/add-actions';
import { getVisibleContacts } from '../redux/contacts/selector';
import c from './ContactList.module.css';
import ContactsEl from '../ContactElement/ContactElement';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul className={c.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={c.item}>
          <ContactsEl name={name} number={number} onDeleteContact={() => onDeleteContact(id)} />
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

// import PropTypes from 'prop-types';
// import c from './ContactList.module.css';
// import ContactsEl from '../ContactElement/ContactElement';

// const Contacts = ({ contacts, onDeleteContact }) => (
//   <ul className={c.list}>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id} className={c.item}>
//         <ContactsEl name={name} number={number} onDeleteContact={() => onDeleteContact(id)} />
//       </li>
//     ))}
//   </ul>
// );
// Contacts.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };

// export default Contacts;
