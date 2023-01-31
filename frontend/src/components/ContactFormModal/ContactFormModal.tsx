import { INewContact } from "../PhoneBook/usePhoneBook";

import classes from "./ContactFormModal.module.css";
import useContactFormModal from "./useContactFormModal";

interface IContactFormModalProps {
  handleContact: (newContact: INewContact) => void;
  closeModal: () => void;
  contact?: INewContact | null;
}

function ContactFormModal({
  handleContact,
  closeModal,
  contact,
}: IContactFormModalProps) {
  const { error, newContact, handleInputChange, onSubmit } =
    useContactFormModal(handleContact, closeModal, contact);

  return (
    <div className={classes.modal}>
      <form className={classes.newContactForm} onSubmit={onSubmit}>
        <p>Contact Form</p>
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
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default ContactFormModal;
