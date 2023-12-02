import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/authContex";

// import * as authService from '../services/authService';
// import * as commentService from "../services/commentService";

export const useForm = (submitHandler,initialValues) => {
  
    // const { login, user } = useContext(AuthContext);
    // const { commentId } = useParams();
    // const navigate = useNavigate();
   
   
    const [values,setValues] = useState(initialValues);
    
   
    // useEffect(() => {
    //     setValues(initialValues)
    // },[initialValues])

    const onChange = (ev) => {
        try {
    
            setValues(state => ({
                ...state,
                [ev.target.name]: ev.target.value
            }))
            
        } catch(error) {
            console.log(error)
        }
        
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        submitHandler(values);
    }

    // const onLoginSubmit = (ev) => {
    //     ev.preventDefault();
            
    //         const { email, password } = values;
            
    //         authService.login(email,password)
    //         .then(authData => { 
    //             login(authData);
    //             navigate('/');
    //         })
    //         .catch(() => {
    //             alert('The login is not successful!')
    //         })  
    // }

    // const onRegisterSubmit = (ev) => {
    //     ev.preventDefault();

    //     const { name, email, password, rePass } = values;
      
    //     if(password !== rePass) {
    //         alert('Passwords don`t match!');
    //         return
    //     }

    //     authService.register(name,email,password)
    //     .then(authData => {   
    //         login(authData);
    //         navigate('/');
    //     })
    //     .catch(() => {
    //         alert('The register is not successful!')
    //     })
    // }

    // const onEditSubmit = (ev) => {
    //     ev.preventDefault();
        
    //         const { imageUrl, cream, description} = values;

    //         const data = { imageUrl, cream, description}
            
    //         commentService.editComment(commentId, user.accessToken, data)
    //             .then(result => {
                    
    //                 setValues(state => ({...state, result})) //Проверка
    //                 navigate('/comments')
    //             .catch((err) => {
    //                 console.log(err)
    //     })
    // })
    // }

//     const onCreateSubmit = (ev) => {
//         ev.preventDefault();

//             const { imageUrl, cream,description} = values;

//             const data = { imageUrl, cream, description}
        
//             commentService.createComment(data, user.accessToken)
//                 .then((result) => {
        
//                     setValues((state) => ({ ...state, result }))
//                     }, navigate("/comments"))
//             .catch((error) =>{ 
//             console.log(error)
//             })
//   }

    return {
        values,
        onChange,
        onSubmit
        // onLoginSubmit,
        // onRegisterSubmit,
        // onEditSubmit,
        // onCreateSubmit
    }


}