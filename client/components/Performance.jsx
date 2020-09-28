import { Collapse } from "react-bootstrap";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const Performance = ({ title }) => {
  const subMenuArr = ["SUMMARY", "CREDITS", "INTERESTED USERS"];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  function handleOpen() {
    setOpen(!open);
    setActive(!active);
  }

  return (
    <main className={styles.performance}>
      <div className={styles.performanceDiv}>
        <div className={styles.title}>
          <a
            onClick={() => handleOpen()}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className={styles.subMenu}
          >
            {title}
          </a>
        </div>
        <Collapse in={open}>
          <ul>
            {subMenuArr.map((menu, index) => (
              <li key={index} className={styles.list}>
                {menu}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
};

export default Performance;
