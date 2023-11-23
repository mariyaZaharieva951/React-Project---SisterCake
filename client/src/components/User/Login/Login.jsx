import styles from "../Login/Login.module.css";
// import { useContext } from "react";
// import { AuthContext } from "../../../contexts/authContex";
// import * as authService from '../../../services/authService';
// import { useNavigate } from "react-router-dom"
import { useForm } from "../../../hooks/useForm";


export const Login = () => {
    // const { login } = useContext(AuthContext);
    // const navigate = useNavigate();

    const { values, onChange, onSubmit} = useForm({
      email: '',
      password:'',
    })
    

    // const onChange = () => {

    // }

    // const onSubmit = (ev) => {
    //     ev.preventDefault();

    //     const formData = new FormData(ev.target);
    //     const { email, password } = Object.fromEntries(formData);

    //     authService.login(email,password)
    //     .then(authData => {
    //         login(authData);
    //         navigate('/');
    //     })
    //     .catch(() => {
    //         alert('The login is not successful!')
    //     })
    // }


  return (
    <div className="container">
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
              id="name"
              value={values.email}
              onChange={onChange}
              />
              <input 
              type="password" 
              name="password" 
              placeholder="Парола" 
              id="password"
              value={values.password}
              onChange={onChange}
              />
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
