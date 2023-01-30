import { useState } from "react";
import { INewContact } from "../PhoneBook/usePhoneBook";
import classes from "./ContactAddNew.module.css";
import ContactAddNewForm from "./ContactAddNewForm";

interface IContactAddNewProps {
  addNewContact: (newContact: INewContact) => void;
}

function ContactAddNew({ addNewContact }: IContactAddNewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        className={classes.addNewContactButton}
        type="button"
        onClick={toggleIsModalOpen}
      >
        + Add Contact
      </button>

      {isModalOpen && (
        <ContactAddNewForm
          addNewContact={addNewContact}
          closeModal={toggleIsModalOpen}
        />
      )}
    </>
  );
}

export default ContactAddNew;
