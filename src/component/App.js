import React from 'react';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList ';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

// import React, { useEffect, useState } from 'react';
// import Container from './Container/Container';
// import shortid from 'shortid';

// //====================================
// import ContactList from './ContactList/ContactList ';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     return (
//       JSON.parse(window.localStorage.getItem('contacts')) ?? [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ]
//     );
//   });

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const [filter, setFilter] = useState('');

//   const addContact = ({ name, number }) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     const objectContacts = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase(),
//     );
//     if (objectContacts) {
//       alert(`${name} is already in contacts`);
//     } else {
//       setContacts([contact, ...contacts]);
//     }
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//   };
//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };
//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
//   };

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
//     </Container>
//   );
// }
