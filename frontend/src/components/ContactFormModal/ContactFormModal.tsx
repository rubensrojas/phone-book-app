import { INewContact } from "../PhoneBook/usePhoneBook";

import classes from "./ContactFormModal.module.css";
import useContactFormModal from "./useContactFormModal";

interface IContactFormModalProps {
  addNewContact: (newContact: INewContact) => void;
  closeModal: () => void;
}

function ContactFormModal({
  addNewContact,
  closeModal,
}: IContactFormModalProps) {
  const { error, newContact, handleInputChange, onSubmit } =
    useContactFormModal(addNewContact, closeModal);

  return (
    <div className={classes.modal}>
      <form className={classes.newContactFormModal} onSubmit={onSubmit}>
        <p>Add New Contact</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newContact.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newContact.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={newContact.phoneNumber}
          onChange={handleInputChange}
        />
        {error && <p className={classes.error}>All fields must be filled</p>}
        <div className={classes.buttonsContainer}>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default ContactFormModal;
