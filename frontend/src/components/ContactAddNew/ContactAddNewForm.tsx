import React, { useState } from "react";
import { INewContact } from "../PhoneBook/PhoneBook";

import classes from "./ContactAddNewForm.module.css";
import useContactAddNewForm from "./useContactAddNewForm";

interface IContactAddNewFormProps {
  addNewContact: (newContact: INewContact) => void;
  closeModal: () => void;
}

function ContactAddNewForm({
  addNewContact,
  closeModal,
}: IContactAddNewFormProps) {
  const { error, newContact, handleInputChange, onSubmit } =
    useContactAddNewForm(addNewContact, closeModal);

  return (
    <div className={classes.modal}>
      <form className={classes.newContactForm} onSubmit={onSubmit}>
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

export default ContactAddNewForm;
