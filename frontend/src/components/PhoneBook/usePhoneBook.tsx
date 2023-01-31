import { useState } from "react";

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export type INewContact = Omit<IContact, "id">;

const placeholderContacts = [
  {
    id: 1,
    firstName: "Eric",
    lastName: "Elliot",
    phoneNumber: "222-555-6575",
  },
  {
    id: 2,
    firstName: "Steve",
    lastName: "Jobs",
    phoneNumber: "2204546754",
  },
  {
    id: 3,
    firstName: "Fred",
    lastName: "Allen",
    phoneNumber: "2106579886",
  },
  {
    id: 4,
    firstName: "Steve",
    lastName: "Wozniak",
    phoneNumber: "3436758786",
  },
  {
    id: 5,
    firstName: "Bill",
    lastName: "Gates",
    phoneNumber: "3436549688",
  },
  {
    id: 6,
    firstName: "Rubens",
    lastName: "Rojas",
    phoneNumber: "5521965400174",
  },
];

const usePhoneBook = () => {
  const [contacts, setContacts] = useState<IContact[]>(placeholderContacts);
  const [filteredContacts, setFilteredContacts] = useState<IContact[]>([]);

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const addNewContact = (newContact: INewContact) => {
    const index = contacts[contacts.length - 1].id + 1;

    const newContactWithId = {
      ...newContact,
      id: index,
    };

    setContacts((oldContacts) => [...oldContacts, newContactWithId]);
  };

  const handleSearchQuery = (query: string) => {
    if (query) {
      const filteredContacts = contacts.filter((contact) =>
        contact.lastName.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredContacts(filteredContacts);
    } else {
      setFilteredContacts(contacts);
    }
  };

  return { filteredContacts, deleteContact, addNewContact, handleSearchQuery };
};

export default usePhoneBook;
