import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import icon2 from "../../assets/islam_5lhb2v3612up_256.png"
//import { authSignUp } from "../../features/appSlices";

import styles from "./signUp.module.css";

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    //dispatch(authSignUp({login, password}))
  };

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section>
      <div className={styles.logo}>
        <div className={styles.logo__name}>
          <a href="/">
            <img src={logo} alt="logo-img" />
          </a>
          <a className={styles.tajweed} href="/">Tajweed</a>
        </div>
        <div className={styles.illustration__logo}>
          <img src={icon2} alt="illustration" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main__titile}>
          <div className={styles.title}>
            <h1>Зарегистрироваться</h1>
          </div>
          <div className={styles.subtitle}>
            Зарегистрируйтесь, чтобы начать работу с сервисом:
          </div>
        </div>
        <form onSubmit={handleSignUp}>
          <div className={styles.fullname}>
            <div className="fname">
              <input type="text" id={styles.fname} required placeholder="Имя" />
            </div>
            <div className={styles.lname}>
              <input
                type="text"
                id={styles.lname}
                required
                placeholder="Фамилия"
              />
            </div>
          </div>
          <div className={styles.login}>
            <input
              type="text"
              id={styles.login}
              value={login}
              onChange={handleSetLogin}
              placeholder="Логин"
            />
          </div>
          <div className={styles.password}>
            <input
              type="password"
              id={styles.password}
              value={password}
              onChange={handleSetPassword}
              placeholder="Пароль"
            />
          </div>
          <div className={styles.button}>
            <button type="submit">Зарегистрироваться</button>
          </div>
        </form>
      </div>
      <div className={styles.action}>
        <p>Уже есть аккаунт?</p>
        <a href="/login">Войти</a>
      </div>
    </section>
  );
};

export default SignUp;
