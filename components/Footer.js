import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_wrap}>
        <a
          target="_blank"
          href="https://t.me/Maria_09_07"
          className={styles.btn}
        >
          Купити курс
        </a>
        <div className={styles.wrapper}>
          <div className={styles.wrap}>
            <h2 className={styles.title}>Все про речі із Китаю:</h2>
            <h2 className={styles.title}>Мій магазин одягу:</h2>
          </div>
          <div className={styles.wrap}>
            <a
              className={styles.title}
              target="_blank"
              rel="noopener"
              href="https://instagram.com/maria__yatsenko?igshid=Y2IzZGU1MTFhOQ=="
            >
              @maria__yatsenko
            </a>
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
      </div>
    </div>
  );
};
