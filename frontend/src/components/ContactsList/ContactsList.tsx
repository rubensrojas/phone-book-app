import ContactItem from "./ContactItem";
import classes from "./ContactsList.module.css";

function ContactsList() {
  const contacts = [
    {
      id: 1,
      name: "Eric Elliot",
      phoneNumber: 2225556575,
    },
    {
      id: 2,
      name: "Eric Elliot",
      phoneNumber: 2225556575,
    },
    {
      id: 3,
      name: "Eric Elliot",
      phoneNumber: 2225556575,
    },
    {
      id: 4,
      name: "Eric Elliot",
      phoneNumber: 2225556575,
    },
    {
      id: 5,
      name: "Eric Elliot",
      phoneNumber: 2225556575,
    },
  ];

  return (
    <div className={classes.contactsList}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactsList;
