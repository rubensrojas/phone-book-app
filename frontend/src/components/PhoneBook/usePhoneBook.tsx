import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdAt?: string;
}

export interface INewContact extends Omit<IContact, "id"> {
  id?: number;
}

const usePhoneBook = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<IContact[]>([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { get, remove, post, patch } = useRequest();

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const loadContacts = async () => {
    setIsLoading(true);

    try {
      const res = await get<{ data: IContact[] }>("contacts");

      setContacts(res.data);
    } catch (e) {
      console.error(e);
      setError(true);
    }

    setIsLoading(false);
  };

  const deleteContact = async (id: number) => {
    try {
      await remove(`contacts/${id}`);

      setContacts((oldContacts) =>
        oldContacts.filter((contact) => contact.id !== id)
      );
    } catch (e) {
      console.error(e);
    }
  };

  const addNewContact = async (newContact: INewContact) => {
    try {
      const res = await post<{ data: IContact }>("contacts", newContact);

      const newContactWithId = {
        ...newContact,
        id: res.data.id,
      };

      setContacts((oldContacts) => [...oldContacts, newContactWithId]);
    } catch (e) {
      console.error(e);
    }
  };

  const editContact = async (updatedContact: INewContact) => {
    try {
      const res = await patch<{ data: IContact }>(
        `contacts/${updatedContact.id}`,
        updatedContact
      );

      setContacts((oldContacts) =>
        oldContacts.map((contact) =>
          contact.id === updatedContact.id ? res.data : contact
        )
      );
    } catch (e) {
      console.error(e);
    }
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
    editContact,
    handleSearchQuery,
  };
};

export default usePhoneBook;
