import classes from "./ContactAddNew.module.css";

function ContactAddNew() {
  return (
    <button className={classes.addNewContactButton} type="button">
      + Add Contact
    </button>
  );
}

export default ContactAddNew;
