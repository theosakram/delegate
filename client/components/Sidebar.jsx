import SidebarMenu from "./SidebarMenu";
import styles from "../styles/Home.module.scss";

const Sidebar = () => {
  const menuArr = [
    { title: "OVERVIEW", image: "/overview.png" },
    { title: "BUSSINESS", image: "/bussiness.png" },
    { title: "INBOX", image: "/inbox.png" },
    { title: "COLLABORATIONS", image: "/collaborations.png" },
    { title: "PERFORMANCE", image: "/performance.png" },
    { title: "BILLING", image: "/billing.png" },
    { title: "SUPPORT", image: "/support.png" },
  ];
  return (
    <main className={styles.sidebar}>
      <img src="/Group1118.png" alt="image" />
      {menuArr.map((menu, index) => (
        <SidebarMenu key={index} menu={menu} />
      ))}
    </main>
  );
};

export default Sidebar;
