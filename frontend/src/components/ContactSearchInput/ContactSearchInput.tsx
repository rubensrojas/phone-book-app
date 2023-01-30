import classes from "./ContactSearchInput.module.css";

function ContactSearchInput() {
  return (
    <input
      className={classes.searchInput}
      type="text"
      name="search"
      placeholder="Search for contact by last name..."
      onChange={() => {}}
    />
  );
}

export default ContactSearchInput;
