import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import UserCards from "./UserCards";
import Paging from "./Paging";
import styles from "../styles/Home.module.scss";

const MainBody = () => {
  return (
    <main className={styles.mainBody}>
      <PageHeader />
      <SearchBar />
      <UserCards />
      <Paging />
    </main>
  );
};

export default MainBody;
