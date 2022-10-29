import styles from "./loggedInNavbar.module.css";
import homeLogo from "../../assets/svg/home-logo.svg";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/svg/search-icon.svg";
import navHome from "../../assets/svg/nav-home.svg";
import navJobs from '../../assets/svg/nav-jobs.svg';
import navMessaging from '../../assets/svg/nav-messaging.svg';
import navNetwork from '../../assets/svg/nav-network.svg';
import navNotification from '../../assets/svg/nav-notifications.svg';
import navWork from '../../assets/svg/nav-work.svg';
import user from '../../assets/svg/user.svg';
import downIcon from '../../assets/svg/down-icon.svg';
import styled from "styled-components";
export const LoggedinNavbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <span className={styles.logo}>
          <Link to={"/home"}>
            <img src={homeLogo} alt="" />
          </Link>
        </span>
        <div className={styles.search}>
          <div>
            <input type={"text"} placeholder="Search" />
          </div>
          <div className={styles["search-icon"]}>
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles["navlist-wrap"]}>
            <li className={`${styles.navlist} ${styles.active}`}>
              <Link to={"/home"}>
                <img src={navHome} alt="" />
                <span>Home</span>
              </Link>
            </li>
            <li className={styles.navlist}>
              <Link to={"/home"}>
                <img src={navNetwork} alt="" />
                <span>My Network</span>
              </Link>
            </li>
            <li className={styles.navlist}>
              <Link to={"/home"}>
                <img src={navJobs} alt="" />
                <span>Jobs</span>
              </Link>
            </li>
            <li className={styles.navlist}>
              <Link to={"/home"}>
                <img src={navMessaging} alt="" />
                <span>Messaging</span>
              </Link>
            </li>
            <li className={styles.navlist}>
              <Link to={"/home"}>
                <img src={navNotification} alt="" />
                <span>Notifications</span>
              </Link>
            </li>
            <li className={`${styles.navlist} ${styles.user}`}>
                <Link to={''}>
                    <img src={user} alt="" />
                    <span>Me</span>
                    <img src={downIcon} alt="" />
                </Link>
                <div className={styles.signout}>
                    Signout
                </div>
            </li>
            <li className={`${styles.navlist} ${styles.work}`}>
                <Link to={''}>
                    <img src={navWork} alt="" />
                    <span>Work</span>
                    <img src={downIcon} alt="" />
                </Link>
            </li>
        </ul>
        </nav>
      </div>
    </header>
  );
};
