import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Paging = () => {
  const arr = [1, 2, 3, 4, 5, "...", 10];
  const { pathname } = useRouter();
  const newPathName = pathname.substring(pathname.length - 1);

  return (
    <main className={styles.paging}>
      <div className={styles.pagingInside}>
        <img src="/arrowback.png" alt="arrowback" />
        {arr.map((page, index) => (
          <Link key={index} href={`/${page}`}>
            <a
              style={{
                color: page === +newPathName ? "white" : "#7db7b4",
                backgroundColor: page === +newPathName ? "#7db7b4" : "white",
                borderRadius: "50%",
              }}
            >
              {page}
            </a>
          </Link>
        ))}
        <img src="/arrownext.png" alt="arrownext" />
      </div>
    </main>
  );
};

export default Paging;
