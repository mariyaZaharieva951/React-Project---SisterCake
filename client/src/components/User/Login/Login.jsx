import styles from "../Login/Login.module.css";

export const Login = () => {
  return (
    <div className="container">
      <div className={styles.row}>
        
          <div className={styles.card}>
            <form className={styles.box}>
              <h1>Login</h1>
              {/* <p className="text-muted">
                Моля, попълнете вашите име и парола !
              </p> */}
              <input type="text" name="" placeholder="Име" />
              <input type="password" name="" placeholder="Парола" />
              {/* <a className="forgot text-muted" href="#">
                Forgot password?
              </a> */}
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
