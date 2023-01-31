import ContactAddNew from "../ContactAddNew";
import ContactSearchInput from "../ContactSearchInput";
import ContactsList from "../ContactsList";
import usePhoneBook from "./usePhoneBook";

import classes from "./PhoneBook.module.css";
import LoadingIcon from "../LoadingIcon";

const Loading = () => (
  <div className={classes.loadingWrapper}>
    <LoadingIcon />
    <p>Loading...</p>
  </div>
);

const PhoneBook = () => {
  const {
    filteredContacts,
    error,
    isLoading,
    deleteContact,
    addNewContact,
    handleSearchQuery,
  } = usePhoneBook();

  return (
    <div className={classes.phoneBookContainer}>
      <div className={classes.header}>
        <div>
          <h3>Contacts</h3>
          <ContactAddNew addNewContact={addNewContact} />
        </div>
        <ContactSearchInput handleSearchQuery={handleSearchQuery} />
      </div>
      {isLoading && <Loading />}
      {!error && !isLoading && (
        <ContactsList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      )}
      {error && (
        <p>Failed to load data from the server. Please, refresh the page.</p>
      )}
    </div>
  );
};

export default PhoneBook;
