import phoneIcon from "../../assets/phone.svg";
import deleteIcon from "../../assets/trash-can.svg";
import editIcon from "../../assets/pen-to-square.svg";
import { IContact } from "../PhoneBook/usePhoneBook";

import classes from "./ContactItem.module.css";

interface IContactItemProps {
  contact: IContact;
  deleteContact: (id: number) => void;
  editContact: (id: number) => void;
}

function ContactItem({
  contact,
  deleteContact,
  editContact,
}: IContactItemProps) {
  function phoneNumberFormatter(phoneNumber: string) {
    const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
    const brazilianMatch = phoneNumber.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return match[1] + "-" + match[2] + "-" + match[3];
    } else if (brazilianMatch) {
      return `+${brazilianMatch[1]} (${brazilianMatch[2]}) ${brazilianMatch[3]}-${brazilianMatch[4]}`;
    }
    return phoneNumber;
  }

  const formatedPhoneNumber = phoneNumberFormatter(contact.phoneNumber);

  return (
    <div className={classes.contactItem}>
      <div>
        <p
          className={classes.contactItem__name}
        >{`${contact.firstName} ${contact.lastName}`}</p>
        <p className={classes.contactItem__phoneNumber}>
          <img src={phoneIcon} alt="Phone" />
          {formatedPhoneNumber}
        </p>
      </div>
      <div className={classes.contactItem__actions}>
        <button
          className={classes.updateButton}
          type="button"
          onClick={() => editContact(contact.id)}
        >
          <img src={editIcon} alt="Edit Contact" />
        </button>
        <button
          className={classes.deleteButton}
          type="button"
          onClick={() => deleteContact(contact.id)}
        >
          <img src={deleteIcon} alt="Delete Contact" />
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
