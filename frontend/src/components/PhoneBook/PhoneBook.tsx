import ContactAddNew from "../ContactAddNew";
import ContactSearchInput from "../ContactSearchInput";
import ContactsList from "../ContactsList";

import classes from "./PhoneBook.module.css";

function PhoneBook() {
  return (
    <div className={classes.phoneBookContainer}>
      <div className={classes.header}>
        <div>
          <h3>Contacts</h3>
          <ContactAddNew />
        </div>
        <ContactSearchInput />
      </div>
      <ContactsList />
    </div>
  );
}

export default PhoneBook;
