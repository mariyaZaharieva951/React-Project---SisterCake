import styles from "../Register/Register.module.css";

export const Register = () => {
  return (
    <div className="container">
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box}>
            <h1>Регистрация</h1>
            {/* <p className="text-muted">
                Моля, попълнете вашите име и парола !
              </p> */}
            <div className={styles.line}>
              <input type="text" name="" placeholder="Име" />
              <input type="email" name="" placeholder="Ел.поща" />
            </div>
            <div className={styles.line}>
              <input type="password" name="" placeholder="Парола" />
              <input type="password" name="" placeholder="Повтори парола" />
            </div>

            <input type="submit" name="" defaultValue="Login" href="#" />
            <div className="col-md-12">
              <div className={styles.social_network}>
                <ul className={styles.social_circle}>
                  <li>
                    <a href="#" className={styles.icoFacebook} title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.icoTwitter} title="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.icoGoogle} title="Google +">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
