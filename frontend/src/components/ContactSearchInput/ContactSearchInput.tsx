import classes from "./ContactSearchInput.module.css";

function ContactSearchInput() {
  return (
    <input
      className={classes.searchInput}
      type="text"
      placeholder="Search for contact by last name..."
    />
  );
}

export default ContactSearchInput;
