import { Form, FormControl } from "react-bootstrap";
import styles from "../styles/Home.module.scss";

const SearchBar = () => {
  return (
    <>
      <Form inline className={styles.searchBar}>
        <img src="/search.png" alt="search" />
        <FormControl
          type="text"
          placeholder="Search by email or name"
          className={`mr-sm-2 ${styles.formControl}`}
        />
      </Form>
    </>
  );
};

export default SearchBar;
