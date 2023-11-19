import styles from "../Register/Register.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContex";
import * as authService from '../../../services/authService';
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate()


    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const { name, email, password, rePass } = Object.fromEntries(formData);
      
        if(password !== rePass) {
            alert('Passwords don`t match!');
            return
        }

        authService.register(name,email,password)
        .then(authData => {
            console.log(authData)
            login(authData);
            navigate('/');
        })
        .catch(() => {
            navigate('/')
        })
    }

  return (
    <div className="container">
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box} onSubmit={onSubmit}>
            <h1>Регистрация</h1>
            {/* <p className="text-muted">
                Моля, попълнете вашите име и парола !
              </p> */}
            <div className={styles.line}>
              <input type="text" name="name" placeholder="Име" />
              <input type="email" name="email" placeholder="Ел.поща" />
            </div>
            <div className={styles.line}>
              <input type="password" name="password" placeholder="Парола" />
              <input type="password" name="rePass" placeholder="Повтори парола" />
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
