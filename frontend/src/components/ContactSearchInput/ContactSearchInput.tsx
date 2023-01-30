import { useEffect, useState } from "react";
import classes from "./ContactSearchInput.module.css";

interface IContactSearctInputProps {
  handleSearchQuery: (query: string) => void;
}

function ContactSearchInput({ handleSearchQuery }: IContactSearctInputProps) {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    handleSearchQuery(search);
  }, [search]);

  return (
    <input
      className={classes.searchInput}
      type="text"
      name="search"
      placeholder="Search for contact by last name..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default ContactSearchInput;
