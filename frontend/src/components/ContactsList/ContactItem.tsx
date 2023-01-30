import phoneIcon from "../../assets/phone.svg";
import trashCan from "../../assets/trash-can.svg";
import { IContact } from "../PhoneBook/PhoneBook";

import classes from "./ContactItem.module.css";

interface IContactItemProps {
  contact: IContact;
  deleteContact: (id: number) => void;
}

function ContactItem({ contact, deleteContact }: IContactItemProps) {
  return (
    <div className={classes.contactItem}>
      <div>
        <p
          className={classes.contactItem__name}
        >{`${contact.firstName} ${contact.lastName}`}</p>
        <p className={classes.contactItem__phoneNumber}>
          <img src={phoneIcon} alt="Phone" />
          {contact.phoneNumber}
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
