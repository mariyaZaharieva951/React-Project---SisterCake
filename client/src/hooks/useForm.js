import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContex";
import * as authService from '../services/authService';
import { useNavigate } from "react-router-dom"

export const useForm = (initialValues) => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [values,setValues] = useState(initialValues);


    const onChange = (ev) => {
        console.log(values)
        setValues(oldState => ({
            ...oldState,
            [ev.target.name]: ev.target.value
        }))
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
            
            const { email, password } = values;
            
            authService.login(email,password)
            .then(authData => {
                console.log(authData)
                login(authData);
                navigate('/');
            })
            .catch(() => {
                alert('The login is not successful!')
            })

        
    }

    return {
        values,
        onChange,
        onSubmit
    }

}