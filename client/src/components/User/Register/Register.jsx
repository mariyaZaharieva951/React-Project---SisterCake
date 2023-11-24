import styles from "../Register/Register.module.css";
import { useForm } from "../../../hooks/useForm";
// import { useContext } from "react";
// import { AuthContext } from "../../../contexts/authContex";
// import * as authService from '../../../services/authService';
// import { useNavigate } from "react-router-dom"

export const Register = () => {

  const { values, onChange, onRegisterSubmit} = useForm({
    name: '',
    email: '',
    password:'',
    rePass: '',
  })
  
  return (
    <div className="container">
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box} onSubmit={onRegisterSubmit}>
            <h1>Регистрация</h1>
            {/* <p className="text-muted">
                Моля, попълнете вашите име и парола !
              </p> */}
            <div className={styles.line}>
              <input 
              type="text" 
              name="name" 
              placeholder="Име" 
              id="name"
              value={values.name}
              onChange={onChange}
              />
              <input 
              type="email"
              name="email" 
              placeholder="Ел.поща" 
              id="email"
              value={values.email}
              onChange={onChange}
              />
            </div>
            <div className={styles.line}>
              <input 
              type="password" 
              name="password" 
              placeholder="Парола" 
              id="password"
              value={values.password}
              onChange={onChange}
              />
              <input 
              type="password" 
              name="rePass" 
              placeholder="Повтори парола" 
              id="rePass"
              value={values.rePass}
              onChange={onChange}
              />
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
