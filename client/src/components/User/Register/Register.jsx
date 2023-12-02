import { useState, useContext} from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/authContex";
import { useNavigate } from "react-router-dom";

import * as authService from '../../../services/authService';
import styles from "../Register/Register.module.css";

export const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({username: "",email: "",password: "", rePass: ""});


  const resetFormHandler = () => {
    setFormValues({username: "",email: "",password: "", rePass: ""});
    };

  const submitHandler = (values) => {

        const { username, email, password, rePass } = values;
      
        if(password !== rePass) {
            alert('Passwords don`t match!');
            return
        }

        authService.register(username,email,password)
        .then(authData => {   
            login(authData);
            navigate('/');
        })
        .catch(() => {
            alert('The register is not successful!')
        })

        resetFormHandler();
    }

  const { values, onChange, onSubmit} = useForm(submitHandler,formValues)
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.card}>
          <form className={styles.box} onSubmit={onSubmit}>
            <h1>Регистрация</h1>
            {/* <p className="text-muted">
                Моля, попълнете вашите име и парола !
              </p> */}
            <div className={styles.line}>
              <input 
              type="text" 
              name="username" 
              placeholder="Име" 
              id="username"
              value={values.username}
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
