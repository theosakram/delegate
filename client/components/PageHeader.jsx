import styles from "../styles/Home.module.scss";

const PageHeader = () => {
  return (
    <main className={styles.pageHeader}>
      <img src="/pencil.png" alt="pencil" />
      <div className={styles.title}>
        <h1>PERFORMANCE</h1>
        <h1>Interested Users</h1>
      </div>
    </main>
  );
};

export default PageHeader;
