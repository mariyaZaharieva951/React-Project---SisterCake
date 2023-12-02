import { useState, useContext} from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/authContex";
import { useNavigate } from "react-router-dom";

import * as authService from '../../../services/authService';
import styles from "../Login/Login.module.css";

export const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({email: "",password: ""});

  const resetFormHandler = () => {
    setFormValues({email: "",
    password: "",
    });
    };

      const submitHandler = (values) => {
            
            const { email, password } = values;
            
            authService.login(email,password)
            .then(authData => { 
                login(authData);
                navigate('/');
            })
            .catch(() => {
                alert('The login is not successful!')
            })  
            resetFormHandler();
    }

    const { values, onChange, onSubmit} = useForm(submitHandler,formValues)

    // const emailValidator = (email) => {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   const validEmail = emailRegex.test(email);

    //   if(!validEmail) {
    //     console.log('email  is not valid')
    //     return
    //   }
    // }

    // const passwordValidator = () => {

    // }


  return (
    <div className={styles.container}>
      <div className={styles.row}>
        
          <div className={styles.card}>
            <form className={styles.box} onSubmit={onSubmit}>
              <h1>Вход</h1>
              {/* <p className="text-muted">
                Моля, попълнете вашите име и парола !
              </p> */}
              <input 
              type="text" 
              name="email" 
              placeholder="Имейл" 
              id="email"
              value={values.email}
              onChange={onChange}
              // onBlur={emailValidator}
              />
              <input 
              type="password" 
              name="password" 
              placeholder="Парола" 
              id="password"
              value={values.password}
              onChange={onChange}
              // onBlur={passwordValidator}
              />
              {/* <a className="forgot text-muted" href="#">
                Forgot password?
              </a> */}
              <input type="submit" name="" defaultValue="Login" href="#" />
              {/* <div className="col-md-12">
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
              </div> */}
            </form>
          </div>
        
      </div>
    </div>
  );
};
