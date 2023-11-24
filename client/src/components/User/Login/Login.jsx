import styles from "../Login/Login.module.css";
import { useForm } from "../../../hooks/useForm";


export const Login = () => {

    const { values, onChange, onLoginSubmit} = useForm({
      
      email: '',
      password:'',
    })


  return (
    <div className="container">
      <div className={styles.row}>
        
          <div className={styles.card}>
            <form className={styles.box} onSubmit={onLoginSubmit}>
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
