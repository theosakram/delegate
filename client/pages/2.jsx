import { Col, Row } from "react-bootstrap";
import { MainBody, Sidebar } from "../components";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

const InterestedUser = () => {
  return (
    <div>
      <Head>
        <title>Interested User</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Row className={styles.row}>
          <Col lg={3} md={3}>
            <Sidebar />
          </Col>
          <Col lg={9} md={9}>
            <MainBody />
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default InterestedUser;
