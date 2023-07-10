import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from './signIn.module.css'
import { authSignIn } from "../../redux/slices/appSlices";

import logo from "../../assets/logo.png";
import icon2 from "../../assets/islam_5lhb2v3612up_256.png";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => {
    return state.application.error;
  });

  const dispatch = useDispatch();

  const handleSignIp = (e) => {
    e.preventDefault();
    dispatch(authSignIn({ login, password }));
  };

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <div className={styles.logo}>
        <div className={styles.logo__name}>
          <Link to="/">
            <img src={logo} alt="logo-img" />
          </Link>
          <Link className={styles.tajweed} to="/">
            Tajweed
          </Link>
        </div>
        <div className={styles.illustration__logo}>
          <img src={icon2} alt="illustration" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main__titile}>
          <div className={styles.title}>
            <h1>Войти</h1>
          </div>
          <div className={styles.subtitle}>Введите свои данные ниже</div>
        </div>

        <form onSubmit={handleSignIp}>
          <div>
            <input
              type="text"
              className={styles.login}
              onChange={handleSetLogin}
              value={login}
              placeholder="Логин"
            />
          </div>
          <div>
            <input
              type="password"
              className={styles.password}
              onChange={handleSetPassword}
              value={password}
              placeholder="Пароль"
            />
          </div>
          <div className={styles.button}>
            <button type="submit">Войти</button>
          </div>
        </form>
      <div className={styles.action}>
        <p>Нет учетной записи?</p>
        <Link to={"/register"}>Зарегистрироваться</Link>
      </div>
      </div>
    </section>
  );
};

export default SignIn;
