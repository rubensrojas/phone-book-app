import classes from "./PhoneBook.module.css";

function PhoneBook() {
  return (
    <div>
      <div className={classes.header}>
        <div>
          <h3>Contacts</h3>
          <button type="button">+ Add Contact</button>
        </div>
        <input type="text" value="" />
      </div>
      <div className={classes.contactsList}>
        <div className={classes.contactsList__contact}>
          <div className={classes.contact__info}>
            <p className={classes.contact__name}>Eric Elliot</p>
            <p className={classes.contact__number}> 222-555-6575</p>
          </div>
          <button type="button">Delete</button>
        </div>
        <div className={classes.contactsList__contact}>
          <div className={classes.contact__info}>
            <p className={classes.contact__name}>Eric Elliot</p>
            <p className={classes.contact__number}> 222-555-6575</p>
          </div>
          <button type="button">Delete</button>
        </div>
        <div className={classes.contactsList__contact}>
          <div className={classes.contact__info}>
            <p className={classes.contact__name}>Eric Elliot</p>
            <p className={classes.contact__number}> 222-555-6575</p>
          </div>
          <button type="button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PhoneBook;
