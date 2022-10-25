import { Link } from "react-router-dom";
import styles from "./login.module.css";
import loginHero from '../../assets/svg/login-hero.svg';
import googleButton from '../../assets/svg/google.svg';
export const Login = (props: any) => {
  return (
    <main>
      <nav className={styles.nav}>
        <a href="/">
          <img src="/svg/login-logo.svg" alt="" />
        </a>
        <div>
          <Link to={"/"} className={styles.join}>
            Join Now
          </Link>
          <Link className={styles["sign-in"]} to="/">
            Sign In
          </Link>
        </div>
      </nav>
      <section className={styles['main-section']}>
        <div className={styles.hero}>
          <h1>Welcome to your professional community</h1>
          <img src={loginHero}/> 
        </div>
        <div className={styles.form}>
            <button className={styles['google-button']}>
                <img src={googleButton}/>
                Sign in with Google
            </button>
        </div>
      </section>
    </main>
  );
};
