import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContex";
import * as authService from '../services/authService';
import { useNavigate } from "react-router-dom";
import * as commentService from "../services/commentService";
import { useParams } from "react-router-dom";




export const useForm = (initialValues) => {
  
    const { login, user } = useContext(AuthContext);
    const { commentId } = useParams();
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

    const onEditSubmit = (ev) => {
        ev.preventDefault();
        
        const { imageUrl, description} = values;

        const data = { imageUrl, description}
        
        commentService.editComment(commentId, user.accessToken, data)
      .then(result => {
          
          setValues(state => ({...state,result}))
          navigate('/comments')
        .catch((err) => {
            console.log(err)
        })
    })
    }

    const onCreateSubmit = (ev) => {
    ev.preventDefault();

    const { imageUrl, description} = values;

        const data = { imageUrl, description}
        

    commentService
      .createComment(data, user.accessToken)
      .then((result) => {
        console.log('NEW COMMENT',result)
        setValues((oldState) => ({ ...oldState, result }))
      }, navigate("/comments"))
      .catch((error) => console.log(error));
  };

    return {
        values,
        onChange,
        onLoginSubmit,
        onRegisterSubmit,
        onEditSubmit,
        onCreateSubmit
    }


}