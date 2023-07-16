import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Все про речі із Китаю:</h2>
        <a
          className={styles.title}
          target="_blank"
          rel="noopener"
          href="https://instagram.com/maria__yatsenko?igshid=Y2IzZGU1MTFhOQ=="
        >
          @maria__yatsenko
        </a>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Мій магазин одягу:</h2>
        <a
          className={styles.title}
          target="_blank"
          rel="noopener"
          href="https://instagram.com/egoistka.brand?igshid=Y2IzZGU1MTFhOQ=="
        >
          @egoistka.brand
        </a>
      </div>
    </div>
  );
};
