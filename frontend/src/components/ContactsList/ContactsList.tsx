import { IContact } from "../PhoneBook/usePhoneBook";
import ContactItem from "./ContactItem";

import classes from "./ContactsList.module.css";

interface IContactsListProps {
  contacts: IContact[];
  deleteContact: (id: number) => void;
}

function ContactsList({ contacts, deleteContact }: IContactsListProps) {
  return (
    <div className={classes.contactsList}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      ) : (
        <p className={classes.withoutContacts}>No contacts found.</p>
      )}
    </div>
  );
}

export default ContactsList;
