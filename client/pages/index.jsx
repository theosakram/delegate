import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Link href={`/1`}>
          <a className={styles.toData}>To Data</a>
        </Link>
      </main>
    </div>
  );
}
