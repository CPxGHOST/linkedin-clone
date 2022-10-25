import styles from "./loggedInNavbar.module.css";
import homeLogo from "../../assets/svg/home-logo.svg";
import { Link } from "react-router-dom";
export const LoggedinNavbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <span className={styles.logo}>
          <Link to={'/home'}>
            <img src={homeLogo} />
          </Link>
        </span>
      </div>
    </header>
  );
};
