import { useState } from "react";
import ContactAddNew from "../ContactAddNew";
import ContactSearchInput from "../ContactSearchInput";
import ContactsList from "../ContactsList";

import classes from "./PhoneBook.module.css";

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
}

export type INewContact = Omit<IContact, "id">;

const mockContacts = [
  {
    id: 1,
    firstName: "Eric",
    lastName: "Elliot",
    phoneNumber: 21965400174,
  },
  {
    id: 2,
    firstName: "Steve",
    lastName: "Jobs",
    phoneNumber: 21965400174,
  },
  {
    id: 3,
    firstName: "Fred",
    lastName: "Allen",
    phoneNumber: 21965400174,
  },
  {
    id: 4,
    firstName: "Steve",
    lastName: "Wozniak",
    phoneNumber: 21965400174,
  },
  {
    id: 5,
    firstName: "Bill",
    lastName: "Gates",
    phoneNumber: 21965400174,
  },
  {
    id: 6,
    firstName: "Rubens",
    lastName: "Rojas",
    phoneNumber: 21965400174,
  },
];

function PhoneBook() {
  const [contacts, setContacts] = useState<IContact[]>(mockContacts);

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className={classes.phoneBookContainer}>
      <div className={classes.header}>
        <div>
          <h3>Contacts</h3>
          <ContactAddNew />
        </div>
        <ContactSearchInput />
      </div>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default PhoneBook;
