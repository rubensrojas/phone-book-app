import { useState } from "react";
import { IContact, INewContact } from "../PhoneBook/usePhoneBook";

const useContactsList = (
  contacts: IContact[],
  editContact: (contact: INewContact) => void
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<IContact | null>(null);

  const toggleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const setContactEditor = (id: number) => {
    const contact = contacts.find((contact) => contact.id === id);

    if (contact) {
      setEditingContact(contact);
      toggleIsModalOpen();
    }
  };

  const handleContact = (contact: INewContact) => {
    editContact({ ...contact, id: editingContact?.id });
  };

  return {
    isModalOpen,
    editingContact,
    toggleIsModalOpen,
    handleContact,
    setContactEditor,
  };
};

export default useContactsList;
