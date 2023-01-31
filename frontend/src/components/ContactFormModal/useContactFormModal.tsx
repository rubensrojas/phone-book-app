import { useState } from "react";
import { INewContact } from "../PhoneBook/usePhoneBook";

const useContactFormModal = (
  handleContact: (newContact: INewContact) => void,
  closeModal: () => void,
  contact?: INewContact | null
) => {
  const [newContact, setNewContact] = useState({
    firstName: contact?.firstName ?? "",
    lastName: contact?.lastName ?? "",
    phoneNumber: contact?.phoneNumber ?? "",
  });
  const [error, setError] = useState(false);

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (checkEmptyFields()) {
      return;
    }

    handleContact(newContact);
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

    let phoneNumberValue: string | null = null;

    if (name === "phoneNumber") {
      phoneNumberValue = filterNumbers(value);
    }

    setNewContact((oldNewContact) => ({
      ...oldNewContact,
      [name]: phoneNumberValue ?? value,
    }));
  };

  const filterNumbers = (str: string) => {
    return str.replace(/\D/g, "");
  };

  return {
    error,
    newContact,
    handleInputChange,
    onSubmit,
  };
};

export default useContactFormModal;
