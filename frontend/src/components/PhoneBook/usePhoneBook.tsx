import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export type INewContact = Omit<IContact, "id">;

const usePhoneBook = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<IContact[]>([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { get, remove } = useRequest();

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const loadContacts = async () => {
    setIsLoading(true);

    try {
      const res: { data: IContact[] } = await get("contacts");

      setContacts(res.data);
    } catch (e) {
      console.error(e);
      setError(true);
    }

    setIsLoading(false);
  };

  const deleteContact = (id: number) => {
    try {
      remove(`contacts/${id}`);

      setContacts((oldContacts) =>
        oldContacts.filter((contact) => contact.id !== id)
      );
    } catch (e) {
      console.error(e);
    }
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

  return {
    filteredContacts,
    error,
    isLoading,
    deleteContact,
    addNewContact,
    handleSearchQuery,
  };
};

export default usePhoneBook;
