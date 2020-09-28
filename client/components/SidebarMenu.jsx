import { useState } from "react";
import { Collapse } from "react-bootstrap";
import styles from "../styles/Home.module.scss";

const SidebarMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  function handleOpen() {
    setOpen(!open);
    setActive(!active);
  }
  return (
    <main className={styles.sidebarMenu}>
      <div
        className={styles.imgAndTitle}
        style={{
          backgroundColor: active && "rgba(125,183,180, 0.15)",
          borderRadius: active && "10px",
        }}
      >
        <div
          style={{
            backgroundColor: active && "white",
            borderRadius: active && "10px",
            height: "30px",
            width: "35px",
            marginLeft: "5px",
          }}
        >
          <img
            src={menu.image}
            alt="image"
            style={{ alignSelf: "flex-start" }}
          />
        </div>
        {menu.title === "PERFORMANCE" ? (
          <main className={styles.performance}>
            <div className={styles.performanceDiv}>
              <div className={styles.title}>
                <a
                  onClick={() => handleOpen()}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className={styles.subMenu}
                >
                  {menu.title}
                </a>
              </div>
              <Collapse in={open}>
                <ul>
                  <li className={styles.list}>SUMMARY</li>
                  <li className={styles.list}>CREDITS</li>
                  <li className={styles.list}>INTERESTED USERS</li>
                </ul>
              </Collapse>
            </div>
          </main>
        ) : (
          <p>{menu.title}</p>
        )}
      </div>
    </main>
  );
};

export default SidebarMenu;
