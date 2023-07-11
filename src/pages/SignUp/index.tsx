import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import icon2 from "../../assets/islam_5lhb2v3612up_256.png";
//import { authSignUp } from "../../features/appSlices";

import { Link, useNavigate } from "react-router-dom";

import styles from "./signUp.module.css";
import { authSignUp } from "../../redux/slices/appSlices";

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector((state) => {
    return state.application.error;
  });

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    await dispatch(authSignUp({ login, password, firstName, lastName }));
    setShouldRedirect(true);
  };

  useEffect(() => {
    if (shouldRedirect && !error) {
      navigate("/login");
    }
  }, [shouldRedirect, error, navigate]);

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
            <h1>Зарегистрироваться</h1>
          </div>
          <div className={styles.subtitle}>
            {error
              ? error
              : "Зарегистрируйтесь, чтобы начать работу с сервисом:"}
          </div>
        </div>
        <form onSubmit={handleSignUp}>
          <div>
            <div>
              <input
                type="text"
                className={styles.fname}
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                required
                placeholder="Имя"
              />
            </div>
            <div>
              <input
                type="text"
                className={styles.lname}
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                required
                placeholder="Фамилия"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              className={styles.login}
              value={login}
              required
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Логин"
            />
          </div>
          <div>
            <input
              type="password"
              className={styles.password}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
          </div>
          <div className={styles.button}>
            <button type="submit" >Зарегистрироваться</button>
          </div>
        </form>
      </div>
      <div className={styles.action}>
        <p>Уже есть аккаунт?</p>
        <Link to="/login">Войти</Link>
      </div>
    </section>
  );
};

export default SignUp;
