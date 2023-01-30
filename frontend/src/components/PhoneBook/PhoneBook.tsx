import ContactAddNew from "../ContactAddNew";
import ContactSearchInput from "../ContactSearchInput";
import ContactsList from "../ContactsList";
import usePhoneBook from "./usePhoneBook";

import classes from "./PhoneBook.module.css";

function PhoneBook() {
  const { contacts, deleteContact, addNewContact } = usePhoneBook();

  return (
    <div className={classes.phoneBookContainer}>
      <div className={classes.header}>
        <div>
          <h3>Contacts</h3>
          <ContactAddNew addNewContact={addNewContact} />
        </div>
        <ContactSearchInput />
      </div>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default PhoneBook;
