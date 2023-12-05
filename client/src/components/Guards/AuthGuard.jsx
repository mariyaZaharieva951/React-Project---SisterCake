import { useContext } from "react"
import { AuthContext } from "../../contexts/authContex"
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
    const { user } = useContext(AuthContext);
    
    if(!user.email) {
       alert('Само за регистрирани потребители')
        return <Navigate to='/login'/>
    }

    return <Outlet/>
}