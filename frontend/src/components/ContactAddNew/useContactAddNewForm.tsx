import { useState } from "react";
import { INewContact } from "../PhoneBook/PhoneBook";

const useContactAddNewForm = (
  addNewContact: (newContact: INewContact) => void,
  closeModal: () => void
) => {
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
  });
  const [error, setError] = useState(false);

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (checkEmptyFields()) {
      return;
    }

    addNewContact(newContact);
    closeModal();
  };

  const checkEmptyFields = (): boolean => {
    const { firstName, lastName, phoneNumber } = newContact;

    if (!firstName || !lastName || !phoneNumber) {
      setError(true);
      return true;
    }

    setError(false);
    return false;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setNewContact((oldNewContact) => ({
      ...oldNewContact,
      [name]: value,
    }));
  };

  return {
    error,
    newContact,
    handleInputChange,
    onSubmit,
  };
};

export default useContactAddNewForm;
