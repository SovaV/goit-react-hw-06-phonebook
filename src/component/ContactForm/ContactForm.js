import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/contacts/add-actions';
import p from './ContactForm.module.css';
import { getContacts } from '../redux/contacts/selector';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const hendleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const repeatContacts = name => {
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  };
  const repeatNumber = number => {
    return contacts.some(contact => contact.number === number);
  };
  const hendleSubmit = e => {
    e.preventDefault();
    reset();

    if (repeatContacts(name)) {
      alert(`${name} is already in contacts`);
    } else if (repeatNumber(number)) {
      alert(`${number} is already in contacts`);
    } else {
      dispatch(actions.addContact(name, number));
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={p.box} onSubmit={hendleSubmit}>
      <label className={p.wrapp}>
        <p>Name</p>
        <input
          value={name}
          onChange={hendleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={p.wrapp}>
        <p>Number</p>
        <input
          value={number}
          onChange={hendleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <br />
      <button className={p.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// import React, { useState } from 'react';
// import p from './ContactForm.module.css';

// export default function ContactForm({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const hendleChange = e => {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };
//   const hendleSubmit = e => {
//     e.preventDefault();
//     onSubmit({ name, number });
//     reset();
//   };
//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={p.box} onSubmit={hendleSubmit}>
//       <label className={p.wrapp}>
//         <p>Name</p>
//         <input
//           value={name}
//           onChange={hendleChange}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </label>
//       <label className={p.wrapp}>
//         <p>Number</p>
//         <input
//           value={number}
//           onChange={hendleChange}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//         />
//       </label>
//       <br />
//       <button className={p.btn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
