import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContex";
import * as authService from '../services/authService';
import { useNavigate } from "react-router-dom"

export const useForm = (initialValues) => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [values,setValues] = useState(initialValues);


    const onChange = (ev) => {
        
        setValues(oldState => ({
            ...oldState,
            [ev.target.name]: ev.target.value
        }))
    }

    const onLoginSubmit = (ev) => {
        ev.preventDefault();
            
            const { email, password } = values;
            
            authService.login(email,password)
            .then(authData => {
                
                login(authData);
                navigate('/');
            })
            .catch(() => {
                alert('The login is not successful!')
            })  
    }

    const onRegisterSubmit = (ev) => {
        ev.preventDefault();

        const { name, email, password, rePass } = values;
      
        if(password !== rePass) {
            alert('Passwords don`t match!');
            return
        }

        authService.register(name,email,password)
        .then(authData => {
            
            login(authData);
            navigate('/');
        })
        .catch(() => {
            navigate('/')
        })
    }

    return {
        values,
        onChange,
        onLoginSubmit,
        onRegisterSubmit
    }

}