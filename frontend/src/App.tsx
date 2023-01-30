import addressBook from "./assets/address-book.svg";
import PhoneBook from "./components/PhoneBook";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.appContainer}>
      <h1 className={classes.title}>
        <img src={addressBook} alt="Adress Book" />
        Phone Book App
      </h1>
      <div className={classes.phoneBookWrapper}>
        <PhoneBook />
      </div>
    </div>
  );
}

export default App;
