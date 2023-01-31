import { useState } from "react";
import ContactFormModal from "../ContactFormModal";
import { IContact, INewContact } from "../PhoneBook/usePhoneBook";
import ContactItem from "./ContactItem";

import classes from "./ContactsList.module.css";
import useContactsList from "./useContactsList";

interface IContactsListProps {
  contacts: IContact[];
  deleteContact: (id: number) => void;
  editContact: (contact: INewContact) => void;
}

function ContactsList({
  contacts,
  deleteContact,
  editContact,
}: IContactsListProps) {
  const {
    isModalOpen,
    editingContact,
    toggleIsModalOpen,
    handleContact,
    setContactEditor,
  } = useContactsList(contacts, editContact);

  return (
    <>
      <div className={classes.contactsList}>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
              editContact={setContactEditor}
            />
          ))
        ) : (
          <p className={classes.withoutContacts}>No contacts found.</p>
        )}
      </div>
      {isModalOpen && (
        <ContactFormModal
          handleContact={handleContact}
          contact={editingContact}
          closeModal={toggleIsModalOpen}
        />
      )}
    </>
  );
}

export default ContactsList;
