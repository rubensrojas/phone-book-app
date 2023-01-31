import phoneIcon from "../../assets/phone.svg";
import trashCan from "../../assets/trash-can.svg";
import { IContact } from "../PhoneBook/usePhoneBook";

import classes from "./ContactItem.module.css";

interface IContactItemProps {
  contact: IContact;
  deleteContact: (id: number) => void;
}

function ContactItem({ contact, deleteContact }: IContactItemProps) {
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
      <button
        className={classes.deleteButton}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        <img src={trashCan} alt="Trash can" />
      </button>
    </div>
  );
}

export default ContactItem;
