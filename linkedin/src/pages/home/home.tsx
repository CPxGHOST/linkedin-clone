import styles from "./home.module.css";
export const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles["heading-section"]}>
        <h5>
          <a>Hiring in a hurry? -</a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business moving
        </p>
      </section>
    </div>
  );
};
