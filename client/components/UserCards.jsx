import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Fetch from "isomorphic-unfetch";
import Axios from "axios";
import styles from "../styles/Home.module.scss";

const UserCards = (props) => {
  const { pathname } = useRouter();
  const newPathName = pathname.substring(pathname.length - 1);

  const [users, setUsers] = useState([]);

  //idk why this is always return empty object
  props && console.log(props);

  useEffect(() => {
    Axios.get(`https://reqres.in/api/users?page=${newPathName}`).then((res) =>
      setUsers(res.data.data)
    );
  }, []);

  if (users.length) {
    return (
      <main className={styles.userCards}>
        <p className={styles.cardTitle}>INTERESTED USERS</p>
        <Card className={styles.card}>
          <Card.Body className={styles.cardHeadRow}>
            <p>ID</p>
            <p>EMAIL</p>
            <p>NAME</p>
          </Card.Body>
          {users.map((user) => (
            <Card.Body key={user.id} className={styles.cardItem}>
              <p>{user.id}</p>
              <p>{user.email}</p>
              <p>
                {user.first_name} {user.last_name}
              </p>
            </Card.Body>
          ))}
        </Card>
      </main>
    );
  } else {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading</h1>
      </main>
    );
  }
};

export async function getServerSideProps() {
  const { pathname } = useRouter();
  const newPathName = pathname.substring(pathname.length - 1);

  const res = await Fetch(`https://reqres.in/api/users?page=${newPathName}`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default UserCards;
