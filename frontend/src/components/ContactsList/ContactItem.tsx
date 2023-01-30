import phoneIcon from "../../assets/phone.svg";
import trashCan from "../../assets/trash-can.svg";

import classes from "./ContactItem.module.css";

interface IContactItemProps {
  contact: {
    id: number;
    name: string;
    phoneNumber: number;
  };
}

function ContactItem(props: IContactItemProps) {
  const { contact } = props;

  return (
    <div className={classes.contactItem}>
      <div>
        <p className={classes.contactItem__name}>{contact.name}</p>
        <p className={classes.contactItem__phoneNumber}>
          <img src={phoneIcon} alt="Phone" />
          {contact.phoneNumber}
        </p>
      </div>
      <button className={classes.deleteButton} type="button">
        <img src={trashCan} alt="Trash can" />
      </button>
    </div>
  );
}

export default ContactItem;
